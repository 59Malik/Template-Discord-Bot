const Discord = require('discord.js')
const config = require('../config.json')
var prefix = config.prefix;
var speudo = config.speudo;

module.exports = async (client, message) => {
    console.log(`${client.user.username} est en ligne !`);

    setInterval(function() {
        let statusstyle = [
            `${prefix}help`,
            `${client.users.cache.size} users`
        ]
        
        let status = statusstyle[Math.floor(Math.random() * statusstyle.length)];
        client.user.setPresence({ activity: { name: status}, status: 'online' })
    }, 5000)
};