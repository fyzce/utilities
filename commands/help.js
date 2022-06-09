const Discord = require('discord.js')

exports.run = async(client, msg, args) => {
    var help = new Discord.MessageEmbed()
    .setTitle(`:mailbox_with_mail: Need Help? Here are All My Commands`)
    .setDescription('I am a Custom Coded bot By **NightMare#1458**')
    .addField(`MODERATION`, '\`ban\`, \`kick\`, \`mute\`, \`unmute\`, \`warn\`, \`warnings\`, \`checkwarn\`, \`clearwarn\`')
    .addField(`FUN`, '\`fact\`')
    .addField(`UTILITIES`, '\`lock\`, \`unlock\`, \`sm\`, \`slowmode\`, \`snipe\`, \`ping\`, \`purge\`, \`clear\`, \`moderate\`')
    .addField(`FAQ`, 'Type \`faq{faq no.}\` will get the faq.Example \`faq1\` will give the FAQ #1')
    .addField(`RULE`, 'Type \`rule{rule no.}\` will get the rule.Example \`rule1\` will give the Rule #1')
    msg.channel.send(help)
}