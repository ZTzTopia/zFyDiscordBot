/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
var config = require('../config.json');

module.exports.run = async (bot, msg, args, suffix) => {
msg.delete();

/*if (!msg.member.permissions.has('MANAGE_MESSAGES')) return errors.noPerms(msg, "MANAGE_MESSAGES");

let hasPermissonRole =  msg.guild.members.get(bot.user.id).permissions.has("MANAGE_MESSAGES") || msg.guild.members.get(bot.user.id).permissions.has("ADMINISTRATOR");
if (!hasPermissonRole) return errors.botPerms(msg, 'MANAGE_MESSAGES');

         msg.channel.fetchMessages({ limit: 100 })
          .then(function (messages){
            msg.channel.bulkDelete(messages)
             
            messagesDeleted = messages.array().length;

          msg.channel.send(config.agree + " **" + msg.author.tag + "** Deletion of messages successfully. Total messages deleted: " + messagesDeleted);
          })
                setTimeout(() => {
                msg.channel.fetchMessages({ limit: 100 })
                    .then(messages => {
                        var msgar = messages.array();
                        msgar = msgar.filter(msg2 => msg2.author.id === bot.user.id && msg2.content.includes('Total messages deleted:'));
                        msgar.length = 50;
                        msgar.map(msg2 => msg2.delete().catch(console.error));
                    });
                   }, 2000);*/
                   msg.channel.send('***This Commands Have BuG***!')
}

module.exports.help = {
    name: "clear",
    type: "Moderation",
    description: "Provides a users permissions in the specified guild.",
    format: "`clear`",
    example: '`clear` - Bot Will delete all latest message',
    require: "ManageMessages, Administrator Server Permission"
}
