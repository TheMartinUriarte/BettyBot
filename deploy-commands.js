const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');
/*L1 to L4 essentially builds out these commands. SlashCommandBuilder calls for the @discordjs/builders package
And then helps create the command.*/

/*These are the three commands we are using atm*/
const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with please stop!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

/*The code below is more for error checking than anything else.*/
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);