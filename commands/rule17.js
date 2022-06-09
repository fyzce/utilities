const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule1 = new Discord.MessageEmbed()
    .setTitle('Rule #17:')
    .setDescription('No interfering with moderator\'s duties.Don\'t argue with them while they actively moderate.Don\'t troll with fake evidence.Don\'t misinform other users with serious questions on purpose')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule1)
}