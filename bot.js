const Discord = require('discord.js');
const bot = new Discord.Client();
var verifycode = "5u0M1";
var prefix = "o$";
var test = 100;
var channelid = "429657656614060032";
var sender = "message.author";
bot.on("ready", () => bot.user.setPresence({ status: "idle", game: {name: `chocolatebot.tk | c!help`} }));
console.log("Olen valmiina! Joona#1266 auttoi botin rakentamisessa.");
console.log("Myöskään virheitä ei löytynyt");
var NewUsers = 0;
bot.on("guildMemberAdd", (member) => {
    bot.GetTextChannel(channelid).SendMessageAsync("JOINMESSAGE HERE")
});
bot.on("guildMemberRemove", (member) => {
    bot.channels.get(channelid).sendMessage("LEAVEMESSAGE HERE");
        
});
const fs = require("fs");


var userData = JSON.parse(fs.readFileSync("./saldo.json", "utf8"));


bot.on('message', async message => {
    if(message.content.startsWith(prefix + 'help')) {
        message.delete(1000); //Supposed to delete message
        message.reply('**Oweq** __Commands:__');       
        message.channel.sendMessage('**o$bal** Send you Oweq Balance \n **o$payment <user> <value>** Pay Oweq money to other user');
        message.channel.sendMessage('Oweq Virtual Money Bot is AlPHA');
    };
    if (!userData[message.author.id]) userData[message.author.id] = {
        OweqBalance: 0
    }
    userData[message.author.id].OweqBalance++;
    fs.writeFile('./saldo.json', JSON.stringify(userData), (err)=> {
        if (err) console.error(err);
        });
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
    
    if(message.content.startsWith(prefix + 'setbal')) {
        message.delete(1000); //Supposed to delete message
        var test = message.content.slice(9, 14);
        message.channel.sendMessage("New users:" + NewUsers);
        message.channel.sendMessage('Set everyone balance to' + test ).then(msg => {
            msg.delete(10000)
            
            }).catch();
        if(test > 1000) {
            message.channel.sendMessage("Cant set balance 1000+");
            var test = 1000;                         
        }
    };
    if(message.content.startsWith(prefix + 'bal')) {
        message.delete(1000); //Supposed to delete messag
        var embed = new Discord.RichEmbed().addField(message.author.username + " Stats", "Balance " + userData[message.author.id].OweqBalance + " / 1000 Season 0").setColor(0x00ffff).setThumbnail(message.author.avatarURL)
        message.channel.sendEmbed(embed);
        console.log(message.author.username + ` Viewed their profile!`);
        
    }
    if(message.content.startsWith(prefix + 'verify')) {
        message.delete(1000); //Supposed to delete message
     
        message.channel.sendMessage('Verify you. Type command o$verify 5u0M1').then(msg => {
            msg.delete(10000)
            
            }).catch();
        if(message.content.slice(9, 14) == verifycode) {
            message.reply(" is now Verified").then(msg => {
                msg.react("🤔");
                }).catch();
        }
    }
});
bot.login(process.env.BOT_TOKEN);
