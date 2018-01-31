const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "c!";

bot.on("ready", () => bot.user.setPresence({ status: "idle", game: {name: `chocolatebot.tk | c!help`} }));
console.log("Olen valmiina! Joona#1266 auttoi botin rakentamisessa.");

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

    if(message.content.startsWith(prefix + 'admin test')) {
        message.channel.sendMessage('Check your **Direct Messages**')
        message.author.sendMessage("Working :)")
    };
    if (message.content.startsWith(prefix + 'version')) {
         var versio = new Discord.RichEmbed().setColor(0x0000FF).addField("**Version 0.5**", "**Added**", "New code style.", "**Removed**", "Nothing", "**__Fixed__**", "Nothing")
         message.channel.sendEmbed(versio)
     };
    if(message.content.startsWith(prefix + 'admin tinder')) {
        let age = args[0]; // Remember arrays are 0-based!.
        let sex = args[1];
        let location = args[2];
        message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
    };

    if(message.content.startsWith(prefix + 'ban')) {
        message.channel.sendMessage('**ERROR:** __Command not done!__ \n@RaikaZ#0178 is so sorry');
    };

    if(message.content.startsWith(prefix + 'admin changemessage huoltokatko')) {
        message.channel.sendMessage('Changed the **Playing** message');
        bot.user.setGame('chocolatebot.tk | FixPause');
    };

    if(message.content.startsWith(prefix + 'admin changemessage normal')) {
        message.channel.sendMessage('Changed the **Playing** message');
        bot.user.setGame('chocolatebot.tk | c!help ');
    };

    });

bot.login("NDA1MDM5MjkyODcyNjU0ODU4.DVJCgQ.eKTu3KpKiccLHmqr9wxl-fyzsaM");
