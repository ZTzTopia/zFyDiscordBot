var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
      const msg1 = await msg.channel.send('**Calculating...**')
       setTimeout(function() {
        msg1.edit('🏓 Pong 🏓. \n⏱ My latency is about ' + (msg1.createdTimestamp - msg.createdTimestamp) + 'ms. \n💗 My Heartbreaker is about ' + `${bot.ping}ms.`)
}, 1000)
}

module.exports.help = {
    name: "ping",
    type: "Core",
    description: "Make sure bot alive or not",
    format: "`ping`",
    require: "None."
}
