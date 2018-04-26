/*ZTzTopia*/
var Discord = require('discord.js')

module.exports.run = async (bot, msg, args) => {
    var fml = require('fmylife'), { RichEmbed } = require('discord.js');
    fml.random().then(m => msg.channel.send({ embed: new RichEmbed()
        .setColor(msg.guild.me.displayColor)
        .setTitle('**Fuck My Life** Story')
        .setDescription(m)
        .setFooter('Powered by fmylife')
        .setTimestamp()
    })
  )
}

module.exports.help = {
    name: "fml",
    type: "Fun",
    description: 'Grabs a fml (Fuck My Life) story entry.',
    format: '`fml`',
    require: "None."
}