var Discord = require('discord.js');
var config = require('../config.json');

const validStatuses = [
        {
            internal: 'online' && 'on',
            display: 'Online',
            emoji: ':zap:'
        },
        {
            internal: 'idle',
            display: 'Idle',
            emoji: ':beach_umbrella:'
        },
        {
            internal: 'dnd',
            display: 'Do Not Disturb',
            emoji: ':mute:'
        },
        {
            internal: 'invisible' && 'invis' && 'off',
            display: 'Invisible',
            emoji: ':ghost:'
        }
    ];
    
    const validStatusRegex = new RegExp(`^(${validStatuses.map(status => status.internal).join('|')})$`);
    const validStatusString = validStatuses.map(status => `\`${status.internal}\``).join(', ');

module.exports.run = async (bot, msg, args) => {
    if (msg.author.id !== config.owner) {
        let stat  = new Discord.RichEmbed()
        stat.setColor(msg.guild.me.displayColor)
        .addField('Error™', "<:disagree:428759831587848192> **" + msg.author.tag + `** Only Owner The Bot Can Use This **Commands**`)
        .setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.avatarURL)
        .setTimestamp();
        
        return msg.channel.send({ embed: stat })
        }

        if (args.length < 1 || !validStatusRegex.test(args[0])) {
            let stat  = new Discord.RichEmbed()
            stat.setColor(msg.guild.me.displayColor)
            .addField('Error™', "<:disagree:428759831587848192> **" + msg.author.tag + `** Please provide a status to set: ${validStatusString}`)
            .setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.avatarURL)
            .setTimestamp();
            
            return msg.channel.send({ embed: stat })
            }
    
    if (args.length > 1 || validStatusRegex.test(args[0])) {
        const status = validStatuses.find(status => status.internal === args[0]);
    
        bot.user.setStatus(status.internal);
    
        (await msg.channel.send(`${status.emoji} Set status to ${status.display}.`)).delete(5000);
    }
}

module.exports.help = {
    name: "status",
    type: "Util",
    description: 'Sets your status to `online`, `idle`, `dnd`, `invisible`.',
    format: "`status <Status>`",
    example: '`status dnd` - Bot will change to "dnd"',
    require: "None."
}
