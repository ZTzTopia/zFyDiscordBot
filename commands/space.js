var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
if (args.length < 1) {
  let ball1 = new Discord.RichEmbed()
  ball1.setColor(msg.guild.me.displayColor)
  .setDescription("<:disagree:424463051824037899> **" + msg.author.tag + "** Please enter something, Cant read that.")
  
  return msg.channel.send({ embed: ball1 });
}

    let amount = 2;

    if (!isNaN(args[0])) {
        amount = parseInt(args[0]);
        (amount < 1) && (amount = 1);
        (amount > 15) && (amount = 15);
        args = args.slice(1);
    }

msg.channel.send(args.join(' '.repeat(amount / 2)).split('').join(' '.repeat(amount)));
}

module.exports.help = {
    name: "space",
    type: "Fun",
    description: "Spaces out text to look all dramatic n\' stuff",
    format: "`space <aomountSpace> <text>`",
    example: '`space 2 Hamumu` - Bot Will edit Space "Hamumu" To "H  a  m  u  m  u"',
    require: "None."
}
