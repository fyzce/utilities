const Discord = require('discord.js')
const snipe = new Discord.Collection()
const snipes = new Discord.Collection()
exports.run = async(client,msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply("Only staff members are allowed to use snipe command for bypassable reasons")


    client.on('messageDelete', msg => {
        snipes.set(msg.channel.id, msg)
    })
    
let sniped = snipes.get(msg.channel.id)
if(!sniped) return msg.channel.send("There's nothing to snipe!")

const snipeEmbed = new Discord.MessageEmbed()
.setAuthor(`Message By ${sniped.author.username}`, sniped.author.displayAvatarURL())
.setColor("PURPLE")
.setDescription(sniped.content)
.setFooter('Get Sniped LOL')
.setTimestamp();

msg.channel.send(snipeEmbed)
}