const Discord = require("discord.js"); 
const ms = require('ms');
 
 
exports.run = async(client, msg, args) => {
    var logs = msg.guild.channels.cache.find(c => c.id === '') //ADD YOUR log CHANNEL ID HERE
    
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return; 
 
    var target = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    if(!target) return msg.reply('Please Mention a User for me to Mute!')
 
    var muteRole = msg.guild.roles.cache.find(role => role.name === 'mute');
 
    var targetID = msg.guild.members.cache.get(target.id)
 
    if(!args[1]) {
        
        targetID.roles.add(muteRole)
        
        var confirmation = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`<@${targetID.user.id}> has been succesfully muted by ${msg.author} until you unmute them using the \`>unmute\` command!`)
        msg.channel.send(confirmation);
 
        var log = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('A Member was Muted')
        .setDescription('To unmute Them use The \`unmute\` Command!')
    logs.send(log);
 
    var userLog = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("You were Muted by NightMare Utilities")
    .addField("Server:", 'NightMare\'s World')

    
 
    try {
        await target.send(userLog);
    } catch(err) {
        console.warn(err);
    }
 
    
        return
    }
    
    targetID.roles.add(muteRole)
 
    
    var confirmation = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`<@${targetID.user.id}> has been succesfully muted by ${msg.author} for ${ms(ms(args[1]))}.`)
    msg.channel.send(confirmation);
 
    var logsound = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("A Member Was Muted")
    .setDescription("Muting Information Displayed Below:")
    .addField("Member Muted:", `<@${userID}> **|** \`${userID}\``)
    .addField("Mute Author:", `<@${authorID}> **|** \`${authorID}\``)
    .addField("Expires:", `\`ms(ms(args[1]))\``)
    logs.send(logsound)
 
    var embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("You were Muted by Sounds Utilities")
    .addField("Server:", 'Sound\'s World')
    .addField("Expires:", `\`ms(ms(args[1]))\``)
 
    try {
        await target.send(embed);
    } catch(err) {
        console.warn(err);
    }
 
    setTimeout(function () {
        var timeunmute = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription(`<@${targetID.user.id}> has been succesfully unmuted since their given mute-time is over`)
        msg.channel.send(timeunmute);
     
        targetID.roles.remove(muteRole)

    } , ms(args[1]));


}