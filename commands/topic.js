var Discord = require('discord.js');
const errors = require('../errors.js');
var config = require('../config.json');

module.exports.run = async (bot, msg, args, suffix) => {
if (!msg.member.permissions.has('MANAGE_CHANNELS') || !msg.member.permissions.has('ADMINISTRATOR')) return errors.noPerms(msg, 'MANAGE_CHANNELS')

  let hasPermissonRole =  msg.guild.members.get(bot.user.id).permissions.has("MANAGE_CHANNELS") || msg.guild.members.get(bot.user.id).permissions.has("ADMINISTRATOR");
  if (!hasPermissonRole) return errors.botPerms(msg, 'MANAGE_CHANNELS');

  msg.channel.setTopic(suffix);
}

module.exports.help = {
    name: "topic",
    type: "Moderation",
    description: 'Sets a topic on the current channel.',
    example: '`topic My new topic`' ,
    format: "`topic <topic>`",
    require: "ManageChannels, Administrator Server Permission"
}