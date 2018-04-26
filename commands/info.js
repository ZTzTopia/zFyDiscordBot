/*ZTzTopia*/
var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    var botID = bot.user.id;
    var info = new Discord.RichEmbed()
    .setColor(msg.guild.me.displayColor)
    .addField("Check out my GitHub", '***https://github.com/ZTzTopiaa/zFy21***')
    .addField("Invite Bot", '***https://discordapp.com/oauth2/authorize?client_id=' + botID + '&scope=bot&permissions=1010838590***')
    .addField('Donate my bot', 'Coming!')
    .setFooter(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarUR)
    .setTimestamp();
    msg.channel.send({ embed: info });
}
    module.exports.help = {
    name: "info",
    type: "Core",
    description: "Gets a information about Bot.",
    format: "`info`",
    require: "None."
}
