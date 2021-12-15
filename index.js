const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
// [Uri: L2 Require the necessary discord.js classes
// [Uri: Line 3 is the line that uses the key of "token" to get it's value.]

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
/* [Uri: Above line is essentially saying, file system module (fs), I want you to read the commands directory of files as well as keep it synced
at all times. But filter through it and just get me any file that ends with .js, I don't want any of the other stuff.]*/

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // Set a new item in the collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
}

/* [Uri: When the client is ready, run this code (only once) [Uri: It runs by itself once, no need to check this to make sure it's
working unless if you're really at a loss for what to do.]*/
client.once('ready', () => {
	console.log('Ready!');
});

/* [Uri: Listens for interactions between a user and Betty. Primarily checks if it is as valid interaction or if she needs to back us
out of whatever it is. If it's a valid interaction, she will match the interaction, now referred to as command to whatever
commands we have of the same name. Ping triggers ping, etc.*/
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// Login to Discord with your client's token
client.login(token);