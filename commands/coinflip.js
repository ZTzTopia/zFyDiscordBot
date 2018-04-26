/*ZTzTopia*/
var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    msg.channel.send(`The coin landed on ${Math.random() > 0.5 ? 'Heads' : 'Tails'}!`);
}

module.exports.help = {
    name: "coinflip",
    type: "Fun",
    description: "Flip a coin and get Heads or Tails.",
    format: "`coinflip`",
    require: "None."
}
