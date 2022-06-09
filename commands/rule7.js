const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule1 = new Discord.MessageEmbed()
    .setTitle('Rule #7:')
    .setDescription('Please make sure all topics are appropriate for children.Nothing can be shared that is NSFW, is relating to substance abuse, is disturbing or that displays a grave nature')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule1)
}