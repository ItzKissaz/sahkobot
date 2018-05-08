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
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send(':skull: Uudelleenkäynnistys :skull:')
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.BOT_TOKEN));
}
bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "✅") {
        var randomwinner = ""
        console.log(reaction.users);
    }
});
bot.on('message', async message => {
    if (message.author.bot) return;
  
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
    if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Saimme yhteyden ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
    if (message.content.startsWith(prefix + "restart")) {
        resetBot(message.channel);
        }
    if (message.content.startsWith(prefix + "kick")) {
        // Easy way to get member object though mentions.
        let adminRole = message.guild.roles.find("name", "Ylläpito");
   

        if(message.member.roles.has(adminRole.id)){
       
        
            var member = message.mentions.members.first();
        // Kick
            member.kick().then((member) => {
            // Successmessage
             
                
               
                
            message.channel.send(":wave: " + member.displayName + " Kickattiin onnistuneesti.  ");
            }).catch(() => {
             // Failmessage
                message.channel.send("Yritys evätty");
            });
                
                
                
                
                
                
                
                
                
                
                
                
        }else{
           message.channel.send("Sinä et voi Kickata porukkaa")
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
