const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Displays a list of available commands'),
    async execute(interaction) {
        await interaction.reply('Available commands:\n!ping - Responds with Pong!\n/help - Displays this help message');
    }
};
