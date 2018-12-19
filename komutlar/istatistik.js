const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const embedistatistik = new Discord.RichEmbed()
  .setTitle("**Plax Bot** İstatistikler")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Bellek kullanımı**", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
  .addField("**» Çalışma süresi**", `${duration}`)
  .addField("**» Kullanıcılar**", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`)
  .addField("**» Sunucular**", `${client.guilds.size.toLocaleString()}`)
  .addField("**» Kanallar**", `${client.channels.size.toLocaleString()}`)
  .addField("**» Discord.JS sürüm**", `v${Discord.version}`)
  .addField("**» Ping**", `${client.ping}`)
  .setFooter('PlaxBot Güncel Sürüm [ BETA v0.2.5 ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `istatisik`);
    }
  }
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
