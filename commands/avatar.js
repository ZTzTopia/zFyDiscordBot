var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
var member = msg.member;
if (msg.mentions.users.array()[0])
    member = msg.guild.members.get(msg.mentions.users.array()[0].id);
var user = member.user;

var ava = new Discord.RichEmbed()
    .setAuthor(user.username + '#' + user.discriminator, user.avatarURL)
    .setColor(member.displayHexColor)

    if (user.avatarURL != null) {
        ava.addField(user.username + ' Avatar Link', '[Here](' + user.avatarURL + ')', true);
    } else {
        ava.addField(user.username + ' Avatar Link', user.username + ' Not have avatar', true)
    }

msg.channel.send({ embed: ava });
}

module.exports.help = {
    name: "avatar",
    type: "Util",
    Description: 'Provides a avatar user.',
    format: "`avatar <mention>`",
    Example: '`avatar` \n`avatar @ZTzTopia`',
    require: "None."
}