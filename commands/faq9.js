const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var faq1 = new Discord.MessageEmbed()
    .setTitle('FAQ 9: Can i use alts in this server?')
    .setDescription('Yes, you can use alts in this server,But it must not be used for winning giveaways as it gives people a unfair advantage.')
    .setFooter('Clear Your Doughts before the Warn Does!')
    .setTimestamp();
    msg.channel.send(faq1)
}