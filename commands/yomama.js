var Discord = require('discord.js');
var unirest = require('unirest');

module.exports.run = async (bot, msg, args, res) => {
    unirest.get('http://demo4835604.mockable.io/yomomma')
    .end(result => {
        var yomama = JSON.parse(result.body);
        var num = Math.round(Math.random() * yomama.length);
            var mama21 = new Discord.RichEmbed()
            .setTitle(`Yo Momma Joke #` + num)
            .setURL('http://demo4835604.mockable.io/yomomma')
            .setDescription(yomama[num].jokes)
            .setFooter(`Powered by demo4835604.mockable.io/yomomma`)
            .setTimestamp();
            msg.channel.send({ embed: mama21 });
  })
}



module.exports.help = {
    name: "yomama",
    aliases: "yomomma",
    type: 'Fun',
    description: 'Gets a random Yo Mama Joke.',
    format: "`yomama`",
    require: "None."
}
