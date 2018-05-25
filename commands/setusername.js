var Discord = require('discord.js');
var config = require('../config.json');
const errors = require('../errors.js');

module.exports.run = async (bot, msg, args, suffix) => {

if (args.length < 1) return errors.noText(msg, `
   **Description**: Changes the username of the bot.
   **Format**: \`setUsername <username>\` 
   **Example**: \`setUsername zFy's\`
`)

    if (msg.author.id !== config.owner) return errors.ownerBot(msg);

    bot.user.setUsername(suffix);
}

module.exports.help = {
    name: "setusername",
    type: "Owner",
    description: "Changes the username of the bot.",
    example: '`setUsername zFy\'s`' ,
    format: "`setUsername <username>`",
    require: "Owner of the bot."
}
