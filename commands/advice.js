/*ZTzTopia*/
var Discord = require('discord.js');
const unirest = require('unirest');

module.exports.run = async (bot, msg, args) => {
    unirest.get('http://api.adviceslip.com/advice')
    .end(result => {
        var advice = JSON.parse(result.body);
        var e = new Discord.RichEmbed()
            .setFooter('Powered by adviceslip.com')
            .setTimestamp()
            .setColor(msg.guild.me.displayColor)
            .setTitle('Advice Slip #' + advice.slip.slip_id)
            .setDescription(advice.slip.advice);

        msg.channel.send({ embed: e });
  });
}

module.exports.help = {
    name: "advice",
    type: "Fun",
    description: "Gets a random advice.",
    format: "`advice`",
    require: 'None.'
}
