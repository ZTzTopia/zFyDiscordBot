var Discord = require('discord.js');
const errors = require('../errors.js');

module.exports.run = async (bot, msg, args, suffix) => {
if (args.length < 1) return errors.noText(msg, `
   **Description**: Spaces out text to look all dramatic n\' stuff.
   **Format**: \`space <aomountSpace> <text>\` 
   **Example**: \`space 2 ZTzTopia\`
`)

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
    description: "Spaces out text to look all dramatic n\' stuff.",
    format: "`space <aomountSpace> <text>`",
    example: '`space 2 ZTzTopia` \n`space ZTzTopia`',
    require: "None."
}
