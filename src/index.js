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

client.on('interactionCreate', (interaction) => {
    // Check for Commands
    if(!interaction.isChatInputCommand()) {
        return;
    }
    
    // Command Functions
    if(interaction.commandName === 'hi') {
        interaction.reply("Hello There!");
    }

    if(interaction.commandName === 'ping') {
        interaction.reply("Pong!");
    }

    if(interaction.commandName === 'flip-a-coin') {
        var coin = (Math.floor(Math.random() * 2) == 0);
        var message;

        if(coin) {
            message = 'Heads';
        }else {
            message = 'Tails';
        }

        interaction.reply(message);
    }

    if(interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;

        var output = num1 + num2;
        interaction.reply(`${num1} + ${num2} = ${output}.`);
    }

    if(interaction.commandName === 'roll') {
        const diceValue = interaction.options.get('dice-type').value;
        var dice = (Math.floor(Math.random() * diceValue) + 1)

        interaction.reply(`You rolled ${dice}`)
    }
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
