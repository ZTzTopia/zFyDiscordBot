/*ZTzTopia*/
var Discord = require('discord.js');
var unirest = require('unirest');

module.exports.run = async (bot, msg, args) => {
    unirest.get('https://dog-api.kinduff.com/api/facts')
    .end(result => {
        var e = new Discord.RichEmbed()
            .setFooter('Powered by kinduff.com')
            .setTimestamp()
            .setTitle('Dog Fact')
            .setColor(msg.guild.me.displayColor)
            .setDescription(result.body.facts[0]);

        msg.channel.send({ embed: e });
});
}

module.exports.help = {
    name: "dogfact",
    type: "Util",
    description: "Gives a random dog fact.",
    format: "`dogfact`",
    require: "None."
}
