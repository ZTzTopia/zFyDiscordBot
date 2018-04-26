var Discord = require('discord.js');
var unirest = require('unirest');

module.exports.run = async (bot, msg, args) => {
unirest.get('https://nekos.life/api/lewd/neko')
    .end(result => {
        var lewd = new Discord.RichEmbed()
            .setImage(result.body.neko)
            .setFooter('Powered by https://nekos.life/api/v2')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send({ embed: lewd });
  });
}

module.exports.help = {
    name: "lewd",
    type: "Anime",
    description: 'Posts a random lewd picture.',
    format: "`lewd`",
    require: "None."
}