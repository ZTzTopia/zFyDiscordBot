var Discord = require('discord.js');
const lmgtfy = require('lmgtfy');

module.exports.run = async (bot, msg, args) => {    
    msg.channel.send(lmgtfy(msg.content));
}
    module.exports.help = {
    name: "lmgtfy",
    type: "Fun",
    description: "Posts a LMGTFY link in chat",
    format: "`lmgtfy <Query>`",
    example: '`lmgtfy`',
    require: "None."
}