const Discord = require('discord.js');
const bot = new Discord.Client();
var verifycode = "5u0M1";
var prefix = "j!";
var test = 100;
var channelid = "435140636631367712";
var sender = "message.author";
var client = "bot";
bot.on("ready", () => bot.user.setPresence({ status: "idle", game: { name: 'j!help | (:', type: 0 } }));
console.log("Olen valmiina! Joona#1266 auttoi botin rakentamisessa.");
console.log("Myöskään virheitä ei löytynyt");
var NewUsers = 0;

bot.on('message', async message => {
    
    if(message.content.startsWith(prefix + 'help')) {
        message.delete(1000); //Supposed to delete message
        message.channel.sendMessage('**Justelius** Ohjeet \n**Kehitän bottia kun ehdin. Komennot ovat saatavilla vain ylläpitäjille');       
        };
      
    if(message.content.startsWith(prefix + '8ball')) {
        message.delete(1000); //Supposed to delete message
        message.channel.sendMessage('**8BALL**');
        message.channel.sendMessage('Kysyit viisaalta 8 Pallolta kysymyksen: **' + message.content.slice(8, message.content.lenght) + '**');
        let vastaukset = ["Kyllä", "Ehkä ei", "Ei", "Ei missään nimessä"];
        let vastaus = vastaukset.lenght + 1
        message.channel.sendMessage('8 Pallo on päättänyt vastauksensa: **' + vastaukset[getRandomInt(vastaus)] + '**')
        
    };
            });
bot.login(process.env.BOT_TOKEN);
