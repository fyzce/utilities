const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var faq1 = new Discord.MessageEmbed()
    .setTitle('FAQ 8: How do i invite Sound\'s Utilties  in my Server?')
    .setDescription('Unfortunately Sound\'s Utilities is a Privately owned Bot and isn\'t available for inviting in your servers.But you can use bots such as MEE6 or Dyno.')
    .setFooter('Clear Your Doughts before the Warn Does!')
    .setTimestamp();
    msg.channel.send(faq1)
}