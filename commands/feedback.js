/*ZTzTopia*/
var Discord = require('discord.js');
var config = require('../config.json');
const errors = require('../errors.js');

module.exports.run = async (bot, msg, args, suffix) => {

if (args.length < 1) return errors.noText(msg, '**Description**: Allows the user to provide feedback about the bot. \n**Format**: `feedback <Message>` \n**Example**: `feedback Help Commands Error!`')
  
  let f1 = new Discord.RichEmbed()
  f1.setColor(msg.guild.me.displayColor)
  .setColor(msg.guild.me.displayColor)
  .addField('Feedback Sent', config.agree + ' **' + msg.author.tag + '** Your feedback has been received! The developer will get back to you as soon as possible.')
  .setFooter(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL)
  .setTimestamp();

  msg.channel.send({ embed: f1 }); 
    
var owner = bot.users.get(config.owner);
var f = new Discord.RichEmbed();
f.setColor(0x1675DB)
    .setAuthor(msg.author.username + ' (' + msg.author.id + ')', msg.author.avatarURL)
    .addField('Feedback Recieved', config.agree + ' **' + msg.author.tag + '** ' + suffix)
    .setFooter(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL)
    .setTimestamp();

owner.send({ embed: f });
}

module.exports.help = {
    name: "feedback",
    type: "Core",
    description: 'Allows the user to provide feedback about the bot.',
    format: '`feedback <Message>`',
    example: '`feedback Help Commands Error!` \n`feedback bot not respond`',
    require: "None."
}
