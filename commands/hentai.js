/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
if (!msg.channel.nsfw) return errors.nsfw(msg);

  neko.getNSFWRandomHentaiGif().then(Hentai => {
        var hentai = new Discord.RichEmbed()
            .setImage(Hentai.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send({ embed: hentai });
  })
}

module.exports.help = {
    name: "hentai",
    type: "Anime",
    description: 'Posts a random hentai picture. Warning this commands for 18+',
    format: "`hentai`",
    require: "None."
}