var Discord = require('discord.js');
const { clearInterval } = require('timers');
var timeHelper = require('../data/vote/time.js');

module.exports.run = async (bot, msg, args, suffix, duration) => {

/*	if (args.length < 1) {
     let vote = new Discord.RichEmbed()
     vote.setColor(msg.guild.me.displayColor)
	 .addField(`Error™`, `<:disagree:428759831587848192> **` + msg.author.tag + `** Please enter something,
	 **Description**: -.
	 **Format**:` + '`vote <time> <message>`' + `
	 **Example**: -
	 `)
	 .setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.avatarURL)
	 .setTimestamp();
		
	 return msg.channel.send({ embed: vote });
	 }

	let t = args[0];
	if (!t) {
		let vote22 = new Discord.RichEmbed()
		vote.setColor(msg.guild.me.displayColor)
		.addField(`Error™`, `<:disagree:428759831587848192> **` + msg.author.tag + `** Please enter something,
		**Description**: -.
		**Format**:` + '`vote <time> <message>`' + `
		**Example**: -
		`)
		.setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.avatarURL)
		.setTimestamp();

		return msg.channel.send({ embed: vote2 });
	}

	if (isNaN(t)) {
	 let vote1 = new Discord.RichEmbed()
	 vote1.setColor(msg.guild.me.displayColor)
	 .setDescription('<:disagree:428759831587848192> **' + msg.author.tag + '** Time limit should be a number.')
	 .setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.avatarURL)
	 .setTimestamp();
		
	 return msg.channel.send({ embed: vote1 });
		
	} else if (t < 10 || t > 6000) {
        let lol2 = new Discord.RichEmbed()
        lol2.setColor(msg.guild.me.displayColor)
        .setDescription('<:disagree:424463051824037899> **' + msg.author.tag + '** Time can not be Less than 10Sec and More than 10Hours.')
      
        return msg.channel.send({ embed: lol2 });
	}

	var yes = '✔';
	var no = '✖';
    var yesc = 0;
	var noc = 0;
	var  responded = [],
	interval;

	let giveaway = {
		started : new Date().getTime(),
	};

	var ends = timeHelper.timePlusMinutesAsDate(giveaway.started, t),
	remaining = timeHelper.remaining(new Date().getTime(), ends);
		
	var reason = args.slice(1).join(" ") || 'None';

	let vot2 = new Discord.RichEmbed()
	vot2.setColor([Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)])
	.addField(reason,  ' **React** with \:heavy_check_mark: or \:heavy_multiplication_x: \n**Time Remaining**: ' + remaining + '**Vote ends**')
	.setFooter(`Vote ends at `)
	.setTimestamp(ends)

	const vot1 = await msg.channel.send('🎉  **VOTE!**  🎉', { embed: vot2 });

				interval = setInterval(() => {
					if (t >= 0) {
						remaining = timeHelper.remaining(new Date().getTime(), ends);
						let vot2 = new Discord.RichEmbed()
						vot2.setColor(1376000)
						.addField(reason,  ' **React** with \:heavy_check_mark: or \:heavy_multiplication_x: \n**Time Remaining**: ' + remaining + '**Vote ends**')
						.setFooter(`Vote ends at `)
						.setTimestamp(ends)

						vot1.edit('🎉  **VOTE!**  🎉', { embed: vot2 });
						 vot1.react(yes)
                         vot1.react(no)
					}
				}, 1000);
	
	const reactions = await vot1.awaitReactions(
		reaction => reaction.emoji.name === yes || reaction.emoji.name === no,
	{time: t * 1000});
	
			setTimeout(() => {
				clearInterval(interval)
			}, 1);

			setTimeout(() => {
			if (`${reactions.get(yes).count-1}` > `${reactions.get(no).count-1}`) {
				let vot = new Discord.RichEmbed()
				vot.setColor(16711680)
				.addField(`${yes} Won!`, `${yes}: ${reactions.get(yes).count-1} vote(s). \n${no}: ${reactions.get(no).count-1} vote(s).`)
				.setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.avatarURL)
				.setTimestamp()

				vot1.edit('🎉  **VOTE ENDED!**  🎉', { embed: vot } )

			} else if (`${reactions.get(yes).count-1}` < `${reactions.get(no).count-1}`) {
				let vot = new Discord.RichEmbed()
				vot.setColor(16711680)
				.addField(`${no} Won!`, `${no}: ${reactions.get(no).count-1} vote(s). \n${yes}: ${reactions.get(yes).count-1} vote(s).`)
				.setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.avatarURL)
				.setTimestamp()

				vot1.edit('🎉  **VOTE ENDED!**  🎉', { embed: vot } )

			} else if (`${reactions.get(yes).count-1}` === `${reactions.get(no).count-1}`) {
				let vot = new Discord.RichEmbed()
				vot.setColor(16711680)
				.addField(`${yes} and ${no} Both!`, `${yes}: ${reactions.get(yes).count-1} vote(s). \n${no}: ${reactions.get(no).count-1} vote(s).`)
				.setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.avatarURL)
				.setTimestamp()
				
				vot1.edit('🎉  **VOTE ENDED!**  🎉', { embed: vot } )
			}
		}, 3000)*/
	msg.channel.send('***Vote Commands Has Been Disable! Wait Admin Enbale It.***')
	}

module.exports.help = {
    name: "vote",
    type: 'Fun',
    description: 'Create a voting',
    format: "`vote <time> <message>`",
    example: '-',
    require: "None."
}
