const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Bans a member inside the server',
    // devOnly: Boolean,
    // testOnly: Boolean,
    options: [
        {
            name: 'user',
            description: 'The target user to ban',
            required: true,
            type: ApplicationCommandOptionType.Mentionable,
        },
        {
           name: 'reason',
           description: 'Why do you want to ban them',
           required: false,
           type: ApplicationCommandOptionType.String,

        }
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],

    response: (client, interaction) => {
        interaction.reply("Banned");
    }
}