/*ZTzTopia*/
var Discord = require('discord.js');

module.exports.run = async (bot, msg, args, suffix) => {
        require("request")("http://numbersapi.com/random/date?json",
        function(err, res, body) {
            var data = JSON.parse(body);
            var fact = new Discord.RichEmbed()
                .setURL('http://numbersapi.com/random/math?json')
                .addField('Date_Fact #' + data.number, data.text || 'None')
                .setFooter('Powered by numbersapi.com')
                .setColor(msg.guild.me.displayColor)
                .setTimestamp();
            msg.channel.send({ embed: fact });
      });
}

module.exports.help = {
    name: "datefact",
    type: "Fun",
    description: "Gives a random Date Fact.",
    format: "`datefact`",
    require: "None."    
}
