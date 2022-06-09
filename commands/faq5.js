const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var faq1 = new Discord.MessageEmbed()
    .setTitle('FAQ 5: How do i Support this Server?')
    .setDescription('To Support this Server you can Either Boost the Server or for free you can bump our server in bump using \`!d bump\`.')
    .setFooter('Clear Your Doughts before the Warn Does!')
    .setTimestamp();
    msg.channel.send(faq1)
}