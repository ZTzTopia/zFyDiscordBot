/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');

module.exports.run = async (bot, msg, args) => {
var responses = [
    ' was hit on the head by ',
    ' was kicked by ',
    ' was slammed into a wall by ',
    ' was dropkicked by ',
    ' was DDoSed by ',
    ' was chokeslammed by ',
    ' was run over with a robot by ',
    ' had their IQ dropped 15 points by ',
    ' had a heavy object dropped on them by ',
    ' was beat up by ',
    ' was tercyduk by ',
    ' was smeckdown by ',
    ' was banned by ',
    ' was pataliti by ',
    ' was stole by'
];
var player1 = msg.member;
var player2 = msg.mentions.users.array()[0];
if (!player2) return errors.noUser(msg, 'Fight');
var hp1 = 100;
var hp2 = 100;
var damage = [0, 5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var turn1 = Math.random() > 0.5;
var times = 1;
    
if (player2.id === bot.user.id) {
            msg.channel.send(bot.user.tag + ' **COMPLETELY AND UTTERLY DESTROYED** ' + player1.tag + '! *[-999999 HP] [0/100 Hp Remaining]*');
            msg.channel.send("*Hint: Don't try to fight me! Nothing personnel, kid.*");
} else if (player2 !== null) {
        while (hp1 > 0 && hp2 > 0) {
        times++;
        var i = Math.floor(Math.random() * responses.length);
        var x = Math.floor(Math.random() * damage.length);
         if (turn1 === true) {
            hp2 -= damage[x];
            sendMessage('**' + player2.tag + '**' + responses[i] + '**' + player1.tag + '** *[-' + damage[x] + ' hp]* \n\n**' + player2.tag + '** Hp: \n' + hp1 + '/100 Hp Remaining \n\n**' + player1.tag + '** Hp: \n' + hp2 + '/100 Hp Remaining', times);
            turn1 = false;
        } else {
            hp1 -= damage[x];
            sendMessage('**' + player1.tag + '**' + responses[i] + '**' + player2.tag + '** *[-' + damage[x] + ' hp]* \n\n**' + player1.tag + '** Hp: \n' + hp2 + '/100 Hp Remaining \n\n**' + player2.tag + '** Hp: \n' + hp2 + '/100 Hp Remaining', times);
            turn1 = true;
        }
    }
            if (hp1 <= 0) {
                sendMessage(player1 + ' Lose! Dont cry, GG You Won ' + player2 + '!', times);
            } else if (hp2 <= 0) {
                sendMessage(player2 + ' Lose! Dont cry, GG You Won ' + player1 + '!', times);
            }

            setTimeout(() => {
                msg.channel.fetchMessages({ limit: 100 })
                    .then(messages => {
                        var msgar = messages.array();
                        msgar = msgar.filter(msg2 => msg2.author.id === bot.user.id && msg2.content.includes('/100 Hp Remaining'));
                        msgar.length = 50;
                        msgar.map(msg2 => msg2.delete().catch(console.error));
                    });
            }, (times * 1500) + 2000);
} 

function sendMessage(content, times2) {
    setTimeout(() => {
        msg.channel.send(content);
    }, 1500 * times2);
 }
}

module.exports.help = {
    name: "fight",
    type: "Fun",
    description: 'Simulates an fight against another user. v1',
    format: '`fight <mention>`',
    example: '`fight @Someone`',
    require: "None."
}
