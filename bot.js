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
function doMagic8Ball() {
    var rand = ['Kyllä', 'Ei', 'Ehkä ei...', 'Ei ikinä', 'Ehkä', 'Ehkä huomenna'];

    return rand[Math.floor(Math.random()*rand.length)];
}
bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "✅") {
        var randomwinner = ""
        console.log(reaction.users);
    }
});
bot.on('message', async message => {
    if (message.content.startsWith(prefix + "kick")) {
        // Easy way to get member object though mentions.
        let adminRole = message.guild.roles.find("name", "Ylläpito");
   

        if(message.member.roles.has(adminRole) || message.member.roles.has(modRole)){
       
        
            var member = message.mentions.members.first();
        // Kick
            member.kick().then((member) => {
            // Successmessage
             
                
               
                
            message.channel.send(":wave: " + member.displayName + "Kickattiin onnistuneesti :point_right: ");
            }).catch(() => {
             // Failmessage
                message.channel.send("Yritys evätty");
            })else:
                message.channel.send("Sinulla ei ole tarittavaa oikeutta");
        };
    }
    if(message.content.startsWith(prefix + 'help')) {
        message.delete(1000); //Supposed to delete message
        message.channel.sendMessage('**Justelius** Ohjeet \n**Kehitän bottia kun ehdin. Komennot ovat saatavilla vain ylläpitäjille');       
        };
      
    if(message.content.startsWith(prefix + '8ball')) {
        message.delete(1000); //Supposed to delete message
        message.channel.sendMessage('**8BALL**');
        message.channel.sendMessage(message.author + ' Kysyi viisaalta 8 Pallolta kysymyksen: **' + message.content.slice(8, message.content.lenght) + '**');
        let vastaukset = ["Kyllä", "Ehkä ei", "Ei", "Ei missään nimessä"];
        let vastaus = "getRandomArbitrary();"
        message.channel.sendMessage('8 Pallo on päättänyt vastauksensa: **' + doMagic8Ball() + '**')
        
    };
            });

bot.login(process.env.BOT_TOKEN);
