var Discord = require('discord.js');
const errors = require('../errors.js');

module.exports.run = async (bot, msg, args) => {
if (!msg.member.permissions.has('KICK_MEMBERS') || !msg.member.permissions.has('ADMINISTRATOR')) return errors.noPerms(msg, 'KICK_MEMBERS');

let hasPermissonRole =  msg.guild.members.get(bot.user.id).permissions.has("KICK_MEMBERS") || msg.guild.members.get(bot.user.id).permissions.has("ADMINISTRATOR");
if (!hasPermissonRole) return errors.botPerms(msg, 'KICK_MEMBERS')

var kicked = msg.mentions.members.first();
if (!kicked) return errors.noUser(msg, 'kick members');

if (kicked.permissions.has('KICK_MEMBERS') || kicked.permissions.has('ADMINISTRATOR')) return errors.admin(msg, 'kick')

if (!kicked.kickable) return errors.highestMember(msg, 'kick members', 'role');

   var user = bot.users.get(kicked.id);
   var guild = msg.guild;
   var reason = args.slice(1).join(" ");
    
kicked.kick(reason);

var kick = new Discord.RichEmbed()
.setColor(msg.guild.me.displayColor)
.setDescription('<:agree:437835753792208896> **' + msg.author.tag + '** has been successfullly kicked from **' + guild.name + '**');

msg.channel.send({ embed: kick });

var kick2 = new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setAuthor(user.tag, user.avatarURL)
    .addField('Member Kicked', `**${user.tag} (${user.id}) was kicked from the server.**`)
    .addField('Responsible Moderator', msg.author.username)
    .addField('Reason', reason || "None")
    .setFooter(`${guild.name} | ${guild.members.size} members`)
    .setTimestamp();

    if (msg.guild.iconURL != null) {
        kick2.setFooter(`${guild.name} | ${guild.members.size} members`, `${guild.iconURL}`);
    }

 try {
     var log = msg.guild.channels.find('name', 'mod-logs') || msg.guild.channels.find('name', 'modlogs');
     log.send({ embed: kick2 });
 } catch (e) {
     msg.channel.send({ embed: kick2 });
 }
}

module.exports.help = {
    name: "kick",
    type: "Moderation",
    description: "kicks a user by name with an optional reason.",
    example: '`kick @Someone Dont Spam` \n`kick @ZTzTopia`',
    format: "`kick <mention> <reason>`",
    require: "KickMembers, Administrator Server Permission"
}
