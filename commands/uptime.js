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
    
msg.channel.send({
  embed: {
  color: msg.guild.me.displayColor,

  title: "Bot Uptime",
  description: "This is a uptime Bot running!",
        fields: [{
        name: "\n\nBot Uptime:",
        value: "**Uptime**: " + timestr
      }
    ],
    timestamp: new Date(),
    footer: {
      text: "©" + bot.user.username
  }
 }
});
}

module.exports.help = {
    name: "uptime",
    type: "Core",
    description: "Provides the bot\'s uptime Bot running.",
    format: "`uptime`",
    require: "None."
}