/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');

module.exports.run = async (bot, msg, args) => {
    let emojis;
    if (msg.guild.emojis.size === 0) return errors.noEmoji(msg);

        else {
            let Emoji1 = new Discord.RichEmbed()
            Emoji1.setColor(msg.guild.me.displayColor)
            .setTitle('Server Emoji:')
            .setDescription(`\n${msg.guild.emojis.map(e => `:${e.name}: ${e}`).join(' ')}`)
            .setFooter(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL)
            .setTimestamp();
            
            return msg.channel.send({ embed: Emoji1 });
        }
}

module.exports.help = {
    name: "emojis",
    type: "Emoji",
    description: 'Gives you a list of the server\'s emojis.',
    format: '`emojis`',
    require: "None."
}
