var Discord = require('discord.js');

module.exports.run = async (bot, msg, args, suffix) => {
    if (!msg.member.permissions.has('MANAGE_NICKNAMES') || !msg.member.permissions.has('ADMINISTRATOR')) {
    let banned2 = new Discord.RichEmbed()
    banned2.setColor(msg.guild.me.displayColor)
    .setDescription("<:disagree:424463051824037899> **" + msg.author.tag + "** You dont have Permissions `MANAGE_NICKNAMES` to do that.")
  
    return msg.channel.send({ embed: banned2 });
}
    
  if (args.length < 1) {
  let niick = new Discord.RichEmbed()
  niick.setColor(msg.guild.me.displayColor)
  .setDescription("<:disagree:424463051824037899> **" + msg.author.tag + "** Please enter Nickname.")
  
  return msg.channel.send({ embed: niick });
}
    
  msg.guild.members.get(bot.user.id).setNickname(suffix);
    
  let niick1 = new Discord.RichEmbed()
  niick1.setColor(msg.guild.me.displayColor)
  .setDescription("<:agree:424463051274846209> **" + msg.author.tag + "** Bot nickname changed to **" + suffix + "**")
  }


  
module.exports.help = {
    name: "setnick",
    description: "Changes the nickname of the bot on this server. You can also target other users to change their nickname.",
    example: '`setnick ThePros` - Bot will change the Nickname to "ThePros"',
    format: "`setnick <nickname>`",
    require: "ManageNicknames, Administrator Server Permission."
}
