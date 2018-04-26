const Discord = require("discord.js");

module.exports.run = async (bot, message, args, suffix) => {
  if(!message.member.permissions.has("MANAGE_ROLES") || !message.member.hasPermission("ADMINISTRATOR")) {
    let bane = new Discord.RichEmbed()
    bane.setColor(message.guild.me.displayColor)
    .setDescription("<:disagree:424463051824037899> **" + message.author.tag + "** You dont have Permissions `MANAGE_ROLES` to do that.")
  
    return message.channel.send({ embed: bane });
  }
  
  let hasPermissonRole =  message.guild.members.get(bot.user.id).permissions.has("MANAGE_ROLES") || message.guild.members.get(bot.user.id).permissions.has("ADMINISTRATOR");
  if (!hasPermissonRole) {
    let bane1 = new Discord.RichEmbed()
    bane1.setColor(message.guild.me.displayColor)
    .setDescription("<:disagree:424463051824037899> **" + message.author.tag + "** I dont have Permissions `MANAGE_ROLES` to do that.")
  
    return message.channel.send({ embed: bane1 });
  }

  var rMember = message.mentions.members.first();
  if (!rMember) {
  let adrole = new Discord.RichEmbed()
  adrole.setColor(message.guild.me.displayColor)
  .setDescription("<:disagree:424463051824037899> **" + message.author.tag + "** Couldn't find user.")
  
  return message.channel.send({ embed: adrole });
  }
  
  let role = args.join(' ').slice(22);
  if (!role) {
  let adrole1 = new Discord.RichEmbed()
  adrole1.setColor(message.guild.me.displayColor)
  .setDescription("<:disagree:424463051824037899> **" + message.author.tag + "** Specify a role.")
  
  return message.channel.send({ embed: adrole1 });
  }

  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) {
  let adrole2 = new Discord.RichEmbed()
  adrole2.setColor(message.guild.me.displayColor)
  .setDescription("<:disagree:424463051824037899> **" + message.author.tag + "** Couldn't find that role.")
  
  return message.channel.send({ embed: adrole2 });
  }
  
  if (message.guild.members.get(bot.user.id).highestRole.comparePositionTo(gRole) < 1) {
  let adrole3 = new Discord.RichEmbed()
  adrole3.setColor(message.guild.me.displayColor)
  .setDescription("<:disagree:424463051824037899> **" + message.author.tag + "** Failed to added role. My highest role is lower or the same than `"  + gRole.name + "`, so you cannot assign it.")
  
  return message.channel.send({ embed: adrole3 });
  }
  
  if (message.member.highestRole.comparePositionTo(gRole) < 1) {
  let adrole4 = new Discord.RichEmbed()
  adrole4.setColor(message.guild.me.displayColor)
  .setDescription("<:disagree:424463051824037899> **" + message.author.tag + "** Your highest role is lower than the role `"  + gRole.name + "`, so you cannot assign it!")
  
  return message.channel.send({ embed: adrole4 });
  }
  
  var user = bot.users.get(rMember.id);
  var guild = message.guild;
  var reason = args.slice(1).join(" ");

  if(!rMember.roles.has(gRole.id)) {
  let adrole5 = new Discord.RichEmbed()
  adrole5.setColor(message.guild.me.displayColor)
  .setDescription("<:disagree:424463051824037899> **" + message.author.tag + "** They not have that role.")
  
  return message.channel.send({ embed: adrole5 });
  }
  
  const sdss = await(rMember.addRole(gRole.id));

   var ban22 = new Discord.RichEmbed();
   ban22.setColor(message.guild.me.displayColor)
  .setDescription('<:agree:424463051274846209> **' + message.author.tag + '#' + message.member.discriminator + '** Successfully Removed role **' + gRole.name + '** to user **' + user.tag + '**');

  message.channel.send({ embed: ban22 });
  
 var ban = new Discord.RichEmbed();
 ban.setColor(0xFFB200)
     .setAuthor(user.tag, user.avatarURL)
     .addField('Member Removed role', `**${user.tag} (${user.id}) was Removed role to ` + gRole.name + `**`)
     .addField('Responsible Moderator', message.author.username)
     .addField('Reason', reason || "None")
     .setFooter(`${guild.name} | ${guild.members.size} members`, `${guild.iconURL}`)
     .setTimestamp();

       try {
         var log = message.guild.channels.find('name', 'mod-logs') || message.guild.channels.find('name', 'modlogs');
         log.send({ embed: ban });
     } catch (e) {
         message.channel.send({ embed: ban });
 }

}

module.exports.help = {
  name: "removerole",
  type: "Moderation",
  description: "Remove user a specified role.",
  example: '`removerole @Someone Members` - Remove the "Members" role to the member "Someone"',
  format: "`removerole <mention> <roles>`",
  require: "ManageRoles, Administrator Server Permission"
}
