const mongo = require('../mongo')
const Discord = require('discord.js')
const warnSchema = require('../schema/warnSchema')

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply("You do not have Permission to Run this Command")


    const punishmentID = args[0]
    if(!punishmentID) return msg.reply("Please Specify a Punishment ID to check!")

    await mongo().then(async (mongoose) => {
        try {

            const results = await warnSchema.findOne({
                punishmentIDE: [`${punishmentID}`]
            })

            if(results == null) {
                return msg.channel.send("Thats not a Valid ID!")
            }

            const { warningInfo } = results
            const member = msg.guild.members.cache.get(results.userID)
            const authorID = warningInfo[0]["authorID"]
            const time = warningInfo[0]["time"]
            const reason = warningInfo[0]["reason"]
            const userID = results.userID

            const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(`Warning Info for Punishment ID: \`${punishmentID}\``)
            .setDescription(`**Warn Auhor:** <@${authorID}>\n\n **Member Warned:** <@${userID}>\n\n **Time:** ${time}\n\n **Reason:** ${reason}\n\n\n`)
            .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 2048}))
            msg.channel.send(embed)
        } finally {
            mongoose.connection.close()
        }
    })
}