const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "o$";
var test = 100;
bot.on("ready", () => bot.user.setPresence({ status: "dnd", game: {name: `chocolatebot.tk | c!help`} }));
console.log("Olen valmiina! Joona#1266 auttoi botin rakentamisessa.");
console.log("Myöskään virheitä ei löytynyt");
bot.on('message', async message => {
    if(message.content.startsWith(prefix + 'help')) {
        message.delete(1000); //Supposed to delete message
        message.reply('**Oweq** __Commands:__');       
        message.channel.sendMessage('**o$bal** Send you Oweq Balance \n **o$payment <user> <value>** Pay Oweq money to other user'');
        message.channel.sendMessage(');
        }

    if(message.content.startsWith(prefix + 'stats')) {
        message.delete(1000); //Supposed to delete message
        message.channel.sendMessage('**Oweq Bot Status**');
        message.channel.sendMessage('Bot is **IDLING**');
        message.channel.sendMessage('IDLE = Test version \n ONLINE = Viral version')
    };
     
   
              
              
    

        
    
    if(message.content.startsWith(prefix + 'test')) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(6, message.content.length));
       // bot.channels.get('417743747863019532').sendMessage(message.content.slice(10, message.content.lenght))
    };
    if(message.content.startsWith(prefix + 'ilmoitus')) {
        message.delete(1000); //Supposed to delete message
        bot.channels.get('417743747863019532').sendMessage("Uusi ilmoitus", message.content.slice(10, message.content.lenght));
        
       
    };
    
    

    
      
            
    });

bot.login(process.env.BOT_TOKEN);
