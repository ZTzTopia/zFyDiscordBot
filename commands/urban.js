var Discord = require('discord.js');
var urban = require('urban');

module.exports.run = async (bot, msg, args, suffix) => {
    if (args.length < 1) {
        
      urban.random().first(json => {
      let embed = new Discord.RichEmbed()
      .setTitle(json.word)
      .setThumbnail('https://lh5.googleusercontent.com/-rY97dP0iEo0/AAAAAAAAAAI/AAAAAAAAAGA/xm1HYqJXdMw/s0-c-k-no-ns/photo.jpg')
      .setDescription(json.definition || 'None')
      .addField('Voted:', json.thumbs_up + '👍' || '0 👍')
      .addField('Unvoted:', json.thumbs_down + '👎' || '0 👎')
      .addField('Current voted:', json.current_vote || 'None')
      .addField('Defid:', json.defid || 'None')
      .addField('Example:', json.example || 'None')
      .setFooter('Author: ' + json.author)
     
      return msg.channel.send({embed})
      })
    }
    
  if (suffix) {
    let str = args.join(" ")
    
    urban(str).first(json =>{
    if(!json) return msg.reply('No result found.');
    
    let embed = new Discord.RichEmbed()
     .setTitle(json.word)
    .setThumbnail('https://lh5.googleusercontent.com/-rY97dP0iEo0/AAAAAAAAAAI/AAAAAAAAAGA/xm1HYqJXdMw/s0-c-k-no-ns/photo.jpg')
     .setDescription(json.definition || 'None')
     .addField('Voted:', json.thumbs_up + '👍' || '0 👍')
     .addField('Unvoted:', json.thumbs_down + '👎' || '0 👎')
     .addField('Current voted:', json.current_vote || 'None')
     .addField('Defid:', json.defid || 'None')
     .addField('Example:', json.example || 'None')
     .setFooter('Author: ' + json.author)
    
     msg.channel.send({embed})
       });
  }
}

module.exports.help = {
    name: "urban",
    type: "Util",
    description: "Defines a word from the Urban Dictionary.",
    format: "`urban <word>`",
    example: '`urban` \n`urban ABC`',
    require: "None."
}
