const Discord = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
message.delete()
const botinfoEmbed = new Discord.MessageEmbed()
      .setColor('#EF1919')
      .setTitle('📈・Information concernant le bot !')
      .setURL('https://discord.gg/83BxQQvbcw')
      .setAuthor(config.Speudo, config.Image, 'https://discord.gg/83BxQQvbcw')
      .setThumbnail(config.Image)
      .addFields(
          { name: '\u200B', value: '\u200B' },
          { name: '✨ | Création :', value: '06/08/2023', inline: true },
          { name: '⌨ | Développeur :', value: '59_Malik', inline: true },
      )
      .addField('Présence :', `${client.users.cache.size} serveurs`,  true)
      .setTimestamp()
      .setFooter(config.Speudo, config.Image);
  
  message.channel.send(botinfoEmbed);

}

module.exports.help = {
    name:"info"
}