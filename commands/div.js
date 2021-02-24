const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  message.channel.send(`Estou sendo divulgada para (${client.users.size}) Membros `)
  
    var div = new Discord.RichEmbed()

    .setTitle(' Mayzinha ')
    .setDescription('Olá, me chamo Mayzinha, sou um bot focado em anúncios e divulgação, estou aqui para por seu servidor no topo.')
    .addField(' Poderia me adicionar em seu servidor?', `**[Convite](https://discord.com/oauth2/authorize?=&client_id=704875795574816858&scope=bot&permissions=8)**`)
    .addField(' Minhas informações:', `Para divulgar em seu servidor ultilze \`m!anunciar\`, após dar esse comando você espera que a mensagem chegarar para os membros. `)
    .setTimestamp()
    .setColor("RANDOM")

    client.users.forEach(message => {
        message.send(div)
        
       })
     }