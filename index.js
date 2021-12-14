// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
// [Uri: Line 3 is the line that uses the key of "token" to get it's value.]

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

/* When the client is ready, run this code (only once) [Uri: It runs by itself once, no need to check this to make sure it's
working unless if you're really at a loss for what to do.]*/
client.once('ready', () => {
	console.log('Ready!');
});

/*Listens for interactions between a user and Betty. Primarily checks if it is as valid interaction or if she needs to back us
out of whatever it is. If it's a valid interaction, she will match the interaction, now referred to as commandName to whatever
commands we have of the same name. Ping triggers ping, etc. Take note of the usage of the grave accent, the slanted apostrophe in L26.*/
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Please stop.');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nGuild Created
        ${interaction.guild.createdAt}\nGuild Verification Level: ${interaction.guild.verificationLevel}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

// Login to Discord with your client's token
client.login(token);