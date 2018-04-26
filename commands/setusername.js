var Discord = require('discord.js')
module.exports.run = async (bot, msg, args, suffix) => {
    if (args.length < 1) return msg.reply ("<:disagree:424463051824037899> Please enter Name.")
    if (msg.author.id !== "403032652002754572") return msg.reply("<:disagree:424463051824037899> Only Owner The Bot Can Use This **Commands**")
    bot.user.setUsername(suffix);
}

module.exports.help = {
    name: "setUsername",
    type: "Owner",
    description: "Changes the username of the bot.",
    example: '`setUsername Someone` - Bot will change the Nickname to "Someone"' ,
    format: "`setUsername <username>`",
    require: "Owner of the bot."
}
