const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == 'c!help') {
        message.reply('**Chocolate Bot** __Help:__');
        message.channel.sendMessage('**Cban** = __Bans__ the user ```COMING SOON```');
        message.channel.sendMessage('**Cbot** = Bot info');
        message.channel.sendMessage('**Chocolate Bot By __RaikaZ#0178__**');
        }
});

bot.on('message', (message) => {
    if(message.content == 'Cbot') {
        message.channel.sendMessage('**Chocolate Bot** __Version 0.1__');
        message.channel.sendMessage('__This **Discord Bot** Using Discord.NET. Bots host is **Heroku**__');
        message.channel.sendMessage('Help command = **Chelp**')
    }
});
bot.on('message', (message) => {
    if(message.content == 'Cban') {
        message.channel.sendMessage('**ERROR:** __Command not done!__ @RaikaZ\#0178  is so sorry');
        message.channel.sendFile('sorry.png');
    }
});
// Set the bot's "Playing: " status (must be in an event!)
// NOTE: THIS METHOD IS DEPRECATED AS OF VERSION 11.3 AND WILL BE REMOVED IN VERSION 12
bot.on("ready", () => {
    bot.user.setGame("ChocolateBot | c!help");
});

// NOTE: INTRODUCED IN VERSION 11.3 AND REPLACES setGame
bot.on("ready", () => {
    bot.user.setActivity({game: {name: "ChocolateBot | c!help", type: 0}});
});
// Set the bot's online/idle/dnd/invisible status
bot.on("ready", () => {
    bot.user.setStatus("dnd");
});        
bot.on('message', (message) => {
    if(message.content == 'c!admin test') {
        // Send a Direct Message to a user
        message.author.send("hello");
        // With Member it works too:
        message.member.send("Heya!");
    }
});

bot.login('NDA1MDM5MjkyODcyNjU0ODU4.DVJCgQ.eKTu3KpKiccLHmqr9wxl-fyzsaM');
