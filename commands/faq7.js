const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var faq1 = new Discord.MessageEmbed()
    .setTitle('FAQ 7: How do i Verify my bot in this Server?')
    .setDescription('To verify Simply DM our NightMare\'s Utilties or DM the Owner to Verify the Bot.')
    .setFooter('Clear Your Doughts before the Warn Does!')
    .setTimestamp();
    msg.channel.send(faq1)
}