const got = require('got');
//Btw Thx For SharpBot!
var unirest = require('unirest');
var Discord = require('discord.js');
var config = require('../config.json');

module.exports.run = async (bot, msg, args) => {
    let id;

    if (args[0] === 'latest') {
        id = (await getLatest()).num;
    } else {
        id = parseInt(args[0]);
        if (isNaN(id)) {
            id = await getRandom();
        } else {
            const latest = await getLatest();
            const max = latest.num;
            if (id > max) {
                let lol2 = new Discord.RichEmbed()
                lol2.setColor(msg.guild.me.displayColor)
                .setDescription(config.disagree + ' **' + msg.author.tag + '** XkCd Only ' + max + ' Comics.')
              
                return msg.channel.send({ embed: lol2 });
    } else {
        if (id < 1) {
            let lol2 = new Discord.RichEmbed()
            lol2.setColor(msg.guild.me.displayColor)
            .setDescription(config.disagree + ' **' + msg.author.tag + '** XkCd Comics Not Found.')
          
            return msg.channel.send({ embed: lol2 });
            }
        }
    }
}


    // Avoid the 404 page
    while (id === '404 Not Found') {
        id = await getRandom();
    }

    const info = await getInfo(id);

             var xkcd21 = new Discord.RichEmbed()
            .setTitle(`[${id}] ${info.title}`)
            .setURL(`http://xkcd.com/${id}`)
            .setDescription(`**` +info.alt+ `**` || `Nothing`)
            .addField(`Upload On:`, info.day+ '-' +info.month+ '-' +info.year || `None`)
            .setImage(info.img)
            .setFooter(`Powered by xkcd.com`)
            .setTimestamp();
            msg.channel.send({ embed: xkcd21 });
}

async function getInfo(id) {
    return (await got(`http://xkcd.com/${id}/info.0.json`, { json: true })).body;
}

async function getLatest() {
    return (await got('http://xkcd.com/info.0.json', { json: true })).body;
}

async function getRandom() {
    const latest = await getLatest();
    const max = latest.num;

    return Math.floor(Math.random() * max);
}

module.exports.help = {
    name: 'xkcd',
    type: 'Fun',
    description: 'Fetches random or specific XKCD comics, Powered by xkcd.com',
    format: "`xkcd [latest|<id>]`",
    example: '`xkcd 1000` - Bot will give you XKCD commics #1000',
    require: "None."
};
