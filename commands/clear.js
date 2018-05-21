/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
var config = require('../config.json');

module.exports.run = async (bot, msg, args, suffix) => {
msg.delete()

if (!msg.member.permissions.has('MANAGE_MESSAGES')) return errors.noPerms(msg, "MANAGE_MESSAGES");

let hasPermissonRole =  msg.guild.members.get(bot.user.id).permissions.has("MANAGE_MESSAGES") || msg.guild.members.get(bot.user.id).permissions.has("ADMINISTRATOR");
if (!hasPermissonRole) return errors.botPerms(msg, 'MANAGE_MESSAGES');

msg.channel.fetchMessages()
.then(function(messages){

msg.channel.bulkDelete(messages)
.catch(err => {
console.error(err);
errors.bulkE(msg);
  })
});                                                                                                                                            
}

module.exports.help = {
    name: "clear",
    type: "Moderation",
    description: "Clear 100 latest message in a channel.",
    format: "`clear`",
    require: "ManageMessages, Administrator Server Permission"
}
