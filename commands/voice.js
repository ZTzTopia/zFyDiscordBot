/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
var config = require('../config.json');

module.exports.run = async (bot, msg, args, suffix) => {
if (!msg.member.permissions.has('MANAGE_CHANNELS') || !msg.member.permissions.has('ADMINISTRATOR')) return errors.noPerms(msg, 'MANAGE_CHANNELS')

  let hasPermissonRole =  msg.guild.members.get(bot.user.id).permissions.has("MANAGE_CHANNELS") || msg.guild.members.get(bot.user.id).permissions.has("ADMINISTRATOR");
  if (!hasPermissonRole) return errors.botPerms(msg, 'MANAGE_CHANNELS')
	
  if (args.length < 1) return errors.noText2(msg, 'Please enter voice name.')
	
  var guild = msg.guild;
  msg.channel.guild.createChannel(suffix, "voice").then(function(channel) {
	  
  let cr2 = new Discord.RichEmbed()
  cr2.setColor(msg.guild.me.displayColor)
  .setDescription(config.agree + " **" + msg.author.tag + "** has been successfullly create. " + channel)
  .setFooter(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL)
  .setTimestamp();

  msg.channel.send({ embed: cr2 });

			var create = new Discord.RichEmbed();
			create.setColor(30207)
				.setAuthor(msg.author.username  + '#' + msg.author.discriminator, msg.author.avatarURL)
				.addField('Voice Create', `**📥 Created a** ` + channel)
				.addField('Responsible Moderator', msg.author.username)
				.setFooter(`${guild.name} | ${msg.guild.channels.filter(m => m.type === 'voice').size} Channels`)
        .setTimestamp();
        
        if (msg.guild.iconURL != null) {
          create.setFooter(`${guild.name} | ${msg.guild.channels.filter(m => m.type === 'voice').size} Channels`, `${guild.iconURL}`);
          }
		   
					try {
					var log = msg.guild.channels.find('name', 'mod-logs') || msg.guild.channels.find('name', 'modlogs');
					log.send({ embed: create });
				} catch (e) {
					msg.channel.send({ embed: create });
      }
    })
}
    module.exports.help = {
    name: "voice",
	type: "Moderation",
    exaple: '`voice general`' ,
    format: "`voice <channelName>`",
    description: "Creates a new voice channel with the given name.",
    require: "ManageChannels, Administrator Server Permission"
}
