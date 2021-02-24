
const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
	    if (message.author.id !== "666182732640026634") 
    if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("❌ Você não tem permissão! seu cachorro não tente!")
            message.delete('')
              let reason = args.slice(0).join(' ');
          if (reason.length < 1) return message.reply('Use m!anunciar (Oque deseja anunciar!)');
          message.channel.send(':white_check_mark: Anunciado com sucesso!')
          message.channel.send(``)
              var embed = new Discord.RichEmbed()
              .setTitle(' ')
              .setDescription(args.join(" "))        
               message.guild.members.map(users=>users.send(embed));
      };
    
      module.exports.help = {
        name: "anunciarall",
        usage: ``,
        information: ""
      }
