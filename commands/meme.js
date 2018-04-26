var Discord = require('discord.js');

module.exports.run = async (bot, msg, args, suffix) => {
    var predictions = [
        "https://cdn.discordapp.com/attachments/428352401045716995/435671161465077761/unknown.png",
        "http://kfmmg.lantansia.com/kfmmg/KFMMGServer?seed=558&text=ZTzTopia&fontSize=40&whiteBg=false&shuffle=true&logoStyle=true&fixedRatio=2.5",
        "https://cdn.discordapp.com/attachments/363655642772275200/434583708197060610/file.jpg",
        "https://cdn.discordapp.com/avatars/428181503374131202/5fb32c80b6ad76165ae5804cb138be6b.png?size=256",
        "https://cdn.discordapp.com/attachments/132632676225122304/435779741895884810/DUuSh.jpg",
        "https://i.imgur.com/aMFEU4a.png",
        "https://cdn.discordapp.com/attachments/132632676225122304/435780240241983509/DNjWmVTVoAY9zFb.jpg",
        "https://i.redd.it/0574uxy4jes01.jpg",
        "https://i.redd.it/ul6lyyqaqes01.jpg",
        "https://cdn.discordapp.com/attachments/132632676225122304/435780853818327041/ewwwwwww.JPG",
        "https://cdn.discordapp.com/attachments/132632676225122304/435781003689066517/pyramid_911.png",
        "https://sp.yimg.com/ib/th?id=OIP.6KFaEJs5CLWaHZqp3M0nWQHaFJ&pid=15.1&rs=1&c=1&qlt=95&w=148&h=103",
        "https://id.images.search.yahoo.com/images/view;_ylt=AwrxhXLw6tVankQAxY33RQx.;_ylu=X3oDMTByYmJwODBkBGNvbG8Dc2czBHBvcwMxBHZ0aWQDBHNlYwNzYw--?p=meme&back=https%3A%2F%2Fid.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3Dmeme%26type%3Dwbf_ansft_18_15_ssg0117%26hspart%3Diry%26hsimp%3Dyhs-fullyhosted_003%26param1%3D1%26param2%3Df%253D4%2526b%253DFirefox%2526cc%253Did%2526pa%253Dwincy%2526cd%253D2XzuyEtN2Y1L1Qzu0FtDyBzyyDzyyE0C0FzytD0Fzz0BtCyDtN0D0Tzu0StBtBzyyCtN1L2XzuyEtFtByEtFtDtFyBtDtN1L1CzutN1L1G1B1V1N2Y1L1Qzu2SyEyDzytCzy0AyByDtGtA0BtCyCtG0E0BzytDtGtAzztDtCtGzz0F0CyCtC0CyCtByC0A0EtA2QtN1M1F1B2Z1V1N2Y1L1Qzu2S1TtA1QyBzy1OyC1OtGtByD1PyBtGyE1TtDzytG1SyCtAtDtGzz1S1Ozyzz1TtD1O1R1RtDtD2QtN0A0LzuyEtN1B2Z1V1T1S1NzutCyBtDzztCtN1Q2Z1B1P1RzutCyDtBtAzzyEzzzzyEyE%2526cr%253D368681476%2526a%253Dwbf_ansft_18_15_ssg0117%2526os_ver%253D10.0%2526os%253DWindows%252B10%252BPro%26ei%3DUTF-8&no=1&fr=yhs-iry-fullyhosted_003&h=103.3&w=118.3&imgurl=memecreator.org%2Fstatic%2Fimages%2Fmemes%2F3658708.jpg&rurl=http%3A%2F%2Fmemecreator.org%2Fmeme%2Fswag-tapi-mirip-fag-young-lex&size=48KB&name=Meme+Creator+-+swag+tapi+mirip+fag+%26quot%3Byoung+lex%26quot%3B+Meme+...&tt=Meme+Creator+-+swag+tapi+mirip+fag+%26quot%3Byoung+lex%26quot%3B+Meme+...&sigr=11phhp6o7&sigi=11fi7suvi&sigb=1k0uhuo8j&sign=121bpncdb&sigt=121bpncdb&hspart=iry&hsimp=yhs-fullyhosted_003",
        "https://tse4.mm.bing.net/th?id=OIP.h1GFq3nR7gxl7TZiMBl3YQHaHo&pid=15.1&P=0&w=300&h=300",
        "https://tse2.mm.bing.net/th?id=OIP.YmC6xsf3YwJi_OxftG-jgQEsDe&pid=15.1&P=0&w=241&h=179",
        "https://tse1.mm.bing.net/th?id=OIP.1PA3dahOP87WW6JxFKvhJwHaGf&pid=15.1&P=0&w=204&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.MwCw3VuVGVZEgkwU_a2izgHaHb&pid=15.1&P=0&w=300&h=300",
        "https://id.images.search.yahoo.com/images/view;_ylt=AwrwJQ1f69VaQxsAS9UeHYpQ;_ylu=X3oDMTIzNTZmMmUxBHNlYwNzcgRzbGsDaW1nBG9pZANlOTQ5MTRiNDAyZjExYWE3NzE0ZWExMTE5MGNiYmU2MARncG9zAzU1BGl0A2Jpbmc-?.origin=&back=https%3A%2F%2Fid.images.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3DMeme%26fr%3Dyhs-iry-fullyhosted_003%26hsimp%3Dyhs-fullyhosted_003%26hspart%3Diry%26tab%3Dorganic%26ri%3D55&w=333&h=500&imgurl=memecrunch.com%2Fmeme%2FQOPT%2Fgayyyy%2Fimage.png&rurl=http%3A%2F%2Fmemecrunch.com%2Fmeme%2Fqopt%2Fgayyyy&size=253.2KB&name=Gayyyy&p=Meme&oid=e94914b402f11aa7714ea11190cbbe60&fr2=&fr=yhs-iry-fullyhosted_003&tt=Gayyyy&b=0&ni=21&no=55&ts=&tab=organic&sigr=1163cccj8&sigb=1466o12n7&sigi=119io9hf5&sigt=1066417o3&sign=1066417o3&.crumb=dWtEOcus0Ei&fr=yhs-iry-fullyhosted_003&hsimp=yhs-fullyhosted_003&hspart=iry",
        "https://tse2.mm.bing.net/th?id=OIP.6z-6pVBaRKZyXbRx7GJMlgHaHa&pid=15.1&P=0&w=300&h=300",
        "https://tse3.mm.bing.net/th?id=OIP.AAdbDbApNsDskp1Zf1Iy0AHaIK&pid=15.1&P=0&w=300&h=300",
        "https://tse3.mm.bing.net/th?id=OIP.tfRg6uWQm29FTvVTCFMLMAEFDv&pid=15.1&P=0&w=168&h=155",
        "https://id.images.search.yahoo.com/images/view;_ylt=AwrwS22P69VahlgAOBweHYpQ;_ylu=X3oDMTIzZXB1MDhyBHNlYwNzcgRzbGsDaW1nBG9pZAM1YjA2ZmFiZDgyODgxZThlN2Y3MDYyNWMzYTBkNjY2ZARncG9zAzg5BGl0A2Jpbmc-?.origin=&back=https%3A%2F%2Fid.images.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3DMeme%26fr%3Dyhs-iry-fullyhosted_003%26hsimp%3Dyhs-fullyhosted_003%26hspart%3Diry%26nost%3D1%26tab%3Dorganic%26ri%3D89&w=900&h=900&imgurl=i2.wp.com%2Fmemecollection.net%2Fwp-content%2Fuploads%2F2016%2F02%2F5696006b-brian-is-our-best-mechanic.jpeg%3Fw%3D900&rurl=http%3A%2F%2Fmemecollection.net%2Fbrian-is-our-best-mechanic%2F&size=116.1KB&name=Brian+is+our+best+mechanic+-+%3Cb%3EMeme%3C%2Fb%3E+Collection&p=Meme&oid=5b06fabd82881e8e7f70625c3a0d666d&fr2=&fr=yhs-iry-fullyhosted_003&tt=Brian+is+our+best+mechanic+-+%3Cb%3EMeme%3C%2Fb%3E+Collection&b=61&ni=108&no=89&ts=&tab=organic&sigr=11l8ufdg3&sigb=14d9k2ecp&sigi=1369e02s4&sigt=11jrf9s13&sign=11jrf9s13&.crumb=dWtEOcus0Ei&fr=yhs-iry-fullyhosted_003&hsimp=yhs-fullyhosted_003&hspart=iry",
        "https://id.images.search.yahoo.com/images/view;_ylt=AwrwJTSQ69Va1gEAklgeHYpQ;_ylu=X3oDMTI0Z3Nrb2NiBHNlYwNzcgRzbGsDaW1nBG9pZANlMzMxMWViYmI2MTZlMThjMDU3MTFiMjQxNjM2OTdhMgRncG9zAzE0MgRpdANiaW5n?.origin=&back=https%3A%2F%2Fid.images.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3DMeme%26fr%3Dyhs-iry-fullyhosted_003%26hsimp%3Dyhs-fullyhosted_003%26hspart%3Diry%26nost%3D1%26tab%3Dorganic%26ri%3D142&w=1070&h=1070&imgurl=i.ytimg.com%2Fvi%2F2l5x09tTXfU%2Fmaxresdefault.jpg&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2l5x09tTXfU&size=75.6KB&name=Flappy+Bird+%3Cb%3EMeme%3C%2Fb%3E+-+YouTube&p=Meme&oid=e3311ebbb616e18c05711b24163697a2&fr2=&fr=yhs-iry-fullyhosted_003&tt=Flappy+Bird+%3Cb%3EMeme%3C%2Fb%3E+-+YouTube&b=121&ni=108&no=142&ts=&tab=organic&sigr=11bcge8a8&sigb=14enj25b2&sigi=11cb9149o&sigt=111tlq1st&sign=111tlq1st&.crumb=dWtEOcus0Ei&fr=yhs-iry-fullyhosted_003&hsimp=yhs-fullyhosted_003&hspart=iry",
        "https://tse3.mm.bing.net/th?id=OIP.TocX2jEB3XET5Px4DgiYdQHaE8&pid=15.1&P=0&w=250&h=168",
        "https://tse3.mm.bing.net/th?id=OIP.Lyd944cDh9WvU_geSlL4vwHaEI&pid=15.1&P=0&w=294&h=165",
        "https://id.images.search.yahoo.com/images/view;_ylt=Awrxhdf369VauHUAVbMeHYpQ;_ylu=X3oDMTI0OW9xamc1BHNlYwNzcgRzbGsDaW1nBG9pZAMxYjdlZmZhNTA1ZWYyZjc5NjliNjg3NTA0ZTAwNTcyYwRncG9zAzE4OARpdANiaW5n?.origin=&back=https%3A%2F%2Fid.images.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3DMeme%26fr%3Dyhs-iry-fullyhosted_003%26hsimp%3Dyhs-fullyhosted_003%26hspart%3Diry%26nost%3D1%26tab%3Dorganic%26ri%3D188&w=500&h=500&imgurl=www.memebucket.com%2Fmb%2F2012%2F08%2FCloning-Invented-351.png&rurl=http%3A%2F%2Fwww.memebucket.com%2Fcloning-invented%2F&size=30.1KB&name=Cloning+Invented+-+Create+Your+Own+%3Cb%3EMeme%3C%2Fb%3E&p=Meme&oid=1b7effa505ef2f7969b687504e00572c&fr2=&fr=yhs-iry-fullyhosted_003&tt=Cloning+Invented+-+Create+Your+Own+%3Cb%3EMeme%3C%2Fb%3E&b=181&ni=288&no=188&ts=&tab=organic&sigr=11bk8dqd6&sigb=14ehqb1ak&sigi=11m4r4lm0&sigt=11ev97teo&sign=11ev97teo&.crumb=dWtEOcus0Ei&fr=yhs-iry-fullyhosted_003&hsimp=yhs-fullyhosted_003&hspart=iry",
        "https://tse4.mm.bing.net/th?id=OIP.xCOjc04MymSZ5BWQLdpySAHaGZ&pid=15.1&P=0&w=192&h=167",
        "https://tse4.mm.bing.net/th?id=OIP.Q37HJFBSHzntS5dQF4dtIAEsEq&pid=15.1&P=0&w=151&h=152",
        "https://tse3.mm.bing.net/th?id=OIP.GTU0UepU6r55w2i-mKhmlgHaGt&pid=15.1&P=0&w=166&h=151",
        "https://memegen.link/buzz/What-The/FUCKKKKKKK.jpg",
        "https://i.redd.it/kbty5tti7ms01.jpg",
        "https://media1.giphy.com/media/yXmgfgyW2PRPa/giphy.gif",
        "https://cdn.discordapp.com/attachments/132632676225122304/436135041618411521/1kDK.jpg",
        "https://memegen.link/buzz/What-The/Omg-Small-Dick.jpg",
        "https://i.redd.it/vfyohuy3vms01.png",
        "https://cdn.discordapp.com/attachments/132632676225122304/436136074201530378/DZh_w7-X4AAXjUj.jpg",
        "https://media1.giphy.com/media/j3e5Hnfu20NHO/giphy.gif",
        "https://i.redd.it/z52c6wb56is01.png",
        //Growtopia
        "https://memegenerator.net/img/instances/300x300/71500227/keep-calm-and-play-growtopia.jpg",
        "https://memegenerator.net/img/instances/300x300/81324348/found-this-game-onlineit-was-free-something-tells-me-i-am-pro-already-d.jpg",
        "https://memegenerator.net/img/instances/300x300/68202081/growtopia-punch-build-grow-dont-get-scammed-farm-for-hours-dont-be-a-noob-disconnect-in-the-middle-o.jpg",
        "https://memegenerator.net/img/instances/81719149/growtopia-casino-rich-quit.jpg",
        "https://memegenerator.net/img/instances/81719153/growtopia-scam-casino-hacker.jpg",
        //NOPE
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ];

        let meme = new Discord.RichEmbed()
            .setColor(msg.guild.me.displayColor)
            .setImage(predictions[Math.floor(Math.random() * (predictions.length - 0))])
            .setFooter(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL)
            .setTimestamp();
            
        msg.channel.send({ embed: meme });
}

module.exports.help = {
    name: "meme",
    type: "Fun",
    description: "Generates a random memes in the database.",
    format: "`meme`",
    require: "None."
}
