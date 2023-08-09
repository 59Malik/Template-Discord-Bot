const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor('#EF1919')
	.setTitle('📑・Liste des commandes.')
	.setURL('https://discord.gg/83BxQQvbcw')
	.setAuthor(config.Speudo, config.Image, 'https://discord.gg/83BxQQvbcw')
	.setThumbnail(config.Image)
	.addFields(
    { name: '.help', value: '(Affiche les fonctionalité du bot.)' },
    { name: '.link', value: '(Pour voir les liens me concernant.)' },
    { name: '.info', value: '(Information concernant le bot.)' },
    { name: '.ban', value: '(Information concernant le bot.)' },
    { name: '.kick', value: '(Information concernant le bot.)' },


    )
	
	.setTimestamp()
	.setFooter(config.Speudo, config.Image);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"help"
}