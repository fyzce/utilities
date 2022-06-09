const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var faq1 = new Discord.MessageEmbed()
    .setTitle('FAQ 12: How do i Send a ModMail in the Server?')
    .setDescription('To Send a ModMail you need to DM our Sound\'s Utilties and Send a Detailed ModMail. You Cannot Send Another Modmail.We will send you Another Modmail Regarding all things you Talked about!')
    .setFooter('Clear Your Doughts before the Warn Does!')
    .setTimestamp();
    msg.channel.send(faq1)
}