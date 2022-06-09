const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('You do not have Permission to Use this Command')
    
    var user = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    if(!user) return msg.reply('You did not Mention a User for me to Punish!');
    var member;
    try {
        member = await msg.guild.members.fetch(user)
    } catch(err) {
        member = null;
    }
    if(member){
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You cannot kick a Moderator!');
    }

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('I cannot Punish the User Without a Reason!')
    var channel = msg.guild.channels.cache.find(c => c.id === ''); //ADD YOUR LOG CHANNEL ID HERE
    var log = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("A Member Was Kicked")
    .addField("Reason:", `\`${reason}\``)
    channel.send(log)

    var userLog = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("You were Kicked by Sounds Utilities")
    .addField("Server:", 'Sound\'s World')
    .addField("Reason:", `${reason}`)
    try {
        await user.send(userLog);
    } catch(err) {
        console.warn(err);
    }
    member.kick(reason)
    var confir = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`${user} has been kicked by ${msg.author}`)
    msg.channel.send(confir);
    msg.delete();
}