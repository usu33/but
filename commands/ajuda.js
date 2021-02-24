const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var ajuda = new Discord.RichEmbed()

    .setTitle('<a:oin:702617550005207100> COMANDOS ')
    .addField(`n!anunciar `, 'O bot vai anunciar uma mensagem pra todos do servidor')
    .addField(`n!div`, 'Ajude nosso bot a crescer')
    .addField(`n!divsv`, 'Vai divulgar o Nosso bot dentro de um chat caso queira parceria.')
    .addField(`n!servidores`, 'Vai te mostrar onde eu estou')
    .addField(`n!convite`, 'Vai mandar o link para me coloca em seu discord')
    .addField(`n!trocadiv`, 'Pra trocar div')

    message.channel.send(ajuda)
}