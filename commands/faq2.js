const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var faq1 = new Discord.MessageEmbed()
    .setTitle('FAQ 2: How to get the **Staff of the Month** role?')
    .setDescription('To get the Mod of the Month role you need to be a Moderator and need to be the best performing Moderator in the past Month.')
    .setFooter('Clear Your Doughts before the Warn Does!')
    .setTimestamp();
    msg.channel.send(faq1)
}