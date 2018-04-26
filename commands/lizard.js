var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, msg, args) => {
neko.getSFWLizard().then(lizard => {
        var lizard = new Discord.RichEmbed()
            .setImage(lizard.url)
            .setFooter('Powered by nekos.life')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send({ embed: lizard });
  })
}

module.exports.help = {
    name: "lizard",
    type: "Anime",
    description: 'Posts a random lizard picture.',
    format: "`lizard`",
    require: "None."
}