module.exports = {
    name: 'ping',
    description: 'Pong!',
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: Object[],
    // deleted: Boolean,

    response: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`);
    },
};