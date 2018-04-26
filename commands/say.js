var Discord = require('discord.js')
module.exports.run = async (bot, msg, args, suffix) => {
    if (args.length < 1) return errors.noText(msg, `
    **Description**: Ask the magic 8-ball a question.
    **Format**: \`say <text>\` 
    **Example**: \`say ZTzTopia\`
 `);

    msg.channel.send(suffix);
}

module.exports.help = {
    name: "say",
    type: "Fun",
    description: "Ask the magic 8-ball a question.",
    format: "`say <text>`",
    example: '`say ZTzTopia`',
    require: "None."
}