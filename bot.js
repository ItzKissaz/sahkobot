const Discord = require('discord.js');
const bot = new Discord.Client();

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

// Set the bot's online/idle/dnd/invisible status
bot.on("ready", () => {
    bot.user.setStatus("idle");
});        
bot.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  bot.user.setGame(`on ${client.guilds.size} servers`);
});
bot.login('NDA1MDM5MjkyODcyNjU0ODU4.DVJCgQ.eKTu3KpKiccLHmqr9wxl-fyzsaM');




