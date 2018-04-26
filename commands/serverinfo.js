var Discord = require('discord.js');

const dateFormat = require('dateformat');

const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');

module.exports.run = async (bot, msg, args) => {
    
    const millis = new Date().getTime() - msg.guild.createdAt.getTime();
    const days = millis / 1000 / 60 / 60 / 24;

    const owner = msg.guild.owner.user || {};

const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    
    var members = 0, bots = 0;

    msg.guild.members.forEach(member => {
        if (member.user.bot) {
            bots++;
        } else {
            members++;
        }
    });

        const embed = new Discord.RichEmbed()
            .setTitle(msg.guild.name)
            .setColor(msg.guild.me.displayColor)
            .setFooter('ID: ' + msg.guild.id)
            .setTimestamp()
            .addField('Name', msg.guild.name, true)
            .addField('Created', `${dateFormat(msg.guild.createdAt)}`, true)
            .addField('Days Since Creation', `Last ${days.toFixed(0)} Days`, true)
            .addField('Owner', msg.guild.owner.user.username || 'None', true)
            .addField('Region', msg.guild.region, true)
            .addField('Total Members', msg.guild.members.size, true)
            .addField('Members Online', `${msg.guild.members.filter(m => m.presence.status !== 'offline').size} / ${msg.guild.memberCount}`, true)
            .addField('User Count', members, true)
            .addField('Bot Count', bots, true)
            .addField('Text Channels', `${msg.guild.channels.filter(m => m.type === 'text').size}`, true)
            .addField('Voice Channels', `${msg.guild.channels.filter(m => m.type === 'voice').size}`, true)
            .addField('Channel Count', msg.guild.channels.size, true)
            .addField('Verification Level', `${verificationLevels[msg.guild.verificationLevel]}`, true)
            .addField('Total Emojis', msg.guild.emojis.size, true)
            .addField('Total Roles', msg.guild.roles.size, true)
            .addField('Roles', `${msg.guild.roles.map(r => `${r}`).join(', ')}`, true);
    
        if (msg.guild.iconURL != null) {
        embed.setThumbnail(`${msg.guild.iconURL}`);
        }

    if (msg.guild.features[0]) {
        embed.addField('Features', msg.guild.features.join('\n'))
            .setDescription('<:partner:314068430556758017> Partnered Server <:partner:314068430556758017>');
        if (msg.guild.features.includes('INVITE_SPLASH')) {
            embed.setImage(msg.guild.splashURL + '?size=2048');
        }
    } else {
        embed.setDescription('Server Information');
    }
msg.channel.send({ embed: embed });
}

module.exports.help = {
    name: "serverinfo",
    type: "Util",
    description: "Provides information about the server.",
    format: "`serverinfo`",
    require: "None."
}
