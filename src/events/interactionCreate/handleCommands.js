const { devs, testServer } = require('../../../config.json');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = async (client, interaction) => {
    if(!interaction.isChatInputCommand()) return;

    const localCommands = getLocalCommands();

    try {
        const commandObject = localCommands.find((cmd) => cmd.name === interaction.commandName);

        if(!commandObject) return;

        if(commandObject.devOnly) {
            if(!devs.includes(interaction.member.id)) {
                interaction.reply({
                    content: 'You are not a rank that is able to use this command.',
                    ephemeral: true,
                });
                return;
            }
        }

        if(commandObject.testOnly) {
            if(!(interaction.guild.id === testServer)) {
                interaction.reply({
                    content: 'You cannot run this command here.',
                    ephemeral: true,
                });
                return;
            }
        }

        if(commandObject.permissonRequired?.length) {
            for(const permission of commandObject.permissonRequired) {
                if(!interaction.member.permissions.has(permission)) {
                    interaction.reply({
                        content: 'You are not a rank that is able to use this command.',
                        ephemeral: true,
                    });
                    return;
                }
            }
        }

        if(commandObject.botPermissions?.length) {
            for(const permission of commandObject.botPermissions) {
                const bot = interaction.guild.members.me;

                if(!bot.permission.has(permission)) {
                    interaction.reply({
                        content: 'I do not have enough permissions.',
                        ephemeral: true,
                    });
                    return;
                }
            }
        }

        await commandObject.response(client, interaction);x
    } catch (error) {
        console.log(`${error}`);
    }
};
