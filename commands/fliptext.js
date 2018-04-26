/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');

const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
// Start with the character '!'
const OFFSET = '!'.charCodeAt(0);

module.exports.run = async (bot, msg, args) => {

if (args.length < 1) return errors.noText(msg, `
 **Description**: Transforms the text you input into Initial Caps. 
 **Format**: \`fliptext <text>\` 
 **Example**: \`fliptext WoW Flip Text\`
 `);

  msg.channel.send(
        args.join(' ').split('')
        .map(c => c.charCodeAt(0) - OFFSET)
        .map(c => mapping[c] || ' ')
        .reverse().join('')
    );
}

module.exports.help = {
    name: "fliptext",
    type: "Fun",
    description: "Transforms the text you input into Initial Caps.",
    format: "`fliptext <text>`",
    example: '`fliptext WoW Flip Text` \n`fliptext ZTzTopia`',
    require: "None."
}
