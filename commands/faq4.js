const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var faq1 = new Discord.MessageEmbed()
    .setTitle('FAQ 4: Why cant i speak in general?')
    .setDescription('If you cant speak in general you are probably muted due to breaking rules.View all rules in <#>')//ADD YOUR CHANNEL NAME HERE
    .setFooter('Clear Your Doughts before the Warn Does!')
    .setTimestamp();
    msg.channel.send(faq1)
}