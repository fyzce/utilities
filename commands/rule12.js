const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule1 = new Discord.MessageEmbed()
    .setTitle('Rule #12:')
    .setDescription('You cannot have symbols in your name (including invisible names).Characters and symbols must be typeable on a standard English QWERTY keyboard')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule1)
}