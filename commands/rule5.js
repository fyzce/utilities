const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule5 = new Discord.MessageEmbed()
    .setTitle('Rule #5:')
    .setDescription('Do not harass other users or be toxic, such as by arguing or insulting others.')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule5)
}