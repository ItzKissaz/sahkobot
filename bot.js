const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == 'Chelp') {
        message.channel.sendMessage('**Chocolate Bot By __RaikaZ#0178__**');
        }
});


bot.login('NDA1MDM5MjkyODcyNjU0ODU4.DU3IVw.yph7a4t9m4AwP7Q3u71HcnUPe4Y');
