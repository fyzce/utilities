const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var faq1 = new Discord.MessageEmbed()
    .setTitle('FAQ 11: How do i Verify into the Whole Server?')
    .setDescription('To Verify see the whole detailed guide at <#> Channel') //ADD YOUR CHANNEL NAME HERE
    .setFooter('Clear Your Doughts before the Warn Does!')
    .setTimestamp();
    msg.channel.send(faq1)
}