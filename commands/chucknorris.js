/*ZTzTopia*/
var Discord = require('discord.js');
var unirest = require('unirest');

module.exports.run = async (bot, msg, args) => {
    unirest.get('https://api.chucknorris.io/jokes/random')
    .end(result => {
        var joke = result.body;
        var e = new Discord.RichEmbed()
            .setFooter('Powered by chucknorris.io')
            .setTimestamp()
            .setColor(msg.guild.me.displayColor)
            .setAuthor('Chuck Norris Joke', joke.icon_url, joke.url)
            .setDescription(joke.value);

        msg.channel.send({ embed: e });
  });
}

module.exports.help = {
    name: "chucknorris",
    type: "Fun",
    description: "Gets a random Chuck Norris joke.",
    format: "`chucknorris`",
    require: "None."
}
