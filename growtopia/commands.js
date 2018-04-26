var formulas = require('../growtopia/formulas.js')
var items = require('../growtopia/items.json')
var mass = require('../growtopia/recipes.json')
var moment = require('moment-timezone')
var config = require('../config.json')
var Discord = require("discord.js")
var client = new Discord.Client();

var getEndSeeds = formulas.getEndSeeds
var getAvgBlocks = formulas.getAvgBlocks
var getAvgSeeds = formulas.getAvgSeeds
var getAncestralBonusBlocks = formulas.getAncestralBonusBlocks

module.exports = {
  'onlines': {
    fn: function (bot, msg, suffix) {
      var https = require('https')
      https.get('https://growtopiagame.com/detail', (res) => {
        res.setEncoding('utf8')
        let rawData = ''
        res.on('data', (chunk) => {
          rawData += chunk
        });
        
        res.on('end', () => {
            var data = JSON.parse(rawData)
            var onlines1 = data['online_user']
            var onl = new Discord.RichEmbed()
            .setTitle('<:online:427848866323365898> Users Online') 
	          .setDescription('There are current **' + onlines1 + '** online users playing Growtopia.')
            .setFooter('Powered by Growtopiagame.com/detail')
            .setColor(config.green)
            .setTimestamp();
          msg.channel.send({ embed: onl });
     })
    })
   }
  },
  'growtopia': {
    fn: function (bot, msg, suffix) {
            var grow = new Discord.RichEmbed()
            .setTitle('<:ZTzGT:414265490765119509> Commands!') 
	          .setDescription("\n:map: **render** \n``Renders The Specified Growtopia Worlds! \nUsage:`` **" + config.prefix + 'render <World Name>**' + "\n\n<:online:427848866323365898> **onlines** \n``Show's the amount of people currently playing Growtopia. \nUsage:`` **" + config.prefix + 'onlines**' + "\n\n:calendar: **event** \n``Shows A Of The Current Event And Daily Block! \nUsage:`` **" + config.prefix + 'event**' + "\n\n:earth_americas: **wotd** \n``Shows A Picture Of The Current WOTD (World Of The Day)! \nUsage:`` **" + config.prefix + 'wotd**' + "\n\n:medal: **archieve** \n``Search The Specified Growtopia Achieve! \nUsage:`` **" + config.prefix + 'achieve <Achievement Name>**' + "\n\n:prayer_beads: **item** \n``Searches For The Specified Growtopia Item! \nUsage:`` **" + config.prefix + 'item <Items Name>**' + "\n\n:pick: **farm** \n``Shows Block You Need To Farm! \nUsage:`` **" + config.prefix + 'farm <Amount, Rarity Of Blocks>**')
            .setFooter(`${bot.user.username}#${bot.user.discriminator}™`, bot.user.iconURL)
            .setColor(config.green)
            .setTimestamp();
          msg.channel.send({ embed: grow });
    }
  },
  'event': {
    fn: function (bot, msg, suffix) {
      var dailyEmojis = ['<:anemone:413548661499363330>', '<:aurora:413548662359064576>', '<:obsidian:413548661428191234>', '<:lavalamp:413548662019588097>', '<:fissure:413548661558214668>', '<:waterfall:413548661817999360>', '<:hidden:413548661444968449>']
      var index = moment.tz(Date.now(), 'America/New_York').day()
      var date = moment.tz('America/New_York')
      var comet = ''
      var cmetTime = moment.tz([date.year(), date.month(), 28], 'America/New_York').diff(date)
      if (cmetTime > 0) {
        var days = Math.floor(cmetTime / (1000 * 60 * 60 * 24))
        var hours = Math.floor(cmetTime / (1000 * 60 * 60) % 24)
        var mins = Math.floor(cmetTime / (1000 * 60) % 60)
        var secs = Math.floor(cmetTime / (1000) % 60)
        comet = 'Coming in ' + (days > 0 ? days + ' days, ' : '') + (hours > 0 ? hours + ' hours, ' : '') + (mins > 0 ? mins + ' minutes' + (secs > 0 ? ' and ' : ', ') : '') + (secs > 0 ? secs + ' seconds' : '') + '.'
      } else {
        if (date.date() === 28) comet = 'Currently ongoing'
        else {
          cmetTime = moment.tz([(date.month() === 10 ? date.year() + 1 : date.year()), (date.month() === 10 ? 0 : date.month()), 28], 'America/New_York').diff(date)
          days = Math.floor(cmetTime / (1000 * 60 * 60 * 24))
          hours = Math.floor(cmetTime / (1000 * 60 * 60) % 24)
          mins = Math.floor(cmetTime / (1000 * 60) % 60)
          secs = Math.floor(cmetTime / (1000) % 60)
          comet = 'Coming in ' + (days > 0 ? days + ' days, ' : '') + (hours > 0 ? hours + ' hours, ' : '') + (mins > 0 ? mins + ' minutes' + (secs > 0 ? ' and ' : ', ') : '') + (secs > 0 ? secs + ' seconds' : '') + '.'
        }
      }
      var daily = ['**Anemone**', '**Aurora**', '**Obsidian**', '**Lava Lamp**', '**Fissure**', '**Waterfall**', '**Hidden Door**']
      msg.channel.send({
        embed: {
          color: config.green,
          fields: [{
            name: '\u{d83d}\u{dd59} Growtopia Time',
            value: moment.tz(Date.now(), 'America/New_York').format('MMM Do - HH:mm:ss')
          }, {
            name: '\u{2604} Night of The Comet',
            value: comet
          }, {
            name: '\u{d83c}\u{dfb2} Daily Block',
            value: dailyEmojis[index] + ' ' + daily[index],
		            timestamp: new Date(),
                 footer: {
                 text: `${bot.user.username}#${bot.user.discriminator}™`
		 }
          }]
        }
      })
    }
  },
  'wotd': {
    fn: function (bot, msg, suffix, db) {
      var https = require('https')
      https.get('https://growtopiagame.com/detail', (res) => {
        res.setEncoding('utf8')
        let rawData = ''
        res.on('data', (chunk) => {
          rawData += chunk
        })
        res.on('end', () => {
          try {
            var data = JSON.parse(rawData)
            var wotd = data['world_day_images']['full_size'].substr(data['world_day_images']['full_size'].indexOf('worlds/') + 'worlds/'.length).replace('.png', '')
            let opt = {
              host: 'growtopiagame.com',
              path: '/worlds/' + wotd + '.png',
              method: 'HEAD'
            }
            let req = https.request(opt, (res2) => {
              color = config.green
              msg.channel.send({
                embed: {
                  color,
                  title: '\u{d83c}\u{dfc6} World of The Day',
                  'description': "Today's WOTD is **" + wotd.toUpperCase() + '**\nAwarded on **' + res2.headers['last-modified'] + '**',
                  'image': { 
                    url: 'https://growtopiagame.com/worlds/' + wotd + '.png?v=' + new Date(res2.headers['last-modified']).getTime(),
                 timestamp: new Date(),
                 footer: {
                 text: `${bot.user.username}#${bot.user.discriminator}™`
                    }
                  }
                }
              })
            })
            req.end()
          } catch (e) {
            msg.channel.send('Error!\n' + e.stack)
          }
        })
      })
    }
  },
  'render': {
    fn: function (bot, msg, suffix) {
      if (!suffix) return msg.channel.send('**Please input World Name!.**')
      if (suffix.match(/[a-zA-Z0-9]+/g)) {
        suffix = suffix.match(/[a-zA-Z0-9]+/g)[0]
      }
      let opt = {
        host: 'growtopiagame.com',
        path: '/worlds/' + suffix.toLowerCase() + '.png',
        method: 'HEAD'
      }
      var https = require('https')
      let req = https.request(opt, (res2) => {
        color = config.green
        if (msg.guild) {
                    // color = msg.guild.members.get(bot.user.id).displayHexColor;
        }
        if (res2.statusCode === 404) {
          msg.channel.send({
            embed: {
              color: config.green,
              title: '\u{d83c}\u{df0e} Renderworld - ' + suffix.toUpperCase(),
              'description': 'No Render World!.'
            }
          })
        } else {
          msg.channel.send({
            embed: {
              color: config.green,
              title: '\u{d83c}\u{df0e} Renderworld - ' + suffix.toUpperCase(),
              'description': 'Rendered on **' + res2.headers['last-modified'] + '**',
              'image': {
                url: 'https://growtopiagame.com/worlds/' + suffix.toLowerCase() + '.png?v=' + new Date(res2.headers['last-modified']).getTime(),
                 timestamp: new Date(),
                 footer: {
                 text: `${bot.user.username}#${bot.user.discriminator}™`
                }
              }
            }
          })
        }
      })
      req.end()
    }
  },
  'achieve': {
    alias: ['achievement'],
    fn: function (bot, msg, suffix) {
      var achieve = require('../growtopia/achievements.json')
      var color = 0x3EE034
      if (achieve[suffix.toLowerCase()]) {
        msg.channel.send({
          embed: {
            color: config.green,
            description: achieve[suffix.toLowerCase()].desc,
            title: achieve[suffix.toLowerCase()].name,
            thumbnail: {
              url: achieve[suffix.toLowerCase()].icon,
		                     timestamp: new Date(),
                 footer: {
                 text: `${bot.user.username}#${bot.user.discriminator}™`
            }
          }
        }
	})
      } else msg.channel.send("**No such achievement found. Please make sure, that you're typing in the exact name of achievement.**")
    }
  },
  'farm': {
    fn: function (bot, msg, suffix) {
      var param = suffix.split(' ')
      var amount = param[0]
      if (!isNaN(parseInt(amount))) {
        amount = Math.floor(parseInt(amount))
        if (amount < 1) {
          msg.channel.send('**Amount of blocks must be a positive number above zero.**')
        } else {
          var rarity = parseInt(param[1])
          if (!isNaN(rarity)) {
            if (rarity < 1 && rarity > 500) {
              msg.channel.send('**Rarity must be between 1 and 500.**')
            } else {
              var maxDrop = parseInt(param[2]) || 2
              if (!isNaN(maxDrop)) {
                var blocks = getAvgBlocks(maxDrop, amount)
                msg.channel.send(':seedling: **Hamumu Farming System**\nYou shall get **' + blocks + ' blocks** and **' + getAvgSeeds(rarity, amount) + " seeds**.\nHowever you'll get **" + (getEndSeeds(blocks) * 3 - blocks) + ' more blocks** (totalling ' + (getEndSeeds(blocks) * 3) + ' blocks) from breaking, and end up with **' + (getEndSeeds(blocks) + getAvgSeeds(rarity, amount)) + ' seeds.**\n\n' +
                                    'Ancestral Tesseract of Dimensions end up boosting your blocks total to **' + (getAncestralBonusBlocks(blocks) * 2) + '**, therefore increasing seed total to **' + (getAncestralBonusBlocks(blocks) + getAvgSeeds(rarity, amount)) + '**.')
              } else {
                msg.channel.send('Please specify a proper max drop per visible fruit.')
              }
            }
          } else {
            msg.channel.send('**Please specify the rarity.**')
          }
        }
      } else msg.channel.send('**Please specify the amount of trees.**')
    }
  },
  'item': {
    fn: function (bot, m, suffix) {
      if (!suffix) return m.channel.send('**I require input to find something in first place.**')
      var data = items[suffix.toLowerCase()]
      var res = Object.keys(items).filter(i => i.includes(suffix.toLowerCase()))
      var len = res.length
      res.splice(10)
      for (var d in res) {
        res[d] = items[res[d]].name
      }
      if (len === 1) {
        if (!data) data = items[res[d].toLowerCase()]
      } else if (!data) {
        if (len === 0) {
          return m.channel.send('**No such item found.**')
        } else {
          return m.channel.send('**There are ' + len + ' results matching your input' + (len > 10 ? ', showing 10 first.' : '.') + '**\n\n- ' + res.join('\n- '))
        }
      }
      if (data) {
        var properties = []
        if (mass[data.name.toLowerCase()]) {
          if (mass[data.name.toLowerCase()].length === 2) {
            properties.push('To grow, splice a **' + items[mass[data.name.toLowerCase()][0]].name + ' Seed** with a **' + items[mass[data.name.toLowerCase()][1]].name + ' Seed**.\n')
          } else {
            var r = mass[data.name.toLowerCase()]
            properties.push('To create this item, combine **' + r[0].split('?')[0] + ' ' + items[r[0].split('?')[1]].name + '**, **' + r[1].split('?')[0] + ' ' + items[r[1].split('?')[1]].name + '** and **' + r[2].split('?')[0] + ' ' + items[r[2].split('?')[1]].name + '**.\n')
            properties.push("This item can't be spliced.")
          }
        } else {
          properties.push("This item can't be spliced.")
        }
		if ((data.properties & 4096) > 0) {
          properties.push('This item is PUBLIC: Even if it\'s locked, anyone can smash it.')
        }
		if ((data.properties & 2048) > 0) {
          properties.push('A tree of this type can bear surprising fruit!')
        }
        if ((data.properties & 4) > 0) {
          properties.push('This item never drops any seeds.')
        }
        if (data.category === 37) {
          properties.push('This item has no use... by itself.')
        }
        if ((data.properties & 128) > 0) {
          properties.push('This item can only be used in World-Locked worlds.')
        }
        if ((data.properties & 32768) > 0) {
          properties.push('This item cannot be dropped or traded.')
        }
        if ((data.properties & 512) > 0) {
          properties.push("This item can't be destroyed - smashing it will return it to your backpack if you have room!")
        }
        if ((data.properties & 1) > 0) {
          properties.push("This item can be placed in two directions, depending on the direction you're facing.")
        }
        if ((data.properties & 2) > 0) {
          properties.push('This item has special properties you can adjust with the wrench.')
        }
        if (data.category === 107) {
          properties.push('This item can be upgraded.')
        }
        m.channel.send({
          embed: {
            thumbnail: {
              url: 'https://tools.cernodile.com/growtopia/getItem.php?id=' + data.id + "&ts=223102017"
            },
            'color': config.green,
            'description': '**' + data.name + '** (' + (data.rarity === 999 ? 'No Rarity' : 'Rarity ' + data.rarity) + ', ID ' + data.id + ')\n*' + data.description + '*\n\n' + properties.join('\n'),
                 timestamp: new Date(),
                 footer: {
                 text: `${bot.user.username}#${bot.user.discriminator}™`
            }
          }
        })
      }
    }
  }
}
