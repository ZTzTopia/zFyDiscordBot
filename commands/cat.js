/*ZTzTopia*/
var Discord = require('discord.js');
var unirest = require('unirest');

module.exports.run = async (bot, msg, args) => {
    unirest.get('http://aws.random.cat/meow')
    .end(result => {
        var cat = new Discord.RichEmbed()
            .setTitle('Random Cat')
            .setURL(result.body.file)
            .setImage(result.body.file)
            .setFooter('Powered by aws.random.cat')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send({ embed: cat });
  });
}

module.exports.help = {
    name: "cat",
    type: "Image",
    description: "Posts a random cute cat picture.",
    format: "`cat`",
    require: "None."
}
