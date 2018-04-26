var Discord = require('discord.js');
const dateFormat = require('dateformat');
var config = require('../config.json');

const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');

module.exports.run = async (bot, msg, args) => {
var member = msg.member;
if (msg.mentions.users.array()[0])
    member = msg.guild.members.get(msg.mentions.users.array()[0].id);
var user = member.user;
const millis = new Date().getTime() - user.createdAt.getTime();
const days = millis / 1000 / 60 / 60 / 24;
const millis1 = new Date().getTime() - member.joinedAt.getTime();
const days1 = millis1 / 1000 / 60 / 60 / 24;
var roles = member.roles.size;

if (user.presence.game) {
    var game = user.presence.game.name;
} else {
    game = 'None';
}

if (user.bot) {
    var botUser = 'True'
} else {
    botUser = 'False';
}

var info = new Discord.RichEmbed()
    .setAuthor(user.username + '#' + user.discriminator, user.avatarURL)
    .setDescription('User Information')
    .setColor(member.displayHexColor)
    .setFooter('ID: ' + user.id)
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .addField('Username', user.username, true)
    .addField('Display Name', member.displayName, true)
    .addField('Account Created', `${dateFormat(user.createdAt)}`, true)
    .addField('Days Since Creation', `Last ${days.toFixed(0)} Days`, true)
    .addField('Join Date', `${dateFormat(member.joinedAt)}`, true)
    .addField('Days Since Join', `Last ${days1.toFixed(0)} Days`, true)
    .addField('Bot', botUser, true);

if (user.presence.status === 'offline') {
    info.addField('Status', config.offline+' Offline', true);
} else if (user.presence.status === 'idle') {
    info.addField('Status', config.idle+' Idle', true);
} else if (user.presence.status === 'online') {
    info.addField('Status', config.online+' Online', true);
} else if (user.presence.status === 'dnd') {
    info.addField('Status', config.dnd+' Do Not Disturb', true);
}
if (member.hoistRole) {
    var hoist = member.hoistRole;
} else {
    hoist = 'None';
}

if (member.colorRole) {
    var colorR =  member.displayHexColor;
} else {
    colorR = 'None';
}
info.addField('Game', game, true)
    .addField('Color', member.displayHexColor, true)
    .addField('Highest Role', member.highestRole, true)
    .addField('Hoist Role', hoist, true)
    .addField('Avatar Link', '[Here](' + user.avatarURL + ')', true)
    .addField('Total Roles', roles, true)
    .addField('Roles', ` ${member.roles.map(r => `${r}`).join(', ')}`, true);

msg.channel.send({ embed: info });
}

module.exports.help = {
    name: "userinfo",
    type: "Util",
    Description: 'Provides information about a user.',
    format: "`userinfo <mention>`",
    Example: '`userinfo` \n`userinfo @ZTzTopia`',
    require: "None."
}