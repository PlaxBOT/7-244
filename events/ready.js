const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Tüm komutlar çalıştırılıyor!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı! BOT aktif!`);
  client.user.setStatus("online");
   var oyun = [
        "Prefiximiz : p!",
        "Davet Etmeyi Unutamayın - p!davet",
        "` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Kullanıcıya hizmet veriyorum",
        `${client.guilds.size} sunucuya hizmet veriyorum.`

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/joeartv");
        }, 2 * 2500);
}
