/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
var member = msg.mentions.users.array()[0];
if (!member) return errors.noUser(msg, 'cuddle');

else if (member === msg.author) {
    return errors.noUser2(msg, 'cuddle');
}

neko.getSFWCuddle().then(cuddle => {
        var cuddle = new Discord.RichEmbed()
            .setImage(cuddle.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send(member +' You got a cuddle from '+ msg.author.username, { embed: cuddle });
  })
}

module.exports.help = {
    name: "cuddle",
    type: "Anime",
    description: 'Give a cuddle to someone.',
    format: "`cuddle`",
    example: '`cuddle @ZTzTopia`',
    require: "None."
}