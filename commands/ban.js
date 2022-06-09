const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('You do not have Permission to Use this Command')
    
    var user = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    if(!user) return msg.reply('You did not Mention a User for me to Punish!');
    var member;
    try {
        member = await msg.guild.members.fetch(user)
    } catch(err) {
        member = null;
    }
    if(member){
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You cannot ban a Moderator!');
    }

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('I cannot Punish the User Without a Reason!')
    var channel = msg.guild.channels.cache.find(c => c.id === '');//ADD YOUR log hcannel id here
    var log = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("A Member Was Banned")
    .setDescription("Banning Information Displayed Below:")
    .addField("Reason:", `\`${reason}\``)
    channel.send(log)

    var userLog = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("You were Banned by Sounds Utilities")
    .addField("Server:", 'Sound\'s World') //delete Sound world and write ur cannel name
    .addField("Reason:", `${reason}`)
    .addField("Ban Appeal Server:", '')//ADD THIS IF YOU WANT TO OR DONT ADD
    try {
        await user.send(userLog);
    } catch(err) {
        console.warn(err);
    }
    msg.guild.members.ban(user);
    var confir = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`${user} has been Banned by ${msg.author}`)
    msg.channel.send(confir);
    msg.delete();
}