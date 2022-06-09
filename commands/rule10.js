const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule1 = new Discord.MessageEmbed()
    .setTitle('Rule #10:')
    .setDescription('Only play songs in the music voice channel; you aren\'t allowed to play normal videos.Songs with swearing are only allowed if it\'s not excessive')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule1)
}