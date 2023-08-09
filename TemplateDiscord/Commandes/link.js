const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {

const cmdEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle('🔗・Voici les liens me concernant.')
	.setURL('https://discord.gg/83BxQQvbcw')
	.setAuthor(config.Speudo, config.Image, 'https://discord.gg/83BxQQvbcw')
	.setThumbnail(config.Image)
	.addFields(
    { name: 'Tiktok', value: config.Tiktok },
    { name: 'Insta', value: config.Insta },
    )
	
	.setTimestamp()
	.setFooter(config.Speudo, config.Image);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"link"
}