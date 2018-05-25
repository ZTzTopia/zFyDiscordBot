var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
  var str = '';
  var guilds = bot.guilds.array();
  for (var i = 0; i < guilds.length; i++) {
      str += (i + 1) + ': ' + guilds[i].name + ' ~ **' + guilds[i].memberCount + 'Members** ~ Owned By ' + guilds[i].owner + '\n';
  }
  let embed = new Discord.RichEmbed()
            .addField(`Bot Serving In ` + bot.guilds.array().length + ` Servers`, `__**${bot.user.username} is currently on the following servers:**__ \n` + str, true)
            .setFooter('Powered by ' + bot.user.username, bot.user.avatarURL)
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send({ embed: embed});
}
module.exports.help = {
    name: "servers",
    type: "Util",
    description: "Lists the servers the bot is in.",
    format: "`servers`",
    require: "None."
}
