const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "c!";

bot.on("ready", () => bot.user.setPresence({ status: "idle", game: {name: `chocolatebot.tk | c!help`} }));
console.log("Olen valmiina! Joona#1266 auttoi botin rakentamisessa.");
console.log("Myöskään virheitä ei löytynyt");
bot.on('message', async message => {
    if(message.content.startsWith(prefix + 'help')) {
        message.reply('**Chocolate Bot** __Help:__');
        message.channel.sendMessage('**--c!ban--** = __Bans__ the user ```COMING SOON```');
        message.channel.sendMessage('**c!bot** = Bot info');
        message.channel.sendMessage('**Chocolate Bot By __RaikaZ#0178__**');
        }

    if(message.content.startsWith(prefix + 'bot')) {
        message.channel.sendMessage('**Chocolate Bot** __Version 0.5__');
        message.channel.sendMessage('__This **Discord Bot** Using Discord.js. Bots host is **Heroku**__');
        message.channel.sendMessage('Help command = **c!help**')
    };
     
    if (message.content.startsWith(prefix + "stats")) {
    message.channel.sendMessage('**ChocolateBot** Stats:')
    message.channel.sendMessage('Servers:' + bot.server.length)
    };
    if(message.content.startsWith(prefix + 'admin test')) {
        message.channel.sendMessage('Check your **Direct Messages**')
        message.author.sendMessage("Working :)")
    };
    if(message.content.startsWith(prefix + 'ban')) {
        message.channel.sendMessage('**ERROR:** __Command not done!__ \n@RaikaZ#0178 is so sorry');
    };



    });

bot.login("NDA1MDM5MjkyODcyNjU0ODU4.DVJCgQ.eKTu3KpKiccLHmqr9wxl-fyzsaM");
