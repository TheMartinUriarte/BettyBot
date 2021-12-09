// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
// [Uri: Line 3 is the line that uses the key of "token" to get it's value.]

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once) [Uri: It runs by itself once, no need to check this.]
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);