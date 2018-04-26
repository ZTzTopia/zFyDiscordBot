/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
if (!msg.channel.nsfw) return errors.nsfw(msg);

  neko.getNSFWPussy().then(pussy => {
        var pussy = new Discord.RichEmbed()
            .setImage(pussy.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send({ embed: pussy });
  })
}

module.exports.help = {
    name: "pussy",
    type: "Anime",
    description: 'Posts a random pussy picture. Warning this commands for 18+',
    format: "`pussy`",
    require: "None."
}