var Discord = require('discord.js')

module.exports.run = async (bot, msg, args, suffix) => {
        if(!msg.member.permissions.has("MANAGE_CHANNELS") || !msg.member.permissions.has('ADMINISTRATOR')) {
            let tp = new Discord.RichEmbed()
            tp.setColor(msg.guild.me.displayColor)
            .setDescription("<:disagree:424463051824037899> **" + msg.author.tag + "** You dont have Permissions `MANAGE_CHANNELS` to do that.")
          
            return msg.channel.send({ embed: tp }); 
        }
        
        let hasPermissonRole =  msg.guild.members.get(bot.user.id).permissions.has("MANAGE_CHANNELS") || msg.guild.members.get(bot.user.id).permissions.has("ADMINISTRATOR");
        if (!hasPermissonRole) {
          let tp1 = new Discord.RichEmbed()
          tp1.setColor(msg.guild.me.displayColor)
          .setDescription("<:disagree:424463051824037899> **" + msg.author.tag + "** I dont have Permissions `MANAGE_CHANNELS` to do that.")
        
          return msg.channel.send({ embed: tp1 });
        }
    msg.channel.setTopic(suffix);
}

module.exports.help = {
    name: "topic",
    type: "Moderation",
    description: '-',
    example: '`-`' ,
    format: "`-`",
    require: "ManageChannels, Administrator Server Permission"
}