var Discord = require('discord.js')

module.exports.run = async (bot, msg, args) => {
    
const amount = parseInt(args[0]) + 1;
msg.delete();

if (!msg.member.permissions.has('MANAGE_MESSAGES')|| !msg.member.permissions.has('ADMINISTRATOR')) {
    let lol = new Discord.RichEmbed()
    lol.setColor(msg.guild.me.displayColor)
    .setDescription("<:disagree:424463051824037899> **" + msg.author.tag + "** You dont have Permissions `MANAGE_MESSAGES` to do that.")
  
    return msg.channel.send({ embed: lol });
    }

    if (isNaN(amount)) {
        let lol1 = new Discord.RichEmbed()
        lol1.setColor(msg.guild.me.displayColor)
        .setDescription("<:disagree:424463051824037899> **" + msg.author.tag + "** That doesn\'t seem to be a valid number.")
      
        return msg.channel.send({ embed: lol1 });
        }

    else if (amount < 1 || amount > 100) {
        let lol2 = new Discord.RichEmbed()
        lol2.setColor(msg.guild.me.displayColor)
        .setDescription('<:disagree:424463051824037899> **' + msg.author.tag + '** You need to input a number between 1 and 99.')
      
        return msg.channel.send({ embed: lol2 });
        }

    msg.channel.bulkDelete(amount, true).catch(err => {
        console.error(err);
        let lol2 = new Discord.RichEmbed()
        lol2.setColor(msg.guild.me.displayColor)
        .setDescription('<:disagree:424463051824037899> **' + msg.author.tag + '** There was an error trying to prune messages in this channel!')
      
        return msg.channel.send({ embed: lol2 });
  });
}
module.exports.help = {
    name: "prune",
    type: "Moderation",
    description: "Provides a users permissions in the specified guild.",
    format: "`prune <amountMessage>`",
    example: '`prune 30` - Bot Will delete "30" latest message',
    require: "ManageMessages, Administrator Server Permission"
}
