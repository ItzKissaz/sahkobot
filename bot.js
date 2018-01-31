const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == 'c!help') {
        message.reply('**Chocolate Bot** __Help:__');
        message.channel.sendMessage('**Cban** = __Bans__ the user ```COMING SOON```');
        message.channel.sendMessage('**Cbot** = Bot info');
        message.channel.sendMessage('**Chocolate Bot By __RaikaZ#0178__**');
        }
});

bot.on('message', (message) => {
    if(message.content == 'Cbot') {
        message.channel.sendMessage('**Chocolate Bot** __Version 0.1__');
        message.channel.sendMessage('__This **Discord Bot** Using Discord.NET. Bots host is **Heroku**__');
        message.channel.sendMessage('Help command = **Chelp**')
    }
});
bot.on('message', (message) => {
    if(message.content == 'Cban') {
        message.channel.sendMessage('**ERROR:** __Command not done!__ @RaikaZ\#0178  is so sorry');
        message.channel.sendFile('sorry.png');
    }
});
// Set the bot's online/idle/dnd/invisible status
bot.on("ready", () => {
    bot.user.setStatus("dnd");
});        

bot.login('NDA1MDM5MjkyODcyNjU0ODU4.DVJCgQ.eKTu3KpKiccLHmqr9wxl-fyzsaM');




