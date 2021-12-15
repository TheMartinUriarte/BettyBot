const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beep')
		.setDescription('Betty doesn\'t like being beeped.'),
	async execute(interaction) {
		await interaction.reply('You motherfu-...');
	},
};