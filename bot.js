const Discord = require('discord.js');
const client = new Discord.Client();
const commando = require('discord.js-commando');
client.on('ready', () => {
    console.log('I am ready!');
});
bot.registery.registerGroup('random', 'Random');
bot.registery.registerCommandsIn(__dirname + "/commands");
client.on('message', message => {
    if (message.content === ':stats') {
    	message.
        reply('**Chocolate Bot By** __RaikaZ#0178__!');
        message.reply('More soon')
  	}
}
client.on('message', message => {
    if (message.content === ':help') {
    	message.
        reply('**Chocolate Bot Commands:**');
        message.reply('**:help = Send the command list**')
        message.reply('**:stats** = **Send bot stats to chat**')
  	}
} 
         );

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
