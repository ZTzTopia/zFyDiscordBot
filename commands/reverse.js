var Discord = require('discord.js');

module.exports.run = async (bot, msg, args, suffix) => {
if (args.length < 1) return errors.noText(msg, `
   **Description**: Reverses the text you input.
   **Format**: \`reverse <text>\` 
   **Example**: \`reverse zFy\`
`);

msg.channel.send(args.join(' ').split('').reverse().join(''));
}

module.exports.help = {
    name: "reverse",
    type: "Fun",
    description: "Reverses the text you input.",
    format: "`reverse <text>`",
    example: '`reverse zFy\'s`',
    require: "None."
}
