const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
require('dotenv').config();

const commands = [
// When you're done adding commands, run this file in the terminal using: node src/registerCommands.js

    // Add Commands Here ⬇️⬇️⬇️
    {
        name: 'hi',
        description: 'Says hi'
    },
    {
        name: 'ping',
        description: 'Pong'
    },
    {
        name: 'flip-a-coin',
        description: 'Flips a coin'
    },
    {
        name: 'calculate',
        description: 'Calculate numbers',
        options: [
            {
                name: 'how-to-calculate',
                description: 'How will you calculate the numbers?',
                type: ApplicationCommandOptionType.String,
                required: true,
                choices: [
                    {
                        name: 'add',
                        value: 'a'
                    },
                    {
                        name: 'subtract',
                        value: 's'
                    },
                    {
                        name: 'multiply',
                        value: 'm'
                    },
                    {
                        name: 'divide',
                        value: 'd'
                    }
                ]
            },
            {
                name: 'first-number',
                description: 'The first number',
                type: ApplicationCommandOptionType.Number,
                required: true
            },
            {
                name: 'last-number',
                description: 'The second number',
                type: ApplicationCommandOptionType.Number,
                required: true
            }
        ]
    },
    {
        name: 'roll',
        description: 'Roll any type of dice',
        options: [
            {
                name: 'dice-type',
                description: 'Type of dice you want to roll',
                type: ApplicationCommandOptionType.Number,
                required: true,
                choices: [
                    {
                        name: 'd4',
                        value: 4
                    },
                    {
                        name: 'd6',
                        value: 6
                    },
                    {
                        name: 'd8',
                        value: 8
                    },
                    {
                        name: 'd10',
                        value: 10
                    },
                    {
                        name: 'd12',
                        value: 12
                    },
                    {
                        name: 'd20',
                        value: 20
                    }
                ]
            }
        ]
    },
    {
        name: 'my-github',
        description: 'Link to my github page'
    },
    {
        name: 'buy-me-a-lemonade',
        description: 'Link to my Ko-Fi page'
    },
    {
        name: 'meme-me',
        description: 'Sends a random meme'
    }

];

// If you don't have a .env file with the TOKEN variable, just replace process.env.TOKEN with your bot token
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
try {
console.log("Initializing commands");
await rest.put(
// CLIENT_ID is the bot ID, not token
// GUILD_ID is the server ID
Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
{ body: commands }
);
console.log("Commands are primed!");
} catch (error) {
console.log(`Error! ${error}`);
}
})();
