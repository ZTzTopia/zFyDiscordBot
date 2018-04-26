/*ZTzTopia*/
var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
        var bill = new Discord.RichEmbed()
            .setTitle('Random Bill')
            .setURL('http://belikebill.azurewebsites.net/billgen-API.php?default=1')
            .setImage('http://belikebill.azurewebsites.net/billgen-API.php?default=1.jpg')
            .setFooter('Powered by belikebill.azurewebsites.net')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send({ embed: bill });
}

module.exports.help = {
    name: "bill",
    type: "Image",
    description: "Posts a random bill picture.",
    format: "`bill`",
    require: "None."
}
