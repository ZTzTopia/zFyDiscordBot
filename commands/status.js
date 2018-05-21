var Discord = require('discord.js');
var config = require('../config.json');
const errors = require('../errors.js');

const validStatuses = [
        {
            internal: 'online',
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
            internal: 'invisible',
            display: 'Invisible',
            emoji: ':ghost:'
        }
    ];
    
    const validStatusRegex = new RegExp(`^(${validStatuses.map(status => status.internal).join('|')})$`);
    const validStatusString = validStatuses.map(status => `\`${status.internal}\``).join(', ');

module.exports.run = async (bot, msg, args) => {
    if (msg.author.id !== config.owner) return errors.ownerBot(msg);

        if (args.length < 1 || !validStatusRegex.test(args[0])) return errors.noText2(msg, `Please provide a status to set: ${validStatusString}`);
    
    if (args.length > 1 || validStatusRegex.test(args[0])) {
        const status = validStatuses.find(status => status.internal === args[0]);
    
        bot.user.setStatus(status.internal);
    
        (await msg.channel.send(`${status.emoji} Set status to ${status.display}.`)).delete(5000);
    }
}

module.exports.help = {
    name: "status",
    type: "Owner",
    description: 'Sets bot status to `online`, `idle`, `dnd`, `invisible`.',
    format: "`status <Status>`",
    example: '`status dnd`',
    require: "None."
}
