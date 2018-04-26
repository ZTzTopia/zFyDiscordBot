/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
var member = msg.mentions.users.array()[0];
if (!member) return errors.noUser(msg, 'slap');

else if (member === msg.author) {
    return errors.noUser2(msg, 'slap');
}

neko.getSFWSlap().then(slap => {
        var slap = new Discord.RichEmbed()
            .setImage(slap.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send(member +' You got a slap from '+ msg.author.username, { embed: slap });
  })
}

module.exports.help = {
    name: "slap",
    type: "Anime",
    description: 'Give a slap to someone.',
    format: "`slap`",
    example: '`slap @ZTzTopia`',
    require: "None."
}