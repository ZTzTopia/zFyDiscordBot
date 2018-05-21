var Discord = require('discord.js');
var startTime = Date.now();

module.exports.run = async (bot, msg, args) => {
    var now = Date.now();
    var msec = now - startTime;
    console.log("Uptime is " + msec + " milliseconds");
    var days = Math.floor(msec / 1000 / 60 / 60 / 24);
    msec -= days * 1000 * 60 * 60 * 24;
    var hours = Math.floor(msec / 1000 / 60 / 60);
    msec -= hours * 1000 * 60 * 60;
    var mins = Math.floor(msec / 1000 / 60);
    msec -= mins * 1000 * 60;
    var secs = Math.floor(msec / 1000);
    var timestr = "";
    if(days > 0) {
        timestr += days + " Days ";
    }
    if(hours > 0) {
        timestr += hours + " Hours ";
    }
    if(mins > 0) {
        timestr += mins + " Minutes ";
    }
    if(secs > 0) {
        timestr += secs + " Seconds ";
    }
    
  let embed = new Discord.RichEmbed()
  .setColor(msg.guild.me.displayColor)
  .setDescription('***Uptime:*** ' + timestr)
 
  return msg.channel.send({embed})
}

module.exports.help = {
    name: "uptime",
    type: "Core",
    description: "Provides the bot\'s uptime Bot running.",
    format: "`uptime`",
    require: "None."
}