/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
var member = msg.mentions.users.array()[0];
if (!member) return errors.noUser(msg, 'poke');

else if (member === msg.author) {
    return errors.noUser2(msg, 'poke');
}

neko.getSFWPoke().then(poke => {
        var poke = new Discord.RichEmbed()
            .setImage(poke.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send(member +' You got a poke from '+ msg.author.username, { embed: poke });
  })
}

module.exports.help = {
    name: "poke",
    type: "Anime",
    description: 'Give a poke to someone.',
    format: "`poke`",
    example: '`poke @ZTzTopia`',
    require: "None."
}