var Discord = require('discord.js')

module.exports.run = async (bot, msg, args) => {
if(!msg.member.permissions.has("MANAGE_ROLES") || !msg.member.permissions.has('ADMINISTRATOR')) {
    let unm5 = new Discord.RichEmbed()
    unm5.setColor(msg.guild.me.displayColor)
    .setDescription("<:disagree:424463051824037899> **" + msg.author.tag + "** You dont have Permissions `MANAGE_ROLES` to do that.")
  
    return msg.channel.send({ embed: unm5 }); 
}

let hasPermissonRole =  msg.guild.members.get(bot.user.id).permissions.has("MANAGE_ROLES") || msg.guild.members.get(bot.user.id).permissions.has("ADMINISTRATOR");
if (!hasPermissonRole) {
  let unm4 = new Discord.RichEmbed()
  unm4.setColor(msg.guild.me.displayColor)
  .setDescription("<:disagree:424463051824037899> **" + msg.author.tag + "** I dont have Permissions `MANAGE_ROLES` to do that.")

  return msg.channel.send({ embed: unm4 });
}

var muted = msg.mentions.members.first();
if (!muted) {
    let unm3 = new Discord.RichEmbed()
    unm3.setColor(msg.guild.me.displayColor)
    .setDescription("<:disagree:424463051824037899> **" + msg.author.tag + "** Couldn't find user.")
    
    return msg.channel.send({ embed: unm3 });
}

let muteRole = msg.guild.roles.find("name", "muted");
if (!muteRole) {
    let unm2 = new Discord.RichEmbed()
    unm2.setColor(msg.guild.me.displayColor)
    .setDescription("<:disagree:424463051824037899> **" + msg.author.tag + "** Couldn't find muted role.")
    
    return msg.channel.send({ embed: unm2 });
    }

var user = bot.users.get(muted.id);
var guild = msg.guild;

if(!muted.roles.has(muteRole.id)) {
    let unm1 = new Discord.RichEmbed()
    unm1.setColor(msg.guild.me.displayColor)
    .setDescription("<:disagree:424463051824037899> **" + msg.member.tag + "** They not have that role.")
    
    return msg.channel.send({ embed: unm1 });
    }

muted.removeRole(muteRole.id);

msg.reply('<:agree:424463051274846209>' + muted + ' has been unmuted.');

var unm = new Discord.RichEmbed();
unm.setColor(0xFFB200)
     .setAuthor(user.username, user.avatarURL)
     .addField('Member Unmuted', `**${user.username}#${user.discriminator} (${user.id}) was unmuted.**`)
     .addField('Responsible Moderator', msg.member.displayName)
     .setFooter(`${guild.name} | ${guild.members.size} members`)
     .setTimestamp();

     if (msg.guild.iconURL != null) {
        unm.setFooter(`${guild.name} | ${guild.members.size} members`, `${guild.iconURL}`);
        }

     try {
         var log = msg.guild.channels.find('name', 'mod-logs') || msg.guild.channels.find('name', 'modlogs');
         log.send({ embed: mute });
     } catch (e) {
         msg.channel.send({ embed: unm });
     }
 }

module.exports.help = {
    name: "unmute",
    type: "Moderation",
    description: 'unmute a mentioned user both from speaking and chatting.',
    example: '`unmute @Someone` - Remove a muted role to the member "Someone"' ,
    format: "`unmute <mention>`",
    require: "ManageRoles, Administrator Server Permission"
}
