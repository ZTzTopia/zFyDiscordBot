/*ZTzTopia*/
var Discord = require('discord.js');
var unirest = require('unirest');
const errors = require('../errors.js');

module.exports.run = async (bot, msg, args, suffix) => {
    unirest.get('https://restcountries.eu/rest/v2/name/' + suffix + '?fullText=true')
    .end(result2 => {
    var res = result2.body;

  if (!res) return errors.resBody(msg, 'Country', `
   **Description**: Gets information about a country. 
   **Format**: \`country <countryName>\` 
   **Example**: \`country Indonesia\`
 `) 
 
 else if (res.status === 404) return errors.resStatus(msg, '404')

        for (var i = 0; i < res.length; i++) {
            var country = new Discord.RichEmbed();
            var capital = res[i].capital || 'N/A';
            var code = res[i].alpha2Code || 'N/A';
            var code2 = res[i].alpha3Code || 'N/A';
            var Ccode = res[i].callingCodes || 'N/A';
            country.setTitle(res[i].name)
                .setAuthor(msg.author.tag, msg.author.avatarURL)
                .setDescription('Country Information')
                .setThumbnail(bot.user.avatarURL)
                .addField('Capital', capital, true)
                .addField('Domain', code + ', ' + code2, true)
                .addField('Calling Code', '+'+Ccode, true)
                .addField('Region', res[i].region, true)
                .addField('Subregion', res[i].subregion, true)
                .addField('Population', res[i].population, true)
                .addField('Area', res[i].area + ' Square Kilometers', true)
                .addField('Timezones', res[i].timezones.join('\n'), true)
                .addField('Native Name', res[i].nativeName, true)
                .addField('Alternate Names', res[i].altSpellings.join(', '), true)
                .addField('Demonym', res[i].demonym, true)
                .addField('Flag', res[i].flag, true)
                .setFooter('Powered by restcountries.eu')
                .setColor(msg.guild.me.displayColor)
                .setTimestamp();
                msg.channel.send({ embed: country });
           }
        })
    }

module.exports.help = {
    name: "country",
    type: "Utilities",
    description: "Gets information about a country.",
    format: "`country <countryName>`",
    example: '`country Indonesia` \n`country malaysia`',
    require: "None."
}
