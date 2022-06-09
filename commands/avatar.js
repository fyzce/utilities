const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    msg.channel.send(msg.author.displayAvatarURL)
}

