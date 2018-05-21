/*ZTzTopia*/
const got = require('got');
var unirest = require('unirest');
var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {

const info = await getInfo(id);

             var bunny21 = new Discord.RichEmbed()
            .setTitle(`Bunny #` + info.id)
            .setURL(`https://api.bunnies.io/v2/loop/` + info.id + `/?media=webm,mp4`)
            .setImage(info.media.poster)
            .setFooter(`Powered by api.bunnies.io`)
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();
            msg.channel.send({ embed: bunny21 });
}

async function getInfo(id) {
    return (await got(`https://api.bunnies.io/v2/loop/random/?media=webm,mp4`, { json: true })).body;
}

module.exports.help = {
    name: 'bunny',
    type: 'Image',
    description: 'Gives a random bunny picture',
    format: "`bunny`",
    require: "None."
};
