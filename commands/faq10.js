const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var faq1 = new Discord.MessageEmbed()
    .setTitle('FAQ 10: How many warns to a Moderator results in a Demote?')
    .setDescription('2 warns to a Mod results in a demote.')
    .setFooter('Clear Your Doughts before the Warn Does!')
    .setTimestamp();
    msg.channel.send(faq1)
}