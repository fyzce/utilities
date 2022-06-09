const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule2 = new Discord.MessageEmbed()
    .setTitle('Rule #2:')
    .setDescription('Advertising isn\'t allowed anywhere except within the designated advertising channels. DM advertising is also not allowed for anyone, this includes saying "DM me for free nitro" or other items in chats')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule2)
}