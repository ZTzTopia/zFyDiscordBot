/*ZTzTopia*/
var Discord = require('discord.js');
const math = require('math-expression-evaluator');
const errors = require('../errors.js');

module.exports.run = async (bot, msg, args, suffix) => {
if (args.length < 1) return errors.noText(msg, `
   **Description**: Calculates any math equation. 
   **Format**: \`calculate <question>\`
   **Example**: \`calculate 100+100\`
`)

    const question = args.join(' ');

    let answer;
    try {
        answer = math.eval(question);
    } catch (e) {
        return msg.channel.send(`Invalid math equation: ${question} 
   **Example**: \`calculate 100 + 100\`
        `)
    }

    let math2 = new Discord.RichEmbed()
    math2.setColor(msg.guild.me.displayColor)
        .addField('Equation:', `\n\`\`\`\n${question}\n\`\`\``)
        .addField('Answer:', `\n\`\`\`\n${answer}\n\`\`\``)

        msg.channel.send({ embed: math2 });
}
  
module.exports.help = {
    name: "calculate",
    aliases: 'calc',
    type: "Fun",
    description: "Calculates any math equation.",
    format: "`calculate <question>`",
    example: '`calculate 100 + 100`',
    require: "None."
}
