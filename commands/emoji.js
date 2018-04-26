/*ZTzTopia*/
var Discord = require('discord.js')

module.exports.run = async (bot, msg, args) => {
    msg.channel.send(require('emoji-random').random());
}

module.exports.help = {
    name: "emoji",
    type: "Emoji",
    description: 'Returns a random emoji.',
    format: '`emoji`',
    require: "None."
}
