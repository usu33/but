const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  

  
    var div = new Discord.RichEmbed()
    .setTitle(' Mayzinha ')
    .setDescription('Olá, me chamo Ninfeta 2.0, sou um bot focado em anúncios e divulgação, estou aqui para por seu servidor no topo.')
    .addField(' Poderia me adicionar em seu servidor?', `**[Convite](https://discord.com/oauth2/authorize?=&client_id=704875795574816858&scope=bot&permissions=8)**`)
    .addField(' Minhas informações:', `Para divulgar em seu servidor ultilze \`m!anunciar\`, após dar esse comando você espera que a mensagem chegarar para os membros. `)
    .setTimestamp()
    .setColor("RANDOM")



   message.guild.members.map(users=>users.send(div));
};