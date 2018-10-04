// Call Packages
const Discord = require('discord.js');

// Define client for Discord
const client = new Discord.Client();

// This will run when a message is recieved...
client.on('message', message => {

    // Variables
    let prefix = '~';
    let msg = message.content.toUpperCase();

    // Commands

    // Ping - Let's create a quick command to make sure everything is working!
    if (message.content.toUpperCase() === `${prefix}PING`) {
        message.channel.send('Pong!');
    }


});

client.login(process.env.BOT_TOKEN)
