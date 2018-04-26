/*ZTzTopia*/
var Discord = require('discord.js');

module.exports.run = async (bot, msg, args, suffix) => {
var predictions;

    var member = msg.member;
    if (msg.mentions.users.array()[0]) {
    member = msg.guild.members.get(msg.mentions.users.array()[0].id);
    }

    if (member != null) {
        predictions = "https://api.adorable.io/avatars/285/" + member.id + ".png"
    }

            let gen = new Discord.RichEmbed()
            .setColor(msg.guild.me.displayColor)
            .setImage(predictions)
            .setFooter(`Powered By https://api.adorable.io/avatars/`)
            .setTimestamp();
            
            msg.channel.send({ embed: gen });
}

module.exports.help = {
    name: "facegen",
    type: "Fun",
    description: "Generates facegen about people or your.",
    format: "`facegen`",
    example: '`facegen @ZTzTopia`',
    require: "None."
}
