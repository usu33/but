const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new Discord.RichEmbed()

    .setTitle(' ')
    .setDescription(`
    Quer me adicionar em seu servidor? 
    
    **Meu convite**:

    **[Convite](https://discord.com/oauth2/authorize?=&client_id=704875795574816858&scope=bot&permissions=8)**
    `)
    .setFooter("Comando Requisitado por: " + message.author.username, message.author.avatarURL);

    message.channel.send(embed)
}

