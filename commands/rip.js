var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    if (args.length < 1) return msg.channel.send('**RIP** ' + msg.author.username + '\nhttps://ripme.xyz/#' + msg.author.username)
    if (!msg.mentions.users.size) {
        return msg.reply('You need Mentions User to rip them!');
    }
    msg.channel.send('**RIP ' + msg.mentions.users.first().username + '**\nhttps://ripme.xyz/#' + msg.mentions.users.first().username);
    }
    module.exports.help = {
    name: "rip",
    type: "Fun",
    description: "Returns a ripme.xyz link for the mentioned user.",
    format: "`rip <mention>`",
    example: '`rip` \n`rip @Someone`',
    require: "Owner of the bot"
}