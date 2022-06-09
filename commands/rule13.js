const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule1 = new Discord.MessageEmbed()
    .setTitle('Rule #13:')
    .setDescription('Don\'t ask for personal information or distribute any personal information without consent.')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule1)
}