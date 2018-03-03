const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "s!";

bot.on("ready", () => bot.user.setPresence({ status: "dnd", game: {name: `chocolatebot.tk | c!help`} }));
console.log("Olen valmiina! Joona#1266 auttoi botin rakentamisessa.");
console.log("Myöskään virheitä ei löytynyt");
bot.on('message', async message => {
    if(message.content.startsWith(prefix + 'help')) {
        message.delete(1000); //Supposed to delete message
        message.reply('**Chocolate Bot** __Help:__');
        message.channel.sendMessage('**--c!ban--** = __Bans__ the user ```COMING SOON```');
        message.channel.sendMessage('**c!bot** = Bot info');
        message.channel.sendMessage('**Chocolate Bot By __RaikaZ#0178__**');
        }

    if(message.content.startsWith(prefix + 'bot')) {
        message.delete(1000); //Supposed to delete message
        message.channel.sendMessage('**Chocolate Bot** __Version 0.5__');
        message.channel.sendMessage('__This **Discord Bot** Using Discord.js. Bots host is **Heroku**__');
        message.channel.sendMessage('Help command = **c!help**')
    };
     
   
              
              
    

        
    
    if(message.content.startsWith(prefix + 'test')) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(6, message.content.length));
        bot.channels.get('417743747863019532').sendMessage(message.content.slice(10, message.content.lenght))
    };
    if(message.content.startsWith(prefix + 'ilmoitus')) {
        message.delete(1000); //Supposed to delete message
        bot.channels.get('417743747863019532').sendMessage(message.content.slice(10, message.content.lenght))
    };
    
    

    
      
            
    });

bot.login(process.env.BOT_TOKEN);
