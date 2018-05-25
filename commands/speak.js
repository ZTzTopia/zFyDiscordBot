var Discord = require('discord.js');
const errors = require('../errors.js');

module.exports.run = async (bot, msg, args, suffix) => {
if (args.length < 1) return errors.noText(msg, `
   **Description**: Bot says message with text to speech.
   **Format**: \`speak <message>\` 
   **Example**: \`speak hello\`
`)
 
    msg.channel.send(suffix, {tts:true});
}

module.exports.help = {
    name: "speak",
    type: "Fun",
    description: "Bot says message with text to speech.",
    example: '`speak Hello`',
    format: "`speak <message>`",
    require : "None."
}
