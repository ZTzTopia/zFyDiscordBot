/*ZTzTopia*/
var Discord = require('discord.js');
var config = require('../config.json');

module.exports.run = async (bot, msg, args) => {
    var member = msg.member;
    if (msg.mentions.users.array()[0]) {
    member = msg.guild.members.get(msg.mentions.users.array()[0].id);
    }
    
    var p = member.permissions.serialize(true);
    
    var perms = new Discord.RichEmbed()
    .setAuthor(member.user.username + '#' + member.user.discriminator)
    .setDescription('User Permissions on **' + msg.guild.name + '**')
    .setColor(msg.guild.me.displayColor);

    if (msg.member.user.avatarURL != null) {
        perms.setAuthor(member.user.username + '#' + member.user.discriminator, member.user.avatarURL);
        }
    
    var i = 0;
    for (var key in p) {
    if (p.hasOwnProperty(key) && i < 24) {
    if (p[key] === false) {
    perms.addField(blah(key), config.disagree, true);
    } else {
    perms.addField(blah(key), config.agree, true);
    }
    i++;
    }
    if (i === 30) {
    msg.channel.send({ embed: perms });
    perms = new Discord.RichEmbed()
    .setColor(msg.guild.me.displayColor)
    .setFooter('Triggered by ' + msg.author.username)
    .setTimestamp();
    i = 0;
    }
    }

    if (msg.author.avatarURL != null) {
        perms.setFooter('Triggered by ' + msg.author.username + '#' + msg.author.discriminator, msg.author.avatarURL);
    }
    
    msg.channel.send({ embed: perms });
    
    function blah(str) {
    if (str === 'MANAGE_ROLES_OR_PERMISSIONS') str = 'MANAGE_ROLES';
    str = str.replace(new RegExp('_', 'g'), ' ');
    return str.replace(/\w\S*/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
    module.exports.help = {
    name: "channelperms",
    type: 'Util',
    description: "Provides a users permissions in the specified channel.",
    format: "`channelperms` or `channelperms <mention>`",
    example: '`channelperms @Someone`',
    require: "None."
}
