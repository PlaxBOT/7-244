const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Eğlence Komutları**", `p!atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir. \np!starwars = StarWars (Pixel Formatında) Filmini Gösterir. \np!banned = Dene ve Gör! \np!kahkaha = Kahkaha Atarsınız \np!herkesebendençay = Herkese Çay Alırsınız. \np!koş = Koşarsınız.\np!çayiç = Çay İçersiniz. \np!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \np!çayaşekerat = Çaya Şeker Atarsınız. \np!yumruk-at = Yumruk Atarsınız. \np!şanslısayım = Bot Sizin Şanslı Sayınızı Söyler.`)
  .addField("**» Kullanıcı Komutları**", `p!report = İstediğiniz Kullanıcıyı Reportlarsınız. \np!kısalt = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \np!yaz = Bota İsediğinizi Yazdırırsınız. \np!sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \np!sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \np!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \np!avatarım = Avatarınınızı Gösterir. `)
  .addField("**» Oyun Komutları**", `p!fortnite = İstediğiniz Kullanıcının İstatistiklerine Bakarsınız.`)
  .addField("**» Sunucu Yetkilisi Komutları**", `p!ban = İstediğiniz Kişiyi Sunucudan Banlar. \np!kick  = İstediğiniz Kişiyi Sunucudan Atar. \np!unban = İstediğiniz Kişinin Yasağını Açar. \np!sustur = İstediğiniz Kişiyi Susturur. \np!sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \np!oylama = Oylama Açar. \np!duyuru = Güzel Bir Duyuru Görünümü Sağlar. \np!sunucutanıt = Sunucunuzu tanıtır.`)
  .addField("**» Botun Ana Komutları**", "p!yardım = BOT Komutlarını Atar. \np!bilgi = BOT Kendisi Hakkında Bilgi Verir. \np!ping = BOT Gecikme Süresini Söyler. \np!davet = BOT Davet Linkini Atar. \np!istatistik = BOT İstatistiklerini Gösterir. \np!canlıdestek = Canlı destek talebi oluşturur. \np!destekgrup = Botun destek sunucusunun linkin atar. \np!ailemiz = Ailemizi gösterir.")
  .setFooter('PlaxBot Güncel Sürüm [ BETA v0.1.2 ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
