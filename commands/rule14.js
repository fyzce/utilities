const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule1 = new Discord.MessageEmbed()
    .setTitle('Rule #14:')
    .setDescription('You aren\'t allowed to misuse spoilers by giving the appearance of swearing or something inappropriate.Using spoilers around a word that may look like the N word will result in a ban')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule1)
}