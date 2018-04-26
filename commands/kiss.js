var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
var member = msg.mentions.users.array()[0];
if (!member) return errors.noUser(msg, 'kiss');

else if (member === msg.author) {
    return errors.noUser2(msg, 'kiss');
}

neko.getSFWKiss().then(kiss => {
        var kiss = new Discord.RichEmbed()
            .setImage(kiss.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send(member +' You got a kiss from '+ msg.author.username, { embed: kiss });
  })
}

module.exports.help = {
    name: "kiss",
    type: "Anime",
    description: 'Give a kiss to someone.',
    format: "`kiss`",
    example: '`kiss @ZTzTopia`',
    require: "None."
}