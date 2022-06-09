const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule1 = new Discord.MessageEmbed()
    .setTitle('Rule #21:')
    .setDescription('1 Person cant post more than 3 arts a day in <#>')//ADD YOUR CHANNEL NAME HERE IF YOU WANT TO
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule1)
}