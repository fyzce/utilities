const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule4 = new Discord.MessageEmbed()
    .setTitle('Rule #4:')
    .setDescription('Please keep your topics in the correct channel.')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule4)
}