/*ZTzTopia*/
var Discord = require('discord.js');
var config = require('../config.json');

module.exports.run = async (bot, msg, args, suffix) => {
	if (!msg.member.permissions.has('MANAGE_CHANNELS') || !msg.member.permissions.has('ADMINISTRATOR')) return errors.noPerms(msg, 'MANAGE_CHANNELS')

  let hasPermissonRole =  msg.guild.members.get(bot.user.id).permissions.has("MANAGE_CHANNELS") || msg.guild.members.get(bot.user.id).permissions.has("ADMINISTRATOR");
  if (!hasPermissonRole) return errors.botPerms(msg, 'MANAGE_CHANNELS')
	
  if (args.length < 1) return errors.noText2(msg, 'Please enter channels name.')
  
    var channel = bot.channels.get(suffix);
		if(suffix.startsWith('<#')){
			channel = bot.channels.get(suffix.substr(2,suffix.length-3));
		}
		if(!channel){
			var channels = msg.channel.guild.channels.findAll("name",suffix);
			if(channels.length > 1){
				var response = config.disagree + " **" + msg.author.tag + "** Multiple channels match, please use id: ";
				for(var i=0;i<channels.length;i++){
					response += channels[i] + " : " + channels[i].id + ' ';
				}
  let elete4 = new Discord.RichEmbed()
  elete4.setColor(msg.guild.me.displayColor)
  .setDescription (response)
  .setFooter(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL)
  .setTimestamp();

  return msg.channel.send({ embed: elete4 });
			}else if(channels.length == 1){
				channel = channels[0];
			} else {
  let elete3 = new Discord.RichEmbed()
  elete3.setColor(msg.guild.me.displayColor)
  .setDescription (config.disagree + ' **' + msg.author.tag + '** Couldn\'t find channel ' + suffix + ' to delete.')
  .setFooter(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL)
  .setTimestamp();

  return msg.channel.send({ embed: elete3 });
			}
		}
  
  var guild = msg.guild;

  let elete2 = new Discord.RichEmbed()
  elete2.setColor(msg.guild.me.displayColor)
  .setDescription(config.agree + ' **' + msg.author.tag + '** has been successfullly delete. ' + suffix)
  .setFooter(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL)
  .setTimestamp();

  msg.channel.send({ embed: elete2 });

  var create = new Discord.RichEmbed();
  create.setColor(30207)
    .setAuthor(msg.author.username  + '#' + msg.author.discriminator, msg.author.avatarURL)
    .addField('Channels Create', `**📥 Deleted a** ` + suffix)
    .addField('Responsible Moderator', msg.author.username)
    .setFooter(`${guild.name} | ${msg.guild.channels.filter(m => m.type === 'text').size} Channels`)
    .setTimestamp();
    
    if (msg.guild.iconURL != null) {
      create.setFooter(`${guild.name} | ${msg.guild.channels.filter(m => m.type === 'text').size} Channels`, `${guild.iconURL}`);
      }
   
      try {
      var log = msg.guild.channels.find('name', 'mod-logs') || msg.guild.channels.find('name', 'modlogs');
      log.send({ embed: create });
    } catch (e) {
      msg.channel.send({ embed: create });
  }
    channel.delete().then(function(channel){
        console.log("deleted " + suffix + " at " + msg.author + "'s request");
      }).catch(function(error){
        console.log("couldn't delete channel: " + error);
  });
}

module.exports.help = {
    name: "delete",
    type: "Moderation",
    format: "`delete <channelName>`",
    example: '`delete #Some` \n`delete 12345678910`',
    description: "Deletes the specified text channel.",
    require: "ManageChannels, Administrator Server Permission"
}
