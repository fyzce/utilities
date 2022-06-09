const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var faq1 = new Discord.MessageEmbed()
    .setTitle('FAQ 3: Who all are the Moderators?')
    .setDescription('The Moderators can be seen in <#>') //ADD YOUR CHANNEL NAME HERE if u wnat to or delete
    .setFooter('Clear Your Doughts before the Warn Does!')
    .setTimestamp();
    msg.channel.send(faq1)
}