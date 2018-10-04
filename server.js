
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('message', message => {

    let prefix = '~';
    let msg = message.content.toUpperCase();


    if (message.content.toUpperCase() === `${prefix}PING`) {
        message.channel.send('Pong!');
    }


});

client.login(process.env.TOKEN)
