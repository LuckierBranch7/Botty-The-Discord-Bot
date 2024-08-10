// To run, put into the terminal: node src/index.js
// You can also (only if you have nodemon globaly installed) put: nodemon

// Unless your forking this project, you can remove line 5

require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, AttachmentBuilder, Discord, Partials } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],

    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

eventHandler(client);

// If you removed line 5, you can replace process.env.TOKEN with your bot token
client.login(process.env.TOKEN);