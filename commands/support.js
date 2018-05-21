var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    const msg1 = await msg.reply("Support Server Sent to DM's")
    setTimeout(function() {
msg1.delete()
}, 6000);
msg.author.send('*Support Server*: ***https://discordbots.org/servers/437876026555760642***');
}

module.exports.help = {
    name: "support",
    type: "Core",
    description: 'Send in DMs support servers.',
    format: "`support`",
    require: "None."
}