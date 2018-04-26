/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
var member = msg.mentions.users.array()[0];
if (!member) return errors.noUser(msg, 'hug');

else if (member === msg.author) {
    return errors.noUser2(msg, 'hug');
}

neko.getSFWHug().then(hug => {
        var hug = new Discord.RichEmbed()
            .setImage(hug.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send(member +' You got a hug from '+ msg.author.username, { embed: hug });
  })
}

module.exports.help = {
    name: "hug",
    type: "Anime",
    description: 'Give a hug to someone.',
    format: "`hug`",
    example: '`hug @ZTzTopia`',
    require: "None."
}