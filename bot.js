const Discord = require('discord.js');
const bot = new Discord.Client();
var verifycode = "5u0M1";
var prefix = ",";
var test = 100;
var channelid = "435140636631367712";
var sender = "message.author";
var client = "bot";
bot.on("ready", () => bot.user.setPresence({ status: "idle", game: { name: 'RatTheRotten.exe | ,helö', type: 0 } }));
console.log("Olen valmiina! Joona#1266 auttoi botin rakentamisessa.");
console.log("Myöskään virheitä ei löytynyt");
var NewUsers = 0;
bot.on("guildMemberAdd", (member) => {
    bot.GetTextChannel(channelid).SendMessageAsync("New member joined")
});
bot.on("guildMemberRemove", (member) => {
    bot.channels.get(channelid).sendMessage("Member left.");
        
});
bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  
});

bot.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

bot.on('message', async message => {
    if(message.content.startsWith(prefix + 'help')) {
        message.delete(1000); //Supposed to delete message
        message.channel.send("Im on ${bot.guilds.size} servers!")
        message.reply('**RatTheRotten** __Commands:__');       
        message.channel.sendMessage('**o$bal** Send you Oweq Balance \n **o$payment <user> <value>** Pay Oweq money to other user');
        message.channel.sendMessage('Oweq Virtual Money Bot is AlPHA');
    };
    if(message.content.startsWith(prefix + 'stats')) {
        message.delete(1000); //Supposed to delete message
        message.channel.sendMessage('**Status**');
        
    
        message.channel.sendMessage("**Servers:**" + `${bot.guilds.size}`)
        message.channel.sendMessage('Your ping is `' + `${message.createdTimestamp - Date.now()}` + ' ms`');
    
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
        var embed = new Discord.RichEmbed().addField(message.author.username + "").setColor(0x00ffff).setThumbnail(message.author.avatarURL)
        message.channel.sendEmbed(embed);
        console.log(message.author.username + ` Viewed their profile!`);
        
    }
    if(message.content.startsWith(prefix + 'verify')) {
        message.delete(1000); //Supposed to delete message
     
        message.channel.sendMessage('Verify you. Type command o$verify 5u0M1').then(msg => {
            msg.delete(10000)
            
            }).catch();
        if(message.content.slice(9, 14) == verifycode) {
            let role = message.guild.roles.find("name", "Verified");


// or the person who made the command: let member = message.member;

// Add the role!
            sender.addRole(role).catch(console.error);

            message.reply(" is now Verified").then(msg => {
                msg.react("🤔");
                }).catch();
        }
    }
});
bot.login(process.env.BOT_TOKEN);
