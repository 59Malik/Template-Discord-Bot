const Discord = require("discord.js");
const config = require("../config.json");
var prefix = config.prefix;

function wait(ms){
    var start = new Date().getTime()
    var end = start
    while(end < start + ms) {end = new Date().getTime();}
}

module.exports.run = async (client, message, args) => {
    message.delete()
    var user = message.mentions.users.first();
    var reason = args.join(" ").slice(22);

    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {return message.channel.send("Vous n'avez pas la permission de faire cette commande !"); }
    if(!user) {const fail = await message.channel.send("Vous n'avez pas mentionner la personne a ban"); wait(3000); fail.delete(); return}
    if(!reason) {const fail = await message.channel.send("Vous n'avez pas fait la raison"); wait(3000); fail.delete(); return}

    const kickchannel = new Discord.MessageEmbed()
    .setAuthor('L\'utilisateur a été Ban', 'https://emoji.gg/assets/emoji/8501_BanHam.png')
    .setColor(config.embedColor)
    .addField('Raison', `${reason}`, true)
    .setFooter(`Ban de ${message.author.tag}`, message.author.displayAvatarURL());

    message.channel.send(kickchannel)

    message.guild.member(user).ban(reason)
};

module.exports.help = {
    name: 'ban'
};