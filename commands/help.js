/*ZTzTopia*/
var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    let hep = new Discord.RichEmbed()
    hep.setColor(msg.guild.me.displayColor)
    .setTitle('zFy\'s help commands in a website!')
    .setThumbnail(bot.user.avatarURL)
    .addField('Hello there, I\'m zFy\'s Bot! I was created by ZTzTopia®.', '\nzFy\'s Help commands has been moved to a zFy\'s website. \n***https://ZTzTopiaa.github.io/zFy/cmd/lobby.html***')
    .setFooter(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL)
    .setTimestamp();
    
    msg.channel.send({ embed: hep });
}

module.exports.help = {
    name: "help",
    type: "Core",
    description: "Displays a list of all commands.",
    format: "`help`",
    require: "None."
}