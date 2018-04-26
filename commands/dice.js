/*ZTzTopia*/
var Discord = require('discord.js');
var d20 = require('d20')

module.exports.run = async (bot, msg, args, suffix) => {
  if (suffix.split("d").length <= 1) {
  let dec = new Discord.RichEmbed()
  dec.setColor(msg.guild.me.displayColor)
  .setDescription(":game_die: rolled a " + d20.roll(suffix || "12"))
  .setFooter(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL)
  .setTimestamp();

  return msg.channel.send({ embed: dec });
    }
    else if (suffix.split("d").length > 1) {
        var eachDie = suffix.split("+");
        var passing = 0;
        for (var i = 0; i < eachDie.length; i++){
            if (eachDie[i].split("d")[0] < 50) {
                passing += 1;
            };
        }
        if (passing == eachDie.length) {
  let dec1 = new Discord.RichEmbed()
  dec1.setColor(msg.guild.me.displayColor)
  .setDescription(":game_die: rolled a " + d20.roll(suffix))
  .setFooter(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL)
  .setTimestamp();

  msg.channel.send({ embed: dec1 });
        } else {
  let dec2 = new Discord.RichEmbed()
  dec2.setColor(msg.guild.me.displayColor)
  .setDescription("tried to roll too many dice at once!")
  .setFooter(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL)
  .setTimestamp();

  msg.channel.send({ embed: dec2 });
        }
    }
}

module.exports.help = {
    name: "dice",
    aliases: "die",
    type: "Fun",
    description: "Rolls a dice.",
    format: "`dice <Number>`",
    example: "`dice` \n`dice 12`",
    require: "None."
}
