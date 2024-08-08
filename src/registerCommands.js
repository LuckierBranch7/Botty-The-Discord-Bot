const { REST, Routes } = require('discord.js');
require('dotenv').config();

const commands = [
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
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Initializing commands");
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );
        console.log("Commands are primed!");
    } catch (error) {
        console.log(`Error! ${error}`);
    }
})();