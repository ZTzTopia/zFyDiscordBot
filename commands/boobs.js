/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
if (!msg.channel.nsfw) return errors.nsfw(msg);

  neko.getNSFWBoobs().then(Boobs => {
        var boobs = new Discord.RichEmbed()
            .setImage(Boobs.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send({ embed: boobs });
  })
}

module.exports.help = {
    name: "boobs",
    type: "Anime",
    description: 'Posts a random boobs picture. Warning this commands for 18+',
    format: "`boobs`",
    require: "None."
}