const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "c!";

bot.on("ready", () => bot.user.setPresence({ status: "dnd", game: {name: `chocolatebot.tk | c!help`} }));
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
     
   
              
              
    

        
    };
    if(message.content.startsWith(prefix + 'admin test')) {
        message.author.sendMessage('Ootko toiletti? Mul on vessahätä!');
        message.channel.sendMessage('Check your **Direct Messages**');
        message.author.sendMessage("Working :)");
        message.author.sendMessaege("Servers: " + bot.servers.size + "xd");
        message.author.react("👍");
        message.channel.react("👎");
        message.react("👌");
    };

    
       
            
    });

bot.login("NDE4NDYyNDIwOTM2MTYzMzM2.DXh8Mg.BJtmfEV6_b12l0ZpNQMnNSKhn6g");
