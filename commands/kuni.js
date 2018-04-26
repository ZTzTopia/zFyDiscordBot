var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
if (!msg.channel.nsfw) return errors.nsfw(msg);

  neko.getNSFWKuni().then(kuni => {
        var kuni = new Discord.RichEmbed()
            .setImage(kuni.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send({ embed: kuni });
  })
}

module.exports.help = {
    name: "kuni",
    type: "Anime",
    description: 'Posts a random kuni picture. Warning this commands for 18+',
    format: "`kuni`",
    require: "None."
}