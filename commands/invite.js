var Discord = require('discord.js')

module.exports.run = async (bot, msg, args) => {
    var botID = bot.user.id;
    msg.channel.send("Invite me at ***https://discordapp.com/oauth2/authorize?client_id=" + botID + "&scope=bot&permissions=1010838590***")
}

module.exports.help = {
    name: "invite",
    aliases: "inv",
    type: "Core",
    description: "Generates an invite link you can use to invite the bot to your server.",
    format: "`invite`",
    require: "None.",
}
