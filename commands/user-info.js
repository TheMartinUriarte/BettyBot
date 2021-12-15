const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Display info about yourself.'),
	async execute(interaction) {
		await interaction.reply(`You're ${interaction.user.tag} but more commonly known as ${interaction.user.username}\nAlthough I prefer to call you ${interaction.user.id}`);
	},
};