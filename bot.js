const Discord = require('discord.js');
const bot = new Discord.Client();
var verifycode = "5u0M1";
var prefix = "o$";
var test = 100;
bot.on("ready", () => bot.user.setPresence({ status: "idle", game: {name: `chocolatebot.tk | c!help`} }));
console.log("Olen valmiina! Joona#1266 auttoi botin rakentamisessa.");
console.log("Myöskään virheitä ei löytynyt");
bot.on('message', async message => {
    if(message.content.startsWith(prefix + 'help')) {
        message.delete(1000); //Supposed to delete message
        message.reply('**Oweq** __Commands:__');       
        message.channel.sendMessage('**o$bal** Send you Oweq Balance \n **o$payment <user> <value>** Pay Oweq money to other user');
        message.channel.sendMessage('Oweq Virtual Money Bot is AlPHA');
    };

    if(message.content.startsWith(prefix + 'stats')) {
        message.delete(1000); //Supposed to delete message
        message.channel.sendMessage('**Oweq Bot Status**');
        message.channel.sendMessage('Bot is **IDLING**');
        message.channel.sendMessage('IDLE = Test version \n ONLINE = Viral version')
    };
     
   
              
              
    

        
    
    if(message.content.startsWith(prefix + 'payment')) {
        message.delete(1000); //Supposed to delete message
        
        message.channel.sendMessage('Payment of ' +  message.content.slice(9, 13) + '`O is complete').then(msg => {
            msg.delete(10000)
            
            }).catch();
    };
    if(message.content.startsWith(prefix + 'bal')) {
        message.delete(1000); //Supposed to delete message
        
        message.channel.sendMessage('Your balance is ' + test + '`O').then(msg => {
            msg.delete(10000)
            msg.react("🤑");
            }).catch();
    }
    if(message.content.startsWith(prefix + 'verify')) {
        message.delete(1000); //Supposed to delete message
     
        message.channel.sendMessage('Verify you. Type command o$verify 5u0M1').then(msg => {
            msg.delete(10000)
            
            }).catch();
        if(message.content.slice(9, 14) == verifycode) {
            const guildMember = message.member;
            guildMember.addRole('Verified');
            message.reply(" is now Verified").then(msg => {
                msg.react("🤔");
                }).catch();
        }
    }
});
bot.login(process.env.BOT_TOKEN);
