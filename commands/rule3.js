const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule3 = new Discord.MessageEmbed()
    .setTitle('Rule #3:')
    .setDescription('Do not post malicious links or files in the server that can steal information.')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule3)
}