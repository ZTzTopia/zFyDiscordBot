var Discord = require('discord.js')

module.exports.run = async (bot, msg, args, suffix) => {
	if (!msg.member.permissions.has('MANAGE_CHANNELS') || !msg.member.permissions.has('ADMINISTRATOR')) {
		let vc = new Discord.RichEmbed()
		vc.setColor(msg.guild.me.displayColor)
		.setDescription("<:disagree:428759831587848192> **" + msg.author.tag + "** You dont have Permissions `MANAGE_CHANNELS` to do that.")
		.setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.avatarURL)
		.setTimestamp();
	  
		return msg.channel.send({ embed: vc });
		}
	  
		let hasPermissonRole =  msg.guild.members.get(bot.user.id).permissions.has("MANAGE_CHANNELS") || msg.guild.members.get(bot.user.id).permissions.has("ADMINISTRATOR");
		if (!hasPermissonRole) {
		  let vc1 = new Discord.RichEmbed()
		  vc1.setColor(msg.guild.me.displayColor)
		  .setDescription("<:disagree:428759831587848192> **" + msg.author.tag + "** I dont have Permissions `MANAGE_CHANNELS` to do that.")
		  .setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.avatarURL)
		  .setTimestamp();
	  
		  return msg.channel.send({ embed: vc1 });
		}
		  
		if (args.length < 1) {
		let vc2 = new Discord.RichEmbed()
		vc2.setColor(msg.guild.me.displayColor)
		.setDescription("<:disagree:428759831587848192> **" + msg.author.tag + `** Please enter channels name.
		**Description**: Creates a new voice channel with the given name.
		**Format**:` + '`voice <channelName>`' + `
		**Example**:` + `voice general` + `
		`)
		.setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.avatarURL)
		.setTimestamp();
	  
		return msg.channel.send({ embed: vc2 });
		}
		  
		var guild = msg.guild;
		msg.channel.guild.createChannel(suffix, "voice").then(function(channel) {
			
		let vc3 = new Discord.RichEmbed()
		vc3.setColor(msg.guild.me.displayColor)
		.setDescription("<:agree:428759830245801985> **" + msg.author.tag + "** has been successfullly create. " + channel)
		.setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.avatarURL)
		.setTimestamp();
	  
		msg.channel.send({ embed: vc3 });
	  
				  var vc4 = new Discord.RichEmbed();
				  vc4.setColor(30207)
					  .setAuthor(msg.author.username  + '#' + msg.author.discriminator, msg.author.avatarURL)
					  .addField('Voice Channels Create', `**📥 Created a** ` + channel)
					  .addField('Responsible Moderator', msg.author.username)
					  .setFooter(`${guild.name} | ${msg.guild.channels.filter(m => m.type === 'voice').size} Channels`)
			  .setTimestamp();
			  
			  if (msg.guild.iconURL != null) {
				vc4.setFooter(`${guild.name} | ${msg.guild.channels.filter(m => m.type === 'voice').size} Channels`, `${guild.iconURL}`);
				}

				try {
					var log = msg.guild.channels.find('name', 'mod-logs') || msg.guild.channels.find('name', 'modlogs');
					log.send({ embed: vc4 });
				} catch (e) {
					msg.channel.send({ embed: vc4 });
				}
		});
}
    module.exports.help = {
    name: "voice",
	type: "Moderation",
    exaple: '`voice general` - make Voice Channel and given name "general"' ,
    format: "`voice <channelName>`",
    description: "Creates a new voice channel with the given name.",
    require: "ManageChannels, Administrator Server Permission"
}