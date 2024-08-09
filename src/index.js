// To run, put into the terminal: node src/index.js
// You can also (only if you have nodemon globaly installed) put: nodemon

// Unless your forking this project, you can remove line 5

require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, AttachmentBuilder, Discord, Partials } = require('discord.js');

const client = new Client({
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],

    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const { loadCommands } = require('../Botty 6.0/externalContent/Commands');

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
    
        if(interaction.commandName === 'roll') {
            const diceValue = interaction.options.get('dice-type').value;
            var dice = (Math.floor(Math.random() * diceValue) + 1)
    
            interaction.reply(`You rolled ${dice}`)
        }
    
        if(interaction.commandName === 'my-github') {
            const embed = new EmbedBuilder().setTitle("LuckierBranch7's Github").setDescription("Hey, please check out my github page. I am constantly making projects. Thanks!");
            const file = new AttachmentBuilder('../Botty 6.0/images/githubLogo.png');
    
            embed.setColor('#1E90FF');
            embed.setURL('https://github.com/LuckierBranch7?tab=repositories');
            embed.setImage('attachment://githubLogo.png');
    
            interaction.reply({ embeds: [embed], files: [file] });
        }

        if(interaction.commandName === 'calculate') {
            const num1 = interaction.options.get('first-number').value;
            const num2 = interaction.options.get('last-number').value;

            const choice = interaction.options.get('how-to-calculate').value;

            var output;
            var htc;

            if(choice === 'a') {
                output = num1 + num2;
                htc = '+';
            } else if(choice === 's') {
                output = num1 - num2;
                htc = '-';
            } else if(choice === 'm') {
                output = num1 * num2;
                htc = '*';
            } else if(choice === 'd') {
                output = num1 / num2;
                htc = '/';
            }

            interaction.reply(`${num1} ${htc} ${num2} = ${output}`);
        }

        if(interaction.commandName === 'buy-me-a-lemonade') {
            const embed = new EmbedBuilder();
            const file = new AttachmentBuilder('../Botty 6.0/images/kofiLogo.png');

            embed.setTitle("LuckierBranch7's Ko-Fi Page");
            embed.setDescription("Hey, please buy me a lemonade at my Ko-Fi page! Thanks!");
            embed.setColor('#1E90FF');
            embed.setURL('https://ko-fi.com/luckierbranch7');
            embed.setImage('attachment://kofiLogo.png');

            interaction.reply({ embeds: [embed], files: [file] });
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
// To finish, go to https://github.com/p0ryae/Discord.JS-meme/blob/master/index.js