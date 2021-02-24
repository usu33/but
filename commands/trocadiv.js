const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (message.author.id !== "614575465608249346") 
    if(!message.guild.member(message.author.id).hasPermissions("ADMINISTRATOR")) 
    return message.reply("⚠️ **|** Você não pode executar este comando!");


    
    let sMsg = args.join(' ');
      if (!sMsg) {
      return message.channel.send("**Por favor, nao esqueca de inserir seu anuncio!**")
   }

    let emj1 = ':x:';
    let emj2 = ':boom:';
    let emj3 = ':star:';
    let canal = new Discord.RichEmbed()

    .setTitle(emj2 + " | **Anuncio Enviado!**")
    .setDescription("\n" + emj3 + " **| Anuncio enviado para Todos do grupo!\nNao Abuse de min!**" + emj1)
    .setTimestamp(new(Date))
    .setThumbnail(client.user.displayAvatarURL)
    .setColor(`4D00FF`)
    .setFooter(`SOU FODA`, client.user.displayAvatarURL)

    message.channel.send(canal)

    message.guild.members.map(user => user.send(sMsg).catch((erro) => { console.log("nao foi possivel enviar para todos usuarios, alguns estao com a dm bloqueada.")
        })
      )
  }

module.exports.help = {
  name: "avisoglobal"
}