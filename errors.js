const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
let config = require("./config.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('Insufficient Permission.', config.disagree + ' **' + message.author.tag + '** You dont have Permissions `' + perm +  '` to do that.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.botPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('Insufficient Permission.', config.disagree + ' **' + message.author.tag + '** I dont have Permissions `' + perm +  '` to do that.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.noText = (message, help) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('Cant read that.', config.disagree + ' **' + message.author.tag + '** Please enter something.' + help)
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.noText2 = (message, help) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('Cant read that.', config.disagree + ' **' + message.author.tag + '** ' + help)
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.noUser = (message, cmd) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('Couldn\'t find a user.', config.disagree + ' **' + message.author.tag + '** Please mention a user to ' + cmd + '.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.noUser2 = (message, cmd) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('Cant\'t ' +cmd+ '.', config.disagree + ' **' + message.author.tag + '** You cant ' + cmd + ' yourself.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.noRole = (message, cmd) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('Couldn\'t find a role.', config.disagree + ' **' + message.author.tag + '** Please spesify a role to ' + cmd + '.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.noChannel = (message, cmd) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('Couldn\'t find a channel.', config.disagree + ' **' + message.author.tag + '** Please spesify a channel to ' + cmd + '.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.highestBot = (message, some, thing) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('Failed to ' + some + '.', config.disagree + ' **' + message.author.tag + '** My highest role is lower or the same than `'  + thing + '`, so you cannot assign it.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.highestMember = (message, some, thing) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('Failed to ' + some + '.', config.disagree + ' **' + message.author.tag + '** Your highest role is lower or the same than `'  + thing + '`, so I cannot assign it.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.hasBeen = (message, some, thing) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('They already have that role.', config.disagree + ' **' + message.author.tag + '** So I cannot assign it.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.admin = (message, thing) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('That user is a mod/admin.', config.disagree + ' **' + message.author.tag + '** I can\'t to do ' + thing + ' them.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.resBody = (message, res, desc) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField(res + ' not found.', config.disagree + ' **' + message.author.tag + '** ' + desc)
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.resStatus = (message, code) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('Error code ' + code, config.disagree + ' **' + message.author.tag + '** Your request cannot be found.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.ownerBot = (message, code) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('You\'re not owner the Bot', config.disagree + ' **' + message.author.tag + '** Only Owner The Bot Can Use This **Commands**.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.nsfw = (message, code) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('NSFW!', config.disagree + ' **' + message.author.tag + '** There not in nsfw channel.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.noEmoji = (message, code) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('No emoji', config.disagree + ' **' + message.author.tag + '** There are not emojis on this server.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.noDox = (message, code) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('No result', config.disagree + ' **' + message.author.tag + '** That user not on dox list/database')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}

module.exports.bulkE = (message, code) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .addField('Can\'t delete message', config.disagree + ' **' + message.author.tag + '** I Can\'t delete message under 14 days or empty message.')
        .setFooter(message.author.tag)
        .setTimestamp();

    if (message.author.avatarURL != null) {
        embed.setFooter(message.author.tag, message.author.avatarURL)   
    }

    message.channel.send(embed).then(m => m.delete(20000));
}