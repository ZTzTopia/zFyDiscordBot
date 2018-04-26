/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
var member = msg.mentions.users.array()[0];
if (!member) return errors.noUser(msg, 'pat');

else if (member === msg.author) {
    return errors.noUser2(msg, 'pat');
}

neko.getSFWPat().then(pat => {
        var pat = new Discord.RichEmbed()
            .setImage(pat.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send(member +' You got a pat from '+ msg.author.username, { embed: pat });
  })
}

module.exports.help = {
    name: "pat",
    type: "Anime",
    description: 'Give a pat to someone.',
    format: "`pat`",
    example: '`pat @ZTzTopia`',
    require: "None."
}