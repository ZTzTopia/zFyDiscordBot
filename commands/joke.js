var Discord = require('discord.js')
var jokes = require('../data/jokes.json');

module.exports.run = async (bot, msg, args) => {
    var min = 0,
    max = jokes.length - 1;
    msg.reply(jokes[Math.floor(Math.random() * (max - min + 1)) + min].body);
}
    module.exports.help = {
    name: "joke",
    type: "Fun",
    description: "Gives a random Joke in the database.",
    format: "`joke`",
    require: "None."
}
