var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
var member = msg.member;
if (msg.mentions.users.array()[0])
    member = msg.guild.members.get(msg.mentions.users.array()[0].id);
var user = member.user;

var info = new Discord.RichEmbed()
    .setAuthor(user.username + '#' + user.discriminator, user.avatarURL)
    .setColor(member.displayHexColor)
    .addField(user.username + ' Avatar Link', '[Here](' + user.avatarURL + ')' || 'None', true)

msg.channel.send({ embed: info });
}

module.exports.help = {
    name: "avatar",
    type: "Util",
    Description: 'Provides information about a avatar user.',
    format: "`avatar <mention>`",
    Example: '`avatar` \n`avatar @ZTzTopia`',
    require: "None."
}
