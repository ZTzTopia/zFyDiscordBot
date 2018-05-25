var Discord = require('discord.js');
const errors = require('../errors.js');

module.exports.run = async (bot, msg, args, suffix) => {
  if(!msg.member.permissions.has("MANAGE_NICKNAMES") || !msg.member.permissions.has("ADMINISTRATOR")) return errors.noPerms(msg, "MANAGE_NICKNAMES");
  
  let hasPermissonRole =  msg.guild.members.get(bot.user.id).permissions.has("MANAGE_NICKNAMES") || msg.guild.members.get(bot.user.id).permissions.has("ADMINISTRATOR");
  if (!hasPermissonRole) return errors.botPerms(msg, "MANAGE_NICKNAMES");

  if (args.length < 1) return errors.noText(msg, `
  **Description**: Changes the nickname of the bot on this server. You can also target
  other users to change their nickname.
  **Format**: \`setNick <nickname>\` 
  **Example**: \`setNick zFy's\`
`)

if (msg.mentions.users.array()[0]) {
  member = msg.guild.members.get(msg.mentions.users.array()[0].id);
  member.setNickname(args.slice(1).join(" "));
  let niick1 = new Discord.RichEmbed()
  niick1.setColor(msg.guild.me.displayColor)
  .setDescription("<:agree:424463051274846209> **" + msg.author.tag + "** nickname changed to **" + args.slice(1).join(" ") + "**");

  return msg.channel.send({ embed: niick1 });
 } else {
  msg.guild.members.get(bot.user.id).setNickname(suffix);
  let niick1 = new Discord.RichEmbed()
  niick1.setColor(msg.guild.me.displayColor)
  .setDescription("<:agree:424463051274846209> **" + msg.author.tag + "** Bot nickname changed to **" + suffix + "**");

  return msg.channel.send({ embed: niick1 });
 }
}


  
module.exports.help = {
    name: "setnick",
    description: "Changes the nickname of the bot on this server. You can also target other users to change their nickname.",
    example: '`setnick zFy\'s`',
    format: "`setnick <nickname>`",
    require: "ManageNicknames, Administrator Server Permission."
}
