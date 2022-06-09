const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule1 = new Discord.MessageEmbed()
    .setTitle('Rule #16:')
    .setDescription('You aren\'t allowed to minimod in the server.This means acting as a moderator by threatening that people will be punished.If you have a problem please DM a Active Moderator,Staff or Admin')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule1)
}