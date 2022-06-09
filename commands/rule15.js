const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule1 = new Discord.MessageEmbed()
    .setTitle('Rule #15:')
    .setDescription('You cannot annoy others in VCs with mic spamming or voice changers.')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule1)
}