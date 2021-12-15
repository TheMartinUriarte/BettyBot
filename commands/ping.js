const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Betty doesn\'t like pings.'),
	async execute(interaction) {
		await interaction.reply('Please stop.');
	},
};