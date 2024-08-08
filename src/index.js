// To run, put into the terminal: node src/index.js
// You can also (only if you have nodemon globaly installed) put: nodemon

// Unless your forking this project, you can remove line 5

require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (cnt) => {
    console.log(`${cnt.user.tag} is ready!`);
});

client.on("messageCreate", (msg) => {
    if(msg.author.bot) {
        return;
    }

    if(msg.content === 'hi botty') {
        msg.reply('Hello There!')
    }
});

// If you removed line 5, you can replace process.env.TOKEN with your bot token
client.login(process.env.TOKEN);
