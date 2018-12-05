const Discord = require('discord.js');
const client = new Discord.Client();
const jsonfile = require('jsonfile');

function updateAUTOROLE(message,autorole){
  var fs = require('fs');
  fs.exists("autorole.json",(exist)=> {
    if (!exist) {cb(false);return;}
    console.log(exist);
    jsonfile.readFile("autorole.json", function(err,obj){
      if (err) {cb(false); return};
      obj[message.guild.id] = autorole.id;
      jsonfile.writeFile("autorole.json",obj,(err) => {
        if (err) {cb(false); return};
        message.channel.send("**Giren kullanıcılara verilecek otomatik rol ** `" + autorole.name + "` **Olarak Belirlendi!**").catch()
      })
    })
  })
}

exports.run = (client, message, args) => {
 console.log("Otorol kullanıldı:"+ message.author.username + message.author.id)
  if (args[0]) {
    let autoRoleString = args[0]
    let autorole = message.guild.roles.find('name',autoRoleString);
    if (autorole === undefined) {
      message.channel.send("**HATA: ** Rol Bulunamadı!").catch()
      return
    }
    updateAUTOROLE(message,autorole)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['oto-rol'],
  permLevel: 3
};

exports.help = {
  name: 'oto-rol-ayarla',
  description: 'Oto verilecek Rolü ayarlar',
  usage: 'oto-rol [rol adı]'
};