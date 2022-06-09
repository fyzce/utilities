const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var faq1 = new Discord.MessageEmbed()
    .setTitle('FAQ 1: How to Become a Moderator?')
    .setDescription('To become a Moderator you need to be level 10+ and must have experience in a 50+ Members Server.')
    .setFooter('Clear Your Doughts before the Warn Does!')
    .setTimestamp();
    msg.channel.send(faq1)
}