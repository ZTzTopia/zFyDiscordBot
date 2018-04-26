/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
var member = msg.mentions.users.array()[0];
if (!member) return errors.noUser(msg, 'feed');

else if (member === msg.author) {
    return errors.noUser2(msg, 'feed');
}

neko.getSFWFeed().then(feed => {
        var feed = new Discord.RichEmbed()
            .setImage(feed.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send(member +' You got a feed from '+ msg.author.username, { embed: feed });
  })
}

module.exports.help = {
    name: "feed",
    type: "Anime",
    description: 'Give a feed to someone.',
    format: "`feed`",
    example: '`feed @ZTzTopia`',
    require: "None."
}