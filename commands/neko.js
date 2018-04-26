/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
neko.getSFWNeko().then(neko => {
        var neko = new Discord.RichEmbed()
            .setImage(neko.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send({ embed: neko });
  })
}

module.exports.help = {
    name: "neko",
    type: "Anime",
    description: 'Posts a random neko picture.',
    format: "`neko`",
    require: "None."
}