/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
var member = msg.mentions.users.array()[0];
if (!member) return errors.noUser(msg, 'tickle');

else if (member === msg.author) {
    return errors.noUser2(msg, 'tickle');
}

neko.getSFWTickle().then(tickle => {
        var tickle = new Discord.RichEmbed()
            .setImage(tickle.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send(member +' You got a tickle from '+ msg.author.username, { embed: tickle });
  })
}

module.exports.help = {
    name: "tickle",
    type: "Anime",
    description: 'Give a tickle to someone.',
    format: "`tickle`",
    example: '`tickle @ZTzTopia`',
    require: "None."
}