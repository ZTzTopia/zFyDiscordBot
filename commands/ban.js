/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
var config = require('../config.json');

module.exports.run = async (bot, msg, args) => {
    if (!msg.member.permissions.has('BAN_MEMBERS') || !msg.member.permissions.has('ADMINISTRATOR')) return errors.noPerms(msg, 'BAN_MEMBERS')

    let hasPermissonRole =  msg.guild.members.get(bot.user.id).permissions.has("BAN_MEMBERS") || msg.guild.members.get(bot.user.id).permissions.has("ADMINISTRATOR");
    if (!hasPermissonRole) return errors.botPerms(msg, 'BAN_MEMBERS')

    var banned = msg.mentions.members.first();
    if (!banned) return errors.noUser(msg, 'ban members');
    
    if (banned.permissions.has('BAN_MEMBERS') || banned.permissions.has('ADMINISTRATOR')) return errors.admin(msg, 'ban')
    
    if (!banned.bannable) return errors.highestMember(msg, 'ban members', 'role');
    
    var user = bot.users.get(banned.id);
    var guild = msg.guild;
    var reason = args.slice(1).join(" ");
    
 banned.ban(reason);

 var ban = new Discord.RichEmbed()
.setColor(msg.guild.me.displayColor)
.setDescription(config.agree + ' **' + msg.author.tag + '** has been successfullly banned from **' + guild.name + '**')
.setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.avatarURL)
.setTimestamp();

msg.channel.send({ embed: ban });

 var ban1 = new Discord.RichEmbed()
     .setColor(13632027)
     .setAuthor(user.tag, user.avatarURL)
     .addField('Member Banned', `**:hammer: ${user.tag} (${user.id}) was banned from the server.**`)
     .addField('Responsible Moderator', msg.author.username)
     .addField('Reason', reason || "None")
     .setFooter(`${guild.name} | ${guild.members.size} members`)
     .setTimestamp();

     if (msg.guild.iconURL != null) {
        ban1.setFooter(`${guild.name} | ${guild.members.size} members`, `${guild.iconURL}`);
    }

        try {
         var log = msg.guild.channels.find('name', 'mod-logs') || msg.guild.channels.find('name', 'modlogs');
         log.send({ embed: ban1 });
     } catch (e) {
         msg.channel.send({ embed: ban1 });
 }
}

module.exports.help = {
    name: "ban",
    type: "Moderation",
    description: "Bans a user by name with an optional reason.",
    example: '`ban @Someone Dont Spam` \n`ban @ZTzTopia`' ,
    format: "`ban <mention> <reason>`",
    require: "BanMembers, Administrator Server Permission"
}
