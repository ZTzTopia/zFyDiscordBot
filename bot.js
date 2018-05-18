var Discord = require('discord.js'); //You Need discord.js For Bot Run
const bot = new(require("discord.js")).Client({fetchAllMembers: true});

var config = require('./config.json');

var fs = require('fs'); //File system

var cmds = require('./growtopia/commands.js');

var prefix = config.prefix;

/*const DBL = require("dblapi.js");
const dbl = new DBL('Your DBL Token Goes Here.', bot);

bot.on('ready', () => {
    setInterval(() => {
        dbl.postStats(bot.guilds.size);
    }, 180000);
});*/
      

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) {
    console.log("No commands load!");
    return;
  }

  console.log(`Loading ${jsfiles.length} commands`);

  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`)
    if (props.help.name)
    bot.commands.set(props.help.name, props);
    if (props.help.aliases)
    bot.commands.set(props.help.aliases, props);
  });
});

bot.on('ready', () => {
 console.log(`Stats:
 - User: ${bot.user.username}#${bot.user.discriminator} <ID: ${bot.user.id}>
 - Prefix: ${prefix}
 - Users: ${bot.users.filter(user => !user.bot).size}
 - Bots: ${bot.users.filter(user => user.bot).size}
 - Channels: ${bot.channels.size}
 - Guilds: ${bot.guilds.size}`)   
 bot.user.setPresence({ game: { name: config.prefix + 'help || ' + bot.guilds.size + ' Servers', type: 3 } });
});

bot.on("message", async msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return; 

  var suffix = msg.content.substr(msg.content.split(' ')[0].length + 1)

  const args = msg.content.slice(prefix.length).split(/ +/);

  const command = args.shift().toLowerCase();


if(!msg.guild) return msg.channel.send("I Cant assign commands in DM's");
if(msg.author.bot) return;
if(msg.author.id !='420920749314801684' && msg.author.id !='422592832944078869') {
if(msg.channel.id !='4110373943822540800' && msg.channel.id !='385837258768515083' && msg.channel.id !='272764566411149314' && msg.channel.id !='267327844357636097' && msg.channel.id !='414124730715734068' && msg.channel.id !='412006692125933568' && msg.channel.id !='265156286406983680' && msg.channel.id !='265156322012561408') {
let cmd = bot.commands.get(command)
if (cmd) cmd.run(bot, msg, args, suffix);
   }
  }
})

bot.on("guildCreate", (guild) => {
  //dbl.postStats(bot.guilds.size);
  
  //const logchannel = bot.channels.get("421146168421253131");
  
  //const serverlistchannel = bot.channels.get("427805902733705226");
  
 const botowner = bot.users.get(config.owner);
	
 const newguildchannel = bot.channels.find('name', 'general')
	
 guild.createInvite({maxAge:  0}).then(invite =>
 botowner.send(`${guild.name} Owned By ${guild.owner} - ${invite.url}`)
 )

 botowner.send(`${guild.owner} ID Owner : ${guild.ownerID} \nInvited **zFy's Bot** to server ${guild.name} Channel ID : ${guild.id}  ~ ${bot.guilds.size} Servers \n... Awaiting Approval`);

 botowner.send(`Joined a new server again! ${guild.name} ~ ${bot.guilds.size} Servers`);
	
   bot.user.setPresence({ game: { name: config.prefix + 'help || ' + bot.guilds.size + ' Servers', type: 3 } });
})

//...//...//

bot.on("guildDelete", (guild) => {
   //dbl.postStats(bot.guilds.size);
  
   const botowner = bot.users.get(config.owner);
   
   botowner.send(`left ${guild.name} ~ ${bot.guilds.size} Servers`);
   
   bot.user.setPresence({ game: { name: config.prefix + 'help || ' + bot.guilds.size + ' Servers', type: 3 } });
})

/*bot.on('message', function (message) {
	const logchannel = bot.channels.get("423517462253010944")
 if(message.author.id != bot.user.id && (message.content.startsWith(prefix))){
 let channel = message.channel;
 logchannel.send("Treating " + message.content + " from " + message.author + " as command.");
 }
})*/

bot.on('message', m => {	
if(!m.guild) return;
  if (m.author.bot) return
  if (m.content.startsWith(prefix)) {
    var cmd = m.content.substr(prefix.length).split(' ')[0]
    var suffix = m.content.substr(m.content.split(' ')[0].length + 1)
    if (cmds[cmd]) {
      try {
        cmds[cmd].fn(bot, m, suffix)
      } catch (e) {
        m.channel.send('Send error to owner pls kthx\n\n```' + e.stack + '```')
      }
    }
  }
})

//bot.login(config.token);
bot.login(process.env.BOT_TOKEN); //Heroku Procees BOT_TOKEN!
bot.on('ready', () => {
  console.log(' - Login with Token!');
  //bot.user.setUsername("zFy's");
  });

bot.on('ready', () => {
console.log('Bot Ready!');
});
//End Of Started
