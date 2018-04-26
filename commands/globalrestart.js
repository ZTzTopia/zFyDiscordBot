/*ZTzTopia*/
var Discord = require('discord.js');
var config = require('../config.json');
const errors = require('../errors.js');

module.exports.run = async (bot, msg, args) => {
    if (msg.author.id !== config.owner) return errors.ownerBot(msg)

    if (!bot.shard) return msg.channel.send(`This bot isn't sharded, idiot!`);
    msg.channel.send(':wave: All shards of ' + bot.user.username + ' are restarting...');
    
    setTimeout(() => {
    bot.shard.broadcastEval('process.exit(0)');
    }, 1000);
    return null;
}

module.exports.help = {
    name: "globalrestart",
    type: "Owner",
    description: 'Restarts the bot.',
    format: '`globalrestart`',
    require: "Owner of the Bot."
}