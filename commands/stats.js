var Discord = require('discord.js'),
 os = require('os'), 
 osu = require('os-utils');

module.exports.run = async (bot, msg, args) => {

var vals = {},
date = new Date(bot.uptime);

vals.memory = Math.round((os.totalmem() - os.freemem()) / 1000000);
vals.totalmem = Math.round(os.totalmem() / 1000000);
vals.strDate = date.getUTCDate() - 1 + 'd ' + date.getUTCHours() + 'h ' + date.getUTCMinutes() + 'm ' + date.getUTCSeconds() + 's';
vals.owner = bot.users.get(require('../config.json').owner);

if (bot.shard) {
vals.shardid = bot.shard.id;
vals.shardcount = bot.shard.count;
bot.shard.fetchClientValues('guilds.size').then(g => {
    vals.guilds = g.reduce((prev, val) => prev + val, 0);
    bot.shard.fetchClientValues('channels.size').then(c => {
        vals.channels = c.reduce((prev, val) => prev + val, 0);
        bot.shard.fetchClientValues('users.size').then(u => {
            vals.users = u.reduce((prev, val) => prev + val, 0);
                sendStats(vals);
        }).catch(console.error);
    }).catch(console.error);
}).catch(console.error);
} else {
vals.shardid = 1;
vals.shardcount = 1;
vals.guilds = bot.guilds.size;
vals.channels = bot.channels.size;
vals.users = bot.users.size;
sendStats(vals);
}

function sendStats(vals2) {
var stats1 = new Discord.RichEmbed()
    .setAuthor(bot.user.username + ' Stats', bot.user.avatarURL)
    .setFooter('Powered by ' + bot.user.username, bot.user.avatarURL)
    .setTimestamp()
    .setColor(msg.guild.me.displayColor)
    .addField(':man_with_gua_pi_mao: Owner', vals2.owner.username + '#' + vals2.owner.discriminator + '\n(' + vals.owner.id + ')', true)
    .addField(':book: Library', 'discord.js (v' + require('discord.js').version + ')', true)
    .addField(':diamond_shape_with_a_dot_inside: Shard', vals2.shardid + 1 + '/' + vals2.shardcount, true)
    .addField(':speaking_head: Servers', vals2.guilds, true)
    .addField(':keyboard: Channels', vals2.channels, true)
    .addField(':man: Users Served', vals2.users, true)
    .addField(':clock1: Uptime', vals2.strDate, true)
    .addField(':floppy_disk: RAM Usage', vals2.memory + ' MB / ' + vals2.totalmem + ' MB', true)
    .addField(':desktop: CPU Usage', +  `${(process.memoryUsage().heapUsed /100 /100 /100).toFixed(1)}`  + '%', true)
    .addField(':map: Host', os.hostname() + ' (' + os.type() + ')', true);
	
msg.channel.send({ embed: stats1 });
	
  }
}

module.exports.help = {
    name: "stats",
    type: "Core",
    description: "Gives the bot\'s current statistics.",
    format: "`stats`",
    require: "None."
}
