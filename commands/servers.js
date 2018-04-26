var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
  var str = '';
  var guilds = bot.guilds.array();
  for (var i = 0; i < guilds.length; i++) {
      str += (i + 1) + ': ' + guilds[i].name + ' ~ **' + guilds[i].memberCount + 'Members** ~ Owned By ' + guilds[i].owner + '\n';
}
    msg.channel.send({
        embed: {
        color: msg.guild.me.displayColor,
      
        title: `Bot Serving In ` + bot.guilds.array().length + ` Servers`,
        description: `__**${bot.user.username} is currently on the following servers:**__ \n` + str,
          timestamp: new Date(),
          footer: {
            text: "©" + bot.user.username
      }
    }
  })
}
module.exports.help = {
    name: "servers",
    type: "Util",
    description: "Lists the servers the bot is in.",
    format: "`servers`",
    require: "None."
}
