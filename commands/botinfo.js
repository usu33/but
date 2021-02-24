const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
let bicon = bot.user.displayAvatarURL;
let botembed = new Discord.RichEmbed()
.setDescription(`Informacões da ${bot.user.username} \n\n\nVersão do **BOT**: 2.0`)
.setColor("0x36393e")
.setThumbnail(bicon)
.addField("📃 Nome do bot", bot.user.username)
.addField("💻 Servidores conectados agora:", bot.guilds.size)
.addField("👑 Criador:", "<@614607911339032698>")
.addField("💈 Prefixo:","n!anunciar")
.addField("👤 Usuários conectados agora:", bot.users.size)
.addField("Meu convite:", `[INVITE](https://discord.com/oauth2/authorize?=&client_id=704875795574816858&scope=bot&permissions=8)`)

return message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}