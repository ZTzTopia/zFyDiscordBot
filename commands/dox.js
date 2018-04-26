/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');

module.exports.run = async (bot, msg, args, suffix) => {

    var date1 = new Date('April 21, 2018 12:21:59');
    if (suffix.toLowerCase() === 'haxrin' || suffix.toLowerCase() === 'darknoobz' || suffix.toLowerCase() === 'ihek') {
        let haxrin = new Discord.RichEmbed()
        .setColor(msg.guild.me.displayColor)
        .setThumbnail(bot.user.avatarURL)
        .setTitle('Haxrin\'s Dox Result')
        .addField('Username', 'Haxrin, DarkNoobz, iHek', true)
        //.addField('His Phone Number', 'Unknown', true)
        //.addField('Calling Code', 'Unknown', true)
        //.addField('Real Name', 'Unknown', true)
        .addField('Email', 'levhart289@gmail.com', true)
        .addField('Channel', 'Haxrin', true)
        .addField('IP Address', '84.42.161.126', true)
        /*.addField('Growtopia Username', 'Unknown', true)
        .addField('Growtopia Password', 'Unknown', true)
        .addField('Growtopia Email', 'Unknown', true)*/
        .addField('Continent', 'Europe(EU)', true)
        .addField('Country', 'Czech Republic', true)
        .addField('Capital City', 'Prague', true)
        .addField('State', 'Hlavni mesto Praha', true)
        //.addField('City Location', '', true)
        //.addField('Continent Lat/Lon', '', true)
        //.addField('City Lat/Lon', '', true)
        .addField('Time Zone', 'Europe/Prague', true)
        .addField('Haxrin#9299', '430596449365917708', true)
        .addField('Face Reveal', 'https://image.ibb.co/mOHHMn/haxrin.jpg', true)
        .addField('Proof Links', 'https://pastebin.com/azVHKFyd', true)
        .setFooter('Doxed by Unknown')
        .setTimestamp(date1);
        
        msg.channel.send({ embed: haxrin });
    } 
    
    var date2 = new Date('April 21, 2018 12:43:10');
    if (suffix.toLowerCase() === 'nadohack' || suffix.toLowerCase() === 'titangel') {
           let nadohack = new Discord.RichEmbed()
            .setColor(msg.guild.me.displayColor)
            .setThumbnail(bot.user.avatarURL)
            .setTitle('Nadohack\'s Dox Result')
            .addField('Username', 'NadoHack , Titangel', true)
            .addField('Phone Number', '+994 51 693 93 97', true)
            .addField('Calling Code', '+994', true)
            .addField('Real Name', 'Isa Bozkurt ', true)
            .addField('Email', 'savedata.stealer31@gmail.com \nwizard.hax55@gmail.com', true)
            .addField('Channel', 'NadoHack', true)
            .addField('IP Address', '5.197.89.204', true)
            .addField('Growtopia Username', 'G0BLlN', true)
            .addField('Growtopia Password', 'Unknown', true)
            .addField('Growtopia Email', 'wizard.hax55@gmail.com', true)
            .addField('Country', 'Azerbaijan', true)
            .addField('Capital City', 'Bakue', true)
            .addField('State', 'Baki', true)
            .addField('Time Zone', 'Asia/Baku', true)
            //.addField('', '', true)
            //.addField('Face Reveal', '', true)
            //.addField('Proof Links', '', true)
            .setFooter('Doxed by Unknown')
            .setTimestamp(date2);
            
            msg.channel.send({ embed: nadohack });
    }

    var date3 = new Date('April 21, 2018 09:24:32');
    if (suffix.toLowerCase() === 'ztz' || suffix.toLowerCase() === 'ztztopia') {
        let ZTzTopia = new Discord.RichEmbed()
         .setColor(msg.guild.me.displayColor)
         .setThumbnail(bot.user.avatarURL)
         .setTitle('ZTzTopia\'s Dox Result')
         .addField('Username', 'ZTzTopia', true)
         //.addField('Phone Number', 'Not Have', true)
         .addField('Calling Code', '+64', true)
         .addField('Real Name', 'Muhamad Zibrisky', true)
         .addField('Email', 'a098hd@gmail.com', true)
         .addField('Channel', 'ZTzTopia', true)
         .addField('IP Address', '139.228.105.1', true)
         /*.addField('Growtopia Username', '', true)
         .addField('Growtopia Password', '', true)
         .addField('Growtopia Email', 'a098hd@gmail.com', true)*/
         .addField('Continent', 'Asia', true)
         .addField('Country', 'Indonesia', true)
         .addField('Capital City', 'Jakarta', true)
         .addField('State', 'Jawa Barat', true)
         .addField('City Location', 'Tangerang', true)
         .addField('Continent Lat/Lon', '29.8405 / 89.296', true)
         .addField('City Lat/Lon', '(-6.1781) / (106.63)', true)
         .addField('Time Zone', 'Asia/Jakarta', true)
         .addField('ZTzTopia®#2250', '436171327968116738', true)
         .addField('School', '36ZTU', true)
         .addField('Facebook', 'https://www.facebook.com/ZTzTopia', true)
         .addField('Face Reveal', 'https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.0-9/565058_1398551303707809_2082087174_n.jpg?_nc_cat=0&oh=8b94faa4861fd710c6b7226493552ece&oe=5B9CC448', true)
         //.addField('Proof Links', '', true)
         .setFooter('Doxed by ZTzTopia')
         .setTimestamp(date3);
         
         msg.channel.send({ embed: ZTzTopia });
  }
  else (errors.noDox(msg));
 }

module.exports.help = {
    name: "dox",
    type: "Utilities",
    description: "Search a user in dox list/database",
    format: "`dox <name>`",
    example: '`dox ZTzTopia`',
    require: "None."
}
