const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "c!";

bot.on("ready", () => bot.user.setPresence({ status: "idle", game: {name: `chocolatebot.tk | c!help`} }));
console.log("Olen valmiina!");

bot.on('message', (message) => {
    if(message.content == 'c!help') {
        message.reply('**Chocolate Bot** __Help:__');
        message.channel.sendMessage('**--c!ban--** = __Bans__ the user ```COMING SOON```');
        message.channel.sendMessage('**c!bot** = Bot info');
        message.channel.sendMessage('**Chocolate Bot By __RaikaZ#0178__**');
        }
});

bot.on('message', (message) => {
    if(message.content == 'c!bot') {
        message.channel.sendMessage('**Chocolate Bot** __Version 0.1__');
        message.channel.sendMessage('__This **Discord Bot** Using Discord.NET. Bots host is **Heroku**__');
        message.channel.sendMessage('Help command = **Chelp**')
    }
});
bot.on('message', (message) => {
    if(message.content == 'c!admin test') {
        message.channel.sendMessage('Check your **Direct Messages**')
        message.author.sendMessage("Working :)")
    if(message.content == 'c!admin tinder') {
        let age = args[0]; // Remember arrays are 0-based!.
        let sex = args[1];
        let location = args[2];
        message.reply('Hello ${message.author.username}, I see you`re a ${age} year old ${sex} from ${location}. Wanna date?');
}
    }
});
        
     

bot.on('message', (message) => {
    if(message.content == 'c!ban') {
        message.channel.sendMessage('**ERROR:** __Command not done!__ @RaikaZ\#0178  is so sorry');
        message.channel.sendFile('sorry.png');
    }
});

bot.on('message', (message) => {
    if(message.content == 'c!admin changemessage huoltokatko') {
        message.channel.sendMessage('Changed the **Playing** message');
        bot.user.setGame('chocolatebot.tk | FixPause');
    }
});
bot.on('message', (message) => {
    if(message.content == 'c!admin changemessage normal') {
        message.channel.sendMessage('Changed the **Playing** message');
        bot.user.setGame('chocolatebot.tk | c!help ');
    }
});
     
bot.login('NDA1MDM5MjkyODcyNjU0ODU4.DVJCgQ.eKTu3KpKiccLHmqr9wxl-fyzsaM');
