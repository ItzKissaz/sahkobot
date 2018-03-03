const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "s!";

bot.on("ready", () => bot.user.setPresence({ status: "dnd", game: {name: `chocolatebot.tk | c!help`} }));
console.log("Olen valmiina! Joona#1266 auttoi botin rakentamisessa.");
console.log("Myöskään virheitä ei löytynyt");
bot.on('message', async message => {
    if(message.content.startsWith(prefix + 'help')) {
        message.delete(1000); //Supposed to delete message
        message.reply('**SELVIYTYJÄ** __KOMENNOT:__');       
        message.channel.sendMessage('**s!stats** Näyttää botin tietoja \n **s!test** testaa botin tulevia toimintoja');
        message.channel.sendMessage('**Botin tehnyt __RAIKA5Z#0178__**');
        }

    if(message.content.startsWith(prefix + 'stats')) {
        message.delete(1000); //Supposed to delete message
        message.channel.sendMessage('**Selviytyjä**');
        message.channel.sendMessage('Botti on **Käynnissä**');
        message.channel.sendMessage('Komennot saat näkyviin kirjoitamalla **s!help**')
    };
     
   
              
              
    

        
    
    if(message.content.startsWith(prefix + 'test')) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(6, message.content.length));
       // bot.channels.get('417743747863019532').sendMessage(message.content.slice(10, message.content.lenght))
    };
    if(message.content.startsWith(prefix + 'ilmoitus')) {
        message.delete(1000); //Supposed to delete message
        bot.channels.get('417743747863019532').sendMessage(message.content.slice(10, message.content.lenght))
    };
    
    

    
      
            
    });

bot.login(process.env.BOT_TOKEN);
