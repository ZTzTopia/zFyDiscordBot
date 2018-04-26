var Discord = require('discord.js');
var unirest = require('unirest');

module.exports.run = async (bot, msg, args, suffix) => {
        require("request")("http://numbersapi.com/random/year?json",
        function(err, res, body) {
            var data = JSON.parse(body);
            var fact = new Discord.RichEmbed()
                .setTitle('Year Fact #' + data.number)
                .setURL('http://numbersapi.com/random/year?json')
                .setDescription(data.text || 'None')
                .setFooter('Powered by numbersapi.com')
                .setTimestamp();
            msg.channel.send({ embed: fact });
      });
}

module.exports.help = {
    name: "yearfact",
    type: 'Fun',
    description: 'Gets Random Year Fact, Powered by numbersapi.com',
    format: "`yearfact`",
    require: "None."
}