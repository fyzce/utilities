const Discord = require('discord.js');
const ms = require('ms');

exports.run = async (client, msg, args) => {
    var emojiGuild = client.guilds.cache.find(guild => guild.name === '')//ADD YOUR CHANNEL NAME HERE
    var yes = emojiGuild.emojis.cache.find(emoji => emoji.name === 'yes') //must have yes emoji
    var target = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    if(!target) return msg.reply('You need to mention a user to unmute')
var targetID = msg.guild.members.cache.get(target.id)


var muteRole = msg.guild.roles.cache.find(role => role.name === 'mute');

targetID.roles.remove(muteRole)


var confirmation = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`${yes} <@${targetID.user.id}> has been succesfully unmuted by ${msg.author}`)
msg.channel.send(confirmation);

}