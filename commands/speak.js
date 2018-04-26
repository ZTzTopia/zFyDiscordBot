var Discord = require('discord.js');

module.exports.run = async (bot, msg, args, suffix) => {
    if (args.length < 1) {
        let unce = new Discord.RichEmbed()
        unce.setColor(msg.guild.me.displayColor)
        .setDescription("<:disagree:428759831587848192> **" + msg.author.tag + "** Please enter something, \n**Description**: Bot says message with text to speech. \n**Format**: `announce <message>` \n**Example**: `announce Yep`")
        .setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.iconURL)
        .setTimestamp();

        return msg.channel.send({ embed: unce });
        }

    msg.channel.send(suffix,{tts:true});
}

module.exports.help = {
    name: "announce",
    type: "Fun",
    description: "Bot says message with text to speech.",
    example: '`announce Yep` - Will send "Yep" and speak Yep',
    format: "`announce <message>`",
    require : "None."
}
