/*ZTzTopia*/
var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    const randomPuppy = require('random-puppy');
    randomPuppy().then(url => {
        var puppy = new Discord.RichEmbed()
            .setTitle('Random Dog')
            .setURL(url)
            .setImage(url)
            .setFooter('Powered by random-puppy')
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
        msg.channel.send({ embed: puppy });
});
}

module.exports.help = {
    name: "dog",
    type: "Fun",
    description: "Posts a random cute dog picture.",
    format: "`dog`",
    require: "None."
}
