const config = require('./config.json');
const Discord = require('discord.js')
const ms = require('ms');
const client = new Discord.Client();
const Fs = require('fs')



client.on('ready',  async() => {
    console.log('Bot is now Online!')
    const statusArray = ['VALORANT, PLAYING', `Sound\'s World, WATCHING` , '#general, WATCHING' , 'Spotify, LISTENING TO', `your Modmails, WATCHING` , 'Soundsmc, WATCHING', `everyone, WATCHING` , 'COVID-19, WATCHING' , `100+ Users, WATCHING`]
    setInterval(() => {
    const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
    const status = random[0]
    const mode = random[1]
    client.user.setActivity(status, {type: mode})
    }, 16000)
    
}) 

client.events = new Discord.Collection();
require('./handlers/event_handler')(client);

client.on('message', async(msg) => {
    if(msg.channel.type === "dm") {
        const cmd = `${config.prefix}modmail`
        if (msg.content === cmd) {
            const modmail = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Hello! Welcome to your modmail menu! Respond with the number that suits your purpose! Example: Typing `1` in dms would choose the category `Make a suggestion`')
            .setDescription(`This is the official modmail menu for Sound's World! Please make sure to not open modmail for no reason! Here are the options for the modmail:`)
            .addField('`#1 Make a Suggestion`', 'Suggest a feature for our discord server or youtube channel!')
            .addField('`#2 Report a user`', 'Report a user. Please make sure to include there username & tag with evidince!')
            .addField('`#3 Report a staff member`', `Report a staff member. Make sure to include the staff member's username and ID and what they did.`)
            .addField('`#4 Request a role`', 'Request a role from the server. Make sure that you give us the reason why you deserve it. Some examples of roles that you can earn are: Youtuber, etc. Make sure you meet the requirements for these roles. in the server.')
            .addField('`#5 Appeal a punishment`', 'Appeal a punishment such as a mute or ban. Make sure that you specify the punishment ID')
            .addField('`#6 Other`', 'Ask something that is not on this list!')
            .addField('Close', 'Close The Modmail!')
            .setTimestamp()
            
            try {
                return msg.author.send(modmail)
            }catch(err) {
                return console.log(err)
            }
        }
    	
	var modmailchannel = msg.client.channels.cache.find(c => c.id === '') //ADD YOUR CHANNEL ID HERE
	
        if(msg.content === '1') {
            return msg.author.send('You have chosen option 1. Please provide a message with all the info required for this modmail!')
        }
        if(msg.content === '2') {
            return msg.author.send('You have chosen option 2. Please provide a message with all the info required for this modmail!')
        }
        if(msg.content === '3') {
            return msg.author.send('You have chosen option 3. Please provide a message with all the info required for this modmail!')
        }
        if(msg.content === '4') {
            return msg.author.send('You have chosen option 4. Please provide a message with all the info required for this modmail!')
        }
        if(msg.content === '5') {
           return msg.author.send('You have chosen option 5. Please provide a message with all the info required for this modmail!')
        }
        if(msg.content === '6') {
            return msg.author.send('You have chosen option 6. Please provide a message with all the info required for this modmail!')
        }
        if(msg.content.toLowerCase() === 'close') {
            msg.author.send('Close the modmail.')
	    modmailchannel.send(`${msg.author.tag} closed the modmail.`)
	    return
        }
        
    if(msg.author.bot) return;
    var StaffEmbed = new Discord.MessageEmbed()
       .setTitle(msg.author.tag)
       .setColor('GREEN')
       .setDescription(msg.content)
       modmailchannel.send(StaffEmbed)
    }

    if(msg.content.length >= 300 && !msg.member.hasPermission('ADMINISTRATOR')) {
        var emojiGuild = client.guilds.cache.find(guild => guild.name === '')//ADD YOUR CHANNEL NAME HERE
            var animebonk = emojiGuild.emojis.cache.find(emoji => emoji.name === 'animebonk')
    msg.delete();
   return msg.reply(`${animebonk} You cannot send Bulk Messages in the Server!`)
     
    }

    if(msg.content === "!verify" && msg.channel.id === "") { //ADD YOUR VERIFY CHANNEL ID HERE
        msg.delete()
        const verified = msg.guild.roles.cache.find(r => r.name === "Verified")
        msg.member.roles.add(verified)
    }
    if(msg.channel.id === "" && msg.content !== "!verify") {
        return msg.delete()
    }

if(msg.mentions.users.size > 2 && !msg.member.hasPermission('MANAGE_MESSAGES')) {
    var emojiGuild = client.guilds.cache.find(guild => guild.name === '') //ADD YOUR CHANNEL NAME HERE
            var animebonk = emojiGuild.emojis.cache.find(emoji => emoji.name === 'animebonk')


msg.delete()
return msg.reply(`${animebonk} You cannot Mass Mention People in this Server!`)

}
 
    function isValidURL(string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
      };
      var testContent = msg.content;
      if(isValidURL(testContent) && msg.channel.id !== '' && !msg.member.hasPermission('ADMINISTRATOR')) { //ADD YOUR CHANNEL ID HERE
        var emojiGuild = client.guilds.cache.find(guild => guild.name === '') //ADD YOUR CHANNEL NAME HERE
        var animebonk = emojiGuild.emojis.cache.find(emoji => emoji.name === 'animebonk')
          msg.delete();
         return msg.reply(`${animebonk} You cannot Send Links in this Server`)
        }
        


      try {
        var mentionedUser = msg.mentions.users.first()
        var emojiGuild = client.guilds.cache.find(guild => guild.name === '')//ADD YOUR CHANNEL NAME HERE
            var animebonk = emojiGuild.emojis.cache.find(emoji => emoji.name === 'animebonk')

        if(mentionedUser.id === '' && !msg.member.hasPermission('MANAGE_MESSAGES')){ //add your id here
            msg.delete()
            msg.reply(`${animebonk} You are not Allowed to Ping Sound . Continuing will result in a mute`)

            var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))
            

            if(!warnsJSON[msg.author.id]) {
                warnsJSON[msg.author.id] = {
                    warns: 0
                }

                Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
            }

            warnsJSON[msg.author.id].warns += 1
            Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))


            setTimeout(function() {

                warnsJSON[msg.author.id].warns -= 1
                Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
            }, ms('24h'))

            var warnEm = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`You have been warned in ${msg.guild.name}`)
            .setDescription('You have recieved a warning from the moderation system')
            .addField('Reason' , '[AutoMod] Pinging Sound')
            .addField('Expires' , '24h')

            try {
                msg.author.send(warnEm)

            } catch(err) {

            }


            if(Number.isInteger(warnsJSON[msg.author.id].warns / 3)) {
                var mutedEm = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription(`${msg.member.user.username} has been muted for continuous infractions`)
                msg.channel.send(mutedEm)

                const muteRole = msg.guild.roles.cache.find(r => r.name === 'mute')//Make sure you have a role name mute
                const user = msg.member
                user.roles.add(muteRole.id)

                var yougotmuted = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle(`You have been muted in ${msg.guild.name}`)
                .setDescription('You have been muted after 3 infractions')
                .addField('Reason' , 'Multiple AutoMod Infractions')
                .addField('Expires' , '1h')

                try {

                    msg.author.send(yougotmuted)

                }catch(err) {

                }

                setTimeout(function () {
                    user.roles.remove(muteRole.id)
                }, ms('1h'));
			
            }
        return;
        }
            
        }

        
    catch(err) {
        console.log(err)

    }    

    
    try {
        var mentionedUser = msg.mentions.users.first()
 
        if(mentionedUser.id === '') { //ADD YOUR id here
            msg.reply('Hello! My name is Sound Utilities. My Prefix is \`>\`.')
        }

        
    }catch(err) {

    }    

        var array = ['fuck' , 'fck' , 'motherfucker' , 'mtherfcker' , 'fcker' , 'bitch' , 'dick' , 'penis' , 'hell' , 'bloody hell' , 'nudes' , 'nudity' , 'fcking' , 'shit' , 'ass' , 'fak' , 'bich' , 'gay' , 'f u c k' , 'nigga'];
 
        if(array.some(w =>  ` ${msg.content.toLowerCase()} `.includes(` ${w} `))){
            var emojiGuild = client.guilds.cache.find(guild => guild.name === '')//ADD YOUR CHANNEL NAME HERE
            var animebonk = emojiGuild.emojis.cache.find(emoji => emoji.name === 'animebonk')


            msg.delete()
            msg.reply(`${animebonk} this server does not tolerate that kind of language! Continuing will result in a mute!`)

            var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))
            

            if(!warnsJSON[msg.author.id]) {
                warnsJSON[msg.author.id] = {
                    warns: 0
                }

                Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
            }

            warnsJSON[msg.author.id].warns += 1
            Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))


            setTimeout(function() {

                warnsJSON[msg.author.id].warns -= 1
                Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
            }, ms('24h'))

            var warnEm = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`You have been warned in ${msg.guild.name}`)
            .setDescription('You have recieved a warning from the moderation system')
            .addField('Reason' , '[AutoMod] Using filtered words')
            .addField('Expires' , '24h')

            try {
                msg.author.send(warnEm)

            } catch(err) {

            }


            if(Number.isInteger(warnsJSON[msg.author.id].warns / 3)) {
                var mutedEm = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription(`${msg.member.user.username} has been muted for continuous infractions`)
                msg.channel.send(mutedEm)

                const muteRole = msg.guild.roles.cache.find(r => r.name === 'mute')
                const user = msg.member
                user.roles.add(muteRole.id)

                var yougotmuted = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle(`You have been muted in ${msg.guild.name}`)
                .setDescription('You have been muted after 3 infractions')
                .addField('Reason' , 'Multiple AutoMod Infractions')
                .addField('Expires' , '1h')

                try {

                    msg.author.send(yougotmuted)

                }catch(err) {

                }

                setTimeout(function () {
                    user.roles.remove(muteRole.id)
                }, ms('1h'));
			
            }
        return;
        }
            
        
        
    
    var prefix = config.prefix;
    if(!msg.content.toLowerCase().startsWith(prefix)) return;
 
    var args = msg.content.split(' ')
    var cmd = args.shift().slice(prefix.length).toLowerCase();
    try {
        var file = require(`./commands/${cmd}.js`);
        file.run(client, msg, args);
 
    }catch(err) {
        console.warn(err);
      }

    })   

client.on('guildMemberAdd' , async(member) => {

let warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'));
  warnsJSON[member.id] = {
                warns: 0
            }
            Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON));
})






    client.on('messageUpdate' , (oldMessage, newMessage) => {
        if(newMessage.content.includes('<@>')) {
            newMessage.delete()
            return newMessage.reply('Hello my Name is Sound Utilities. My prefix is `/>`/!') //TYPE UR BOT OR WAHT EVER YOU WANT TO DO
        }
    })


client.login(config.token);
