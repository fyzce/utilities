const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule1 = new Discord.MessageEmbed()
    .setTitle('Rule #9:')
    .setDescription('Do not use alts maliciously.Don\'t join giveaways to give yourself an unfair advantage.Don\'t try to bypass a punishment given to your main account')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule1)
}