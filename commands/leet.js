var Discord = require('discord.js')

module.exports.run = async (bot, msg, args, suffix) => {
    msg.channel.send(leet(suffix) || '<:disagree:437835754446520350> Error');

    function leet(str) {
    var map = {
    a: 'Д',
    b: 'ß',
    c: '¢',
    e: '€',
    f: 'ƒ',
    g: '9',
    l: '1',
    o: '0',
    s: '§',
    t: '7',
    r: 'Я',
    y: '¥',
    n: 'ท',
    q: 'Ø',
    u: 'บ',
    w: 'พ',
    x: '×',
    };
    if (str === null || typeof str === 'undefined') {
    str = null;
    }
    
    var newStr = '';
    
    for (var i = 0; i < str.length; i++) {
    newStr += map[str[i].toLowerCase()] || str[i];
    }
    
    return newStr;
    }
}
    module.exports.help = {
    name: "leet",
    type: "Fun",
    description: "Returns the input, but in leet -> 1337 speak.",
    format: "`leet <Message>`",
    example: '`leet Wow is legen chair` - Bot will change "Wow is legen chair" to "W0w i5 1393n ch4i12"',
    require: "None."
}
