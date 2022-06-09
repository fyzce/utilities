const Discord = require('discord.js')

exports.run = async(client, msg, args) =>  {
    let user = msg.mentions.users.first()

    if(!user) return msg.channel.send('Mention a user for me to dm')

    var dm = args.slice(1).join(" ")
   let holla = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`${dm}`)
if(!dm) return msg.channel.send("I can't DM an empty message")

try {
    await user.send(holla)
} catch (error) {
    return msg.channel.send('This user had their DMS closed i can\'t dm him/her')
}

msg.channel.send('DM successfully sent')
}