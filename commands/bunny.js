/*ZTzTopia*/
const got = require('got');
var unirest = require('unirest');
var Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    let id;

        /*id = parseInt(args[0]);
        if (isNaN(id)) {
            id = `random`
        } else if (!id) {
            id = `random`
        }*/

const info = await getInfo(id);
/*if (info.code === 400) return errors.resStatus(msg, '400');
if (info.code === 404) return errors.resStatus(msg, '404');*/

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
    format: "`bunny <id>`",
    example: '`bunny 100`',
    require: "None."
};
