/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
neko.getSFWFoxGirl().then(foxgirl => {
        var foxgirl = new Discord.RichEmbed()
            .setImage(foxgirl.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send({ embed: foxgirl });
  })
}

module.exports.help = {
    name: "foxgirl",
    type: "Anime",
    description: 'Posts a random foxgirl picture.',
    format: "`foxgirl`",
    require: "None."
}