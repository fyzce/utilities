const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule6 = new Discord.MessageEmbed()
    .setTitle('Rule #6:')
    .setDescription('Don\'t cause spam by posting repeated text or large blocks of text.')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule6)
}