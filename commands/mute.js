const Discord = require("discord.js");
const ms = require("ms");
var interval;

module.exports.run = async (bot, message, args, suffix) => {

  if(!message.member.permissions.has("MANAGE_ROLES") || !message.member.permissions.has('ADMINISTRATOR')) {
    let lol = new Discord.RichEmbed()
    lol.setColor(msg.guild.me.displayColor)
    .setDescription("<:disagree:428759831587848192> **" + message.author.tag + "** You dont have Permissions `MANAGE_ROLES` to do that.")
  
    return msg.channel.send({ embed: lol });
    }

    let hasPermissonRole =  message.guild.members.get(bot.user.id).permissions.has("MANAGE_ROLES") || message.guild.members.get(bot.user.id).permissions.has("ADMINISTRATOR");
    if (!hasPermissonRole) {
      let bane1 = new Discord.RichEmbed()
      bane1.setColor(message.guild.me.displayColor)
      .setDescription("<:disagree:428759831587848192> **" + message.author.tag + "** I dont have Permissions `MANAGE_ROLES` to do that.")
    
      return message.channel.send({ embed: bane1 });
    }

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!tomute) {
  let tomute1 = new Discord.RichEmbed()
  tomute1.setColor(message.guild.me.displayColor)
  .setDescription("<:disagree:428759831587848192> **" + message.author.tag + "** Couldn't find user.")
  
  return message.channel.send({ embed: tomute1 });
  }
  
  let mutetime = parseInt(args[1])

  if (!mutetime) {
    let tomute2 = new Discord.RichEmbed()
    tomute2.setColor(message.guild.me.displayColor)
    .setDescription('<:disagree:428759831587848192> **' + message.author.tag + '** Time limit should be a number. **Description**: Mutes a mentioned user both from speaking and chatting. You can also specify time in minutes "up to 10Hours" for how long the user should be muted.. \n**Format**: `mute <mention> <time> <reason>` \n**Example**: \n  `mute @Someone 30 Dont Spam` \n  `mute @Someone 10s Spam`')

    return message.channel.send({ embed: tomute2 });

  } else if (isNaN(mutetime)) {
    let tomute2 = new Discord.RichEmbed()
    tomute2.setColor(message.guild.me.displayColor)
    .setDescription('<:disagree:428759831587848192> **' + message.author.tag + '** Time limit should be a number. **Description**: Mutes a mentioned user both from speaking and chatting. You can also specify time in minutes "up to 10Hours" for how long the user should be muted.. \n**Format**: `mute <mention> <time> <reason>` \n**Example**: \n  `mute @Someone 30 Dont Spam` \n  `mute @Someone 10s Spam`')

    return message.channel.send({ embed: tomute2 });

  } else if (mutetime < 1 || mutetime > 10800) {
  let tomute3 = new Discord.RichEmbed()
  tomute3.setColor(message.guild.me.displayColor)
  .setDescription('<:disagree:428759831587848192> **' + message.author.tag + '** Time can not be more than 5Hours')
  
  return message.channel.send({ embed: tomute3 });
  }

  var reason = args.slice(2).join(" ");
  var user = bot.users.get(tomute.id);

  let muterole = message.guild.roles.find(`name`, "muted");
  //Start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role

  message.delete().catch(O_o=>{});

  let muteembed = new Discord.RichEmbed()
  muteembed.setColor(16312092)
      .setAuthor(user.tag, user.avatarURL)
      .addField('Member Muted', `**${user.tag} (${user.id}) was muted from the server.**`)
      .addField('Time Mute', `<@${tomute.id}> muted for ${(mutetime)}`)
      .addField('Responsible Moderator', message.author.username)
      .addField('Reason', reason || "None")
      .setFooter(`${message.guild.name} | ${message.guild.members.size} members`)
      .setTimestamp();

      if (message.guild.iconURL != null) {
        muteembed.setFooter(`${message.guild.name} | ${message.guild.members.size} members`, `${message.guild.iconURL}`);
        }

  try {
    var log = message.guild.channels.find('name', 'mod-logs') || message.guild.channels.find('name', 'modlogs');
    log.send({ embed: muteembed });
} catch (e) {
    message.channel.send({ embed: muteembed });
}

  await(tomute.addRole(muterole.id));
  message.reply(`<:agree:428759830245801985> **` + message.author.tag + `** <@${tomute.id}> has been muted for ${(mutetime)}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<:agree:428759830245801985> **` + message.author.tag + `** <@${tomute.id}> has been unmuted!`);
    var mute = new Discord.RichEmbed();

 mute.setColor(0xFFB200)
     .setAuthor(user.tag, user.avatarURL)
     .addField('Member Unmuted', `**${user.tag} (${user.id}) was unmuted.**`)
     .addField('Responsible Moderator', message.author.username)
     .setFooter(`${message.guild.name} | ${message.guild.members.size} members`)
     .setTimestamp();

     if (message.guild.iconURL != null) {
      mute.setFooter(`${message.guild.name} | ${message.guild.members.size} members`, `${message.guild.iconURL}`);
      }

     try {
         var log = message.guild.channels.find('name', 'mod-logs') || message.guild.channels.find('name', 'modlogs');
         log.send({ embed: mute });
     } catch (e) {
         message.channel.send({ embed: mute });
     }
  }, ms(mutetime));
//end of module
}

module.exports.help = {
  name: "mute",
  type: "Moderation",
  description: 'Mutes a mentioned user both from speaking and chatting. You can also specify time in minutes "up to 10Hours" for how long the user should be muted.',
  example: '`mute @Someone 30 Dont Spam`' ,
  format: "`mute <mention> <time> <reason>`",
  require: "ManageRoles, MoveMembers, Administrator Server Permission"
}
