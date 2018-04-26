/*ZTzTopia*/
var Discord = require('discord.js');
var config = require('../config.json');

module.exports.run = async (bot, msg, args) => {
/*    var members = {};

    msg.guild.members.forEach(member => {
    if (member.hasPermission('MANAGE_MESSAGES') && member.hasPermission('ADMINISTRATOR') && member.hasPermission("MANAGE_ROLES")) {
            if (!members[member.hoistRole.name]) {
                members[member.hoistRole.name] = [];
            }
            members[member.hoistRole.name].push(member);
        }
    });

    var mods = new Discord.RichEmbed()
        .setTitle('Moderators on ' + msg.guild.name)
        .setFooter(`${msg.guild.name} ID : ${msg.guild.id}`)
        .setColor(msg.guild.me.displayColor)
        .setTimestamp();

        if (msg.guild.iconURL != null) {
            mods.setFooter(`${msg.guild.name} ID : ${msg.guild.id}`, `${msg.guild.iconURL}`);
            }

    for (var role in members) {
        var str = '';
        var arr = members[role];

        for (var i = 0; i < arr.length; i++) {
            var user = arr[i].user;
            if (user.presence.status === 'offline') {
                str += '<:offline:428759830879010826> **' + arr[i].displayName + '**\n';
            } else if (user.presence.status === 'idle') {
                str += '<:away:428759830254190593> **' + arr[i].displayName + '**\n';
            } else if (user.presence.status === 'online') {
                str += '<:online:428759830833135628> **' + arr[i].displayName + '**\n';
            } else if (user.presence.status === 'dnd') {
                str += '<:dnd:428759830950445063> **' + arr[i].displayName + '**\n';
            }
}
        arr = members[role];
        mods.addField(role, str);
    }

msg.channel.send({ embed: mods });*/
msg.channel.send('***Sorry You cant use it!***')
}

module.exports.help = {
    name: "admin",
    type: "Utilities",
    description: 'Gives you information about the server moderators.',
    format: '`admin`',
    require: 'None.'
}
