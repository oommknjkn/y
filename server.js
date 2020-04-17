const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://arabdark.glitch.me/`);
}, 280000);

const Discord = require('discord.js');  
const client = new Discord.Client();
const moment = require('moment');
const zalgo = require('zalgolize');  
const math = require('math-expression-evaluator');   
const figlet = require('figlet');   
const fs = require('fs');  
const ms = require('ms');  
const prefix = '.'
const Gamedig = require('gamedig');
client.on('ready', () => {
console.log('Ready!');
});
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command === "mta") {
    Gamedig.query({
      type: 'mtasa', // multi theft auto
      host: '178.32.125.24', // ip adrsese
      port: '22003' // default ir 22003
      }).then((state) => {
        let mEmbed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Multi Theft Auto')
        .setDescription(state['name'])
        .addField('Status', 'Online', true)
        .addField('Players', state['raw']['numplayers'] + ' no ' + state['maxplayers'], true)
        .addField('Map', state['map'], true)
        .addField('Version', state['raw']['version'], true)
        .addField('Game Type', state['raw']['gametype'], true)
        .addField('Connect', state['connect'], true)
        .addField('Password Stats', state['password'], true)
        .setTimestamp()
        .setFooter('Arab Dark Gaming System.', + `${message.guild.iconURL}`)
  .setImage('https://cdn.discordapp.com/attachments/697323206008373331/699912650368483398/Sin-titulo-1.gif')
        message.channel.send({embed: mEmbed});
      }).catch((error) => {
      let eeEmbed = new Discord.RichEmbed()
      .setColor('RED')
      .setTitle("Server Off - السيرفر غير شغال")
      message.channel.send({embed: eeEmbed});
      });
    } else if(command === "mtaplayers123231") {
      Gamedig.query({
        type: 'mtasa', // multi theft auto
        host: '195.3.145.36', // ip adrsese
        port: '22003' // default ir 22003
        }).then((state) => {
          if (state['raw']['numplayers'] === 0){
            message.reply('Pašlaik serverī "' + state['name'] + '" nav aktīvu spēlētāju ');
           
          } else {
            message.reply('Pašlaik serverī "' + state['name'] + '" pieslēgušies ' + state['raw']['numplayers'] + ' spēlētāji');
          }
        }).catch((error) => {
          message.reply("Serveris ir izslēgts, vai arī nevar atrast serveri!");
        });
      };
 
  // cs 1.6 serveris
 
  if(command === "cs") {
    Gamedig.query({
      type: 'cs16', // counter-strike 1.6
      host: 'cs.kick.lv', // ip adrsese
      port: '27015' // default ir 27015
      }).then((state) => {
        let cs16Embed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle(state['name'])
        .setDescription(state['raw']['game'])
        .addField('Statuss', 'Online', true)
        .addField('Spēlētāji', state['raw']['numplayers'] + ' no ' + state['maxplayers'], true)
        .addField('Karte', state['map'], true)
        .addField('Time Left', state['raw']['rules']['amx_timeleft'], true)
        .addField('Protokols', state['raw']['protocol'], true)
        .addField('Adrese', state['connect'], true)
        .setTimestamp()
        .setFooter('Arab Dark Gaming System.', + `${message.guild.iconURL}`)
  .setImage('https://cdn.discordapp.com/attachments/697323206008373331/697631058379931688/a_eb392347782dfbc9c0548ee9e3f87e50.gif')
        message.channel.send({embed: cs16Embed});
        console.log(state);
      }).catch((error) => {
        message.reply("Counter-Strike 1.6 serveris ir izslēgts!");
      });
    } else if(command === "csplayers") {
      Gamedig.query({
        type: 'cs16', // counter-strike 1.6
        host: 'cs.kick.lv', // ip adrsese
        port: '27015' // default ir 27015
        }).then((state) => {
          if (state['raw']['numplayers'] === 0){
            message.reply('Pašlaik serverī "' + state['name'] + '" nav aktīvu spēlētāju ');
           
          } else {
            message.reply('Pašlaik serverī "' + state['name'] + '" pieslēgušies ' + state['raw']['numplayers'] + ' spēlētāji');
            // var arrayLength = state['players'].length;
            // for (var i = 0; i < arrayLength; i++) {
            //   message.channel.send(
            //     state['players'][i]['name']
            //     );
            // }  // jataisa lai parada ka embed
          }
        }).catch((error) => {
          message.reply("Serveris ir izslēgts, vai arī nevar atrast serveri!");
        });
      };
 
 
 
});
let data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
client.on("message", async message => {
  if(message.content.startsWith(prefix + "set")) {
  var args = message.content.split(" ").slice(1)
  if(!args[0] || !args[1] ) return message.channel.send("> **Use:** " + prefix + "set [role-id]  [voice-channel-id] ");
    let ro = message.guild.roles.get(args[0]);
    if (!ro) return message.channel.send("> **I can't find this channel!**")
var ch = client.channels.get(args[1])
    if (!ch) return message.channel.send("> **I can't find this role!**") 
     data = {role:args[0], channel:args[1]}
    fs.writeFile('./data.json', JSON.stringify(data, null, 4), function(err) {if(err) console.log(err)});
     message.channel.send("> **Done..**:white_check_mark:")  
  }
})
client.on('guildMemberUpdate', member => {
    if(!data.role) return console.log("Error .")
  var role = member.guild.members.filter (m => m.roles.get(data.role))
  member.guild.channels.get(data.channel).setName(`Members: [${role.size}]`)
 });
///////////////////////////////////////////////////////////////////////////////////
const antispam = JSON.parse(fs.readFileSync("./antispam.json", "utf8"));

client.on("message", async message => {
  if (antispam[message.author.id] == undefined) {
    antispam[message.author.id] = {
    lastmessage: "none"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  }else  if (antispam[message.guild.id] == undefined) {
    antispam[message.guild.id] = {
    onoff: "off"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  }
  let args = message.content.split(" ");
  let command = args[0]
    if(command === prefix + "antispam"){
      if(!args[1])return message.channel.send("**Error | Use `antispam on/off`**");
    if(args[1] === "on"){
            message.channel.send("**Done Sir Anti Spam Changed To ON**")
      antispam[message.guild.id].onoff = "on";
      fs.writeFile("./antispam.json", JSON.stringify(antispam), function(
        err
      ) {
        if (err) throw err;
      });
    }else if(args[1] === "off"){
      antispam[message.guild.id].onoff = "off";
      fs.writeFile("./antispam.json", JSON.stringify(antispam), function(
        err
      ) {
        if (err) throw err;
      });
      message.channel.send("**Done Sir Anti Spam Changed To OFF**")
    }
  }
});

client.on("message", async message => {
  if (antispam[message.author.id] == undefined) {
    antispam[message.author.id] = {
    lastmessage: "none"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  }else  if (antispam[message.guild.id] == undefined) {
    antispam[message.guild.id] = {
    onoff: "off"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  }else if(antispam[message.author.id].lastmessage === "none") {
    return;
  }else if(antispam[message.guild.id].onoff === "off"){
    return;
  }else if(antispam[message.author.id].lastmessage === message.content){
    return message.delete();
  }

  antispam[message.author.id].lastmessage = message.content;
  fs.writeFile("./antispam.json", JSON.stringify(antispam), function(
    err
  ) {
    if (err) throw err;
  });

});
client.on('message', message => {
if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
        .setFooter('Arab Dark Gaming System.', + `${message.guild.iconURL}`)
  .setImage('https://cdn.discordapp.com/attachments/697323206008373331/697631058379931688/a_eb392347782dfbc9c0548ee9e3f87e50.gif')
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
    .setFooter(`${message.guild.iconURL}`, + 'Arab Dark Gaming System.')
  .setImage('https://cdn.discordapp.com/attachments/697323206008373331/697631058379931688/a_eb392347782dfbc9c0548ee9e3f87e50.gif')
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});

 
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
});
/////////////
client.on('message', message => { 
  if(message.content.startsWith(prefix + "warn")) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`You Don't Have Permission`);
     let user = message.mentions.users.first();
         if(!user) return message.reply('**Mention The User Please !**').then(message => message.delete(4500));;
     let reason = message.content.split(' ').slice(2);

         if(message.guild.member(user).hasPermission("ADMINISTRATOR")) return message.reply(`**You Can't Warn This User**`).then(message => message.delete(5000));;
     let embed = new Discord.RichEmbed()
     .setTitle(':warning: **You Were warned!')
     .addField(reason)
    .setFooter(`${message.guild.iconURL}`, + 'Arab Dark Gaming System.')
  .setImage('https://cdn.discordapp.com/attachments/697323206008373331/697631058379931688/a_eb392347782dfbc9c0548ee9e3f87e50.gif')
     user.sendEmbed(embed)
     message.channel.send(`This User Has Ben Warned!`);

  }

});
///////////////////////////
client.on('message', message => {
if (message.author.bot) return;
  let args = message.content.split(" ");
      // By Alpha Codes - AboKhalil 26/7/2019
  let command = args[0];
 
  let user = message.mentions.users.first();
   
  let reasonkick = message.content.split(" ").slice(2).join(" ");
 
  if (command == prefix + "kick") {
 
    if(!message.channel.guild){
    message.channel.send("**لا يمكن استعمال هذا الأمر في الخاص**");
}
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
        message.channel.send("**يجب ان يكون لديك خاصية `KICK_MEMBERS`**");
    }
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
        message.channel.send("**البوت لا يمتلك خاصية `KICK_MEMBERS`**");
    }
    if (!user) {
         let kickembed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Kick System")
        .setDescription('.kick @user Reason')
  .setFooter('Arab Dark Gaming System.')
  .setImage('https://cdn.discordapp.com/attachments/697323206008373331/697631058379931688/a_eb392347782dfbc9c0548ee9e3f87e50.gif')
        message.channel.send({embed: kickembed});
    }else if (!reasonkick) {
        message.channel.send("**يجب عليك إدراج سبب الحظر**");
    } else if (message.guild.member(user).hasPermission("KICK_MEMBERS")){
    message.channel.send("**لا يمكن طرد هذا الشخص , فهو من الإدارة**");
    } else {
 
 
    message.guild.member(user).kick()
    message.channel.send("**The Member Was Kicked **" + user.tag + " **By** : " + message.author.tag);
    message.channel.send("**Reason : __" + reasonkick + "__**");
   
    user.send("**You are Kicked By** : " + message.author.tag);
    user.send("**Reason : __" + reasonkick + "__**");
    }
 }
 // By Alpha Codes - AboKhalil 26/7/2019
});
////////////////////////////////////
client.on("message",async message => {
if(message.content === '.vote'){//الامر
if(!message.member.roles.some(r=>["manager","test1"].includes(r.name)) ) return; // الرتب الي يمديها تستخدم الامر يمديك تخليها ب برمشن
 
    let go1; //انشاء متغير go1
      let filter = m => m.author.id === message.author.id // (تعريف الفلتر (الشخص الي يمديه يرد على رسائل البوت يكون بس الكاتب
     
     
 
      await message.channel.send("** اكتب اسم الروم المراد التصويت فيه بدون منشن ... ✏**").then(go => {
      message.channel.awaitMessages(filter, { time: 90000, max: 1             // شروط الانتضار من بينها الفلتر يكون بس الكاتب الي يرد على البوت                        
})
     .then(go3 => { // اذا تحققة الشروط الي فوق
       go1 = go3.first().content; // يعطي قيمة لمتغير go1
        go3.first().delete(); // يحذف الرسالة
     
let go2; // انشاء متغير go2
       
 go.edit("**اكتب الشيء المراد التصويت عليه ... ✏ **").then(go => {
  message.channel.awaitMessages(filter, { time: 90000, max: 1 }) // شروط الانتضار من بينها الفلتر الي شرحناه فوق و وقت الانتضار
 
     .then(go3 => { // اذا تحقق الشروطة الي فوق
       go2 = go3.first().content; // يعطي قيمة للمتغير go2
        go3.first().delete(); // يحذف الرسالة
  let room = message.guild.channels.find("name",go1)
  if(!room) return message.reply("**الروم غير موجود او انك قمت بمنشنة الروم**") // اذا ماكان فيه الروم الي كتبه الشخص اول يقوله مافي
 go.edit(" 🛡 **تم الارسال.**").then(go => { //  يعدل الرسالة ويقول تم الارسال ويرسل الرسالة للروم المحدد
 let embed2 = new Discord.RichEmbed()
          .setColor("#79cbfa")
          .setDescription(`
          Yes ! 1⃣
           No ! 2⃣`)
          .setTimestamp()
  room.send(`${go2}`)
  room.send(embed2).then(go4 => {
  go4.react('2⃣')
  go4.react('1⃣')
  })
  })
})
  })
})
  })
           
     
 
     
 
     
           
}
});
//////////////////////
let rab6 = JSON.parse(fs.readFileSync('./rab6.json' , 'utf8'));
client.on('message', message => {
    if(message.content.startsWith(prefix + "togglink")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!rab6[message.guild.id]) rab6[message.guild.id] = {
          onoff: 'Off'
        }
          if(rab6[message.guild.id].onoff === 'Off') return [message.channel.send(`**✅ The Invite Link Cmd Is __𝐎𝐍__ !**`), rab6[message.guild.id].onoff = 'On']
          if(rab6[message.guild.id].onoff === 'On') return [message.channel.send(`**⛔ The Invite Link Cmd Is __𝐎𝐅𝐅__ !**`), rab6[message.guild.id].onoff = 'Off']
          fs.writeFile("./rab6.json", JSON.stringify(rab6), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
          
        })
        const coolDown = new Set();
client.on('message', message => {
if (message.content.startsWith("inv")) {
if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
if(!rab6[message.guild.id]) rab6[message.guild.id] = {
onoff: 'Off'
}
if(rab6[message.guild.id].onoff === 'Off') return;
if(coolDown.has(message.author.id)) return message.channel.send(`**⏱ | ${message.author.username}, your invite 💴 link refreshes in ``1 Day``.**`);
message.channel.createInvite({
thing: true,
maxUses: 5,
maxAge: 86400
}).then(invite =>
message.author.sendMessage(invite.url)
)
message.channel.send("** ﺗﻢ ﺍﺭﺳﺎﻝ ﺍﻟﺮﺍﺑﻂ ﺑﺮﺳﺎﻟﺔ ﺧﺎﺻﺔ **") .then(() => {
coolDown.add(message.author.id);
});
message.author.send(`** ﻣﺪﺓ ﺍﻟﺮﺍﺑﻂ : ﻳـﻮﻡ
ﻋﺪﺩ ﺍﺳﺘﺨﺪﺍﻣﺎﺕ ﺍﻟﺮﺍﺑﻂ : 5 **`)
}
setTimeout(() => {
coolDown.remove(message.author.id);
},86400000);
});
////////////////////
client.on("message", async message => {
    if(message.content.startsWith(prefix + "banlist")) {
        if(!message.guild) return;
                if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**Sorry But You Dont Have Permission** `BAN_MEMBERS`' );
        message.guild.fetchBans()
        .then(bans => {
            let b = bans.size;
            let bb = bans.map(a => `${a}`).join(" - ");
         let ebanembed = new Discord.RichEmbed()
        .setColor('RADNIM')
        .setTitle("Ban List System")
        .addField('BanList', + `${b}`)
        .addField('BanMaps', + `${bb}`)
  .setFooter('Arab Dark Gaming System.')
  .setImage('https://cdn.discordapp.com/attachments/697323206008373331/697631058379931688/a_eb392347782dfbc9c0548ee9e3f87e50.gif')
        message.channel.send({embed: ebanembed});
        });
    }
});
/////////////////
client.on('message', message => { /// edit fox
      if(message.content ===  ".close") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ليس لديك صلاحية ادمن :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('تم اخفاء الشات ! :white_check_mark:  ') ///edit fox
 }
});


client.on('message', message => {
      if(message.content === ".open") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ليست لديك صلاحية ادمن :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('تم اظهار الشات :white_check_mark: ')
 }
});
client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    var messages = message.content.split(" ").slice(1);

    let args = messages.slice(1); 

    var prefix = ".";
    if(message.content.startsWith(prefix+'report')){
        let msg = message;


        if(message.guild.member(message.author).roles.get(msg.guild.roles.find(role => role.name === `banned_report`))) return message.reply('**لقد تم حظرك لا يمكنك ابلاغ احد**').then(m => {m.delete(3000)}); //لو حد عنده هل رتبة ما رح يقدر يسوي ريبورت 

        var reports_channel = message.guild.channels.find('name', 'reports') // اسم الروم الي تجيه الريبورتات

        if(!reports_channel) return message.reply('**I cant find reports room.**').then(m => {m.delete(3000)});
        
        var mention = message.mentions.users.first();
        
        if(!mention) return message.reply('**Please, mention a member.**').then(m => {m.delete(3000)});

        if(mention.id == message.author.id) return message.reply('**You cant report yourself**').then(m => {m.delete(3000)});
        
        if(message.guild.member(mention).hasPermission("MANAGE_MESSAGES")) return message.reply('**You cant report this user.**').then(m => {m.delete(3000)}) //لو شخص عنده هل برمشن ماحد رح يقدر يسويله ريبورت
        
        if(mention.id == message.guild.owner.id) return message.reply('**You cant report the owner.**').then(m => {m.delete(3000)});


        var reason = args.join(" ");

        if(!reason) return message.reply('**Please, specify a reason.**').then(m => {m.delete(3000)});
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`NEW REPORT`)
        .setThumbnail(message.author.avatarURL)
        .addField('**Reporter Name: **', `<@${message.author.id}> ID [ ${message.author.id} ]`, true)
        .addField('**ReportedUser Name: **', `${mention} ID [ ${mention.id} ]`, true)
        .addField('**Time** ', `[ ${moment(message.createdAt).format('D/MM/YYYY h:mm a')} ]`, true)
        .addField('**reason: **', `[ ${reason} ]`, true)
        .addField('**Channel: **', `${message.channel}`, true)
        .setFooter('Arab Dark Gaming System.')
        .setImage('https://cdn.discordapp.com/attachments/697323206008373331/697631058379931688/a_eb392347782dfbc9c0548ee9e3f87e50.gif')
        reports_channel.send(embed)
        message.channel.send('**تم البلاغ, نشكرك على  مساعدتنا**').then(message => {message.delete(3000)});
    }
});
/////////////////////////
   client.on('message', message => {
    const prefix = '.'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "Not Playing....";
}
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.addField('Name :',`**<@` + `${z.id}` + `>**`, true)
.addField('ID :', "**"+ `${z.id}` +"**",true)
.addField('Playing :','**'+y+'**' , true)
.addField('Discrim :',"**#" +  `${z.discriminator}**`,true)
.addField('**Created At**', message.author.createdAt.toLocaleString())
.addField("**Joined At**", message.member.joinedAt.toLocaleString())    

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
//////////////////////
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`__**ServerInfo**__`)
      .addField('**اسم السيرفر**',`[** __${msg.guild.name}__ **]`,true)
      .addField('**نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('**عدد الاعضاء**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('**عدد البشريين**',`[** __${msg.guild.memberCount - msg.guild.members.filter(m => m.user.bot).size}__ **]`,true)
      .addField('**عدد البوتات**',`[** __${msg.guild.members.filter(m => m.user.bot).size}__ **]`,true)
      .addField('**عدد الاعضاء الاونلاين**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('**الرومات**',`[**${msg.guild.channels.filter(m => m.type === 'text').size}** **text | Voice** **${msg.guild.channels.filter(m => m.type === 'voice').size}**]`,true)
      .addField('**الأونـر**',`**${msg.guild.owner}**`,true)
      .addField('**ايدي السيرفر**',`[** __${msg.guild.id}__ **]`,true)
      .addField('**الرتب**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('**تاريخ انشاء السيرفر**',`[** __${msg.guild.createdAt.toLocaleString()}__ **]`, true)
        .setFooter('Arab Dark Gaming System.')
  .setImage('https://cdn.discordapp.com/attachments/697323206008373331/697631058379931688/a_eb392347782dfbc9c0548ee9e3f87e50.gif')
      msg.channel.send({embed:embed});
    }
  });    
//////////////////////////////////////////////
//////////////////////////////
   client.on("message", message => {
 if (message.content === ".public") {
        message.react("📫")
	           message.react("✅")
  const embed = new Discord.RichEmbed() 
      .setColor('RADNOM')
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
الاوامــر الــعـــامـــة

⤠ .invite ⥨ لدعوة البوت الى سيرفرك
⤠ .support ⥨ لدخول سيرفر البوت  
⤠ .mta ⥨ لرؤية معلومات سيرفر الحياة الواقعية
`)
  .setFooter('Arab Dark Gaming System.')
  .setImage('https://cdn.discordapp.com/attachments/697323206008373331/697631058379931688/a_eb392347782dfbc9c0548ee9e3f87e50.gif')
message.author.sendEmbed(embed)

}
});

client.on('message', message => { 
let PREFIX = '.'
    if (message.content.startsWith(PREFIX + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});
client.on('message', message => {
            var prefix = ".";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }
});
client.on('message', message => {
  var prefix = '.';
 
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
      if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك صلاحية الباند**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("البوت لايملك صلاحيات الباند");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**منشن الشخص اللي تريد تبنيده**");
  if (!message.guild.member(user)
.kickable) return message.reply("**لايمكنني تبنيد هذا الشخص**");

  message.guild.member(user).ban();

  const banembed = new Discord.RichEmbed()
  .setAuthor(`تم تبنيد العضو`, user.displayAvatarURL)
  .setColor("#502faf")
  .setTimestamp()
  .addField("**العضو الي تبند:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**العضو اللي قام بتبنيده:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});
var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == ".roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('.bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "System. | Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('__**📢Broadcast📢**__') 
       .addField('**🔸Server**', message.guild.name)
       .addField('**🗣Sender**', message.author.username)
       .addField('**📖Message**', args)
       .setTimestamp() 
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    })
	        client.on('message', message => {
                        let args = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith(prefix + 'color')) {
    if(!args) return message.channel.send('`يرجي اختيار كم لون `');
             if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
             message.channel.send("**✅ | تم عمل الالوان**");
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            message.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "rps")) {
              let args = message.content.split(" ").slice(1);
  var choice = args[0];
  if (choice == "ورقة" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "مقص") {
      var response = " لقد اخترت **مقص** و :v: ولقد فزت"
    } else if (choice2 == "ورقة") {
      var response = " لقد اخترت **ورقه** :hand_splayed: انه تعادل "
    } else {
      var response = " لقد اخترت **حجر** :punch:  انت الفائز"    
    }
    message.channel.send(response);
  } else if (choice == "حجر" || choice == "r") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "ورقة") {
      var response = " لقد اخترت **ورقه** :hand_splayed: ولقد فزت"
    } else if (choice2 == "حجر") {
      var response = "لقد اخترت **حجر** :punch: انه تعادل "
    } else {
      var response = " لقد اخترت **مقص** :v: انت الفائز"
    }
    message.channel.send(response);
  } else if (choice == "مقص" || choice == "s") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "حجر") {
      var response = "لقد اخترت **ورقه** :hand_splayed: لقد فزت"
    } else if (choice2 == "مقص") {
      var response = "لقد اخترت **مقص** :v: انه تعادل"
    } else {
      var response = " لقد اخترت **حجر** :punch: انت الفائز "
    }
    message.channel.send(response);
  } else {
    message.channel.send(`يجب عليك استعمال \`${prefix}rps\` <حجر|ورقة|مقص>`);
  }
}

});
client.on("message",message => {
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar")){
const mention = message.mentions.users.first()

if(!mention) return console.log("") 
let embed = new Discord.RichEmbed()
.setColor("BLACK")
.setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
.setTitle("Avatar Link")
.setURL(`${mention.avatarURL}`)
.setImage(`${mention.avatarURL}`)
.setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
    message.channel.send(embed)
}
})

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar server")) {
    let doma = new Discord.RichEmbed()
    .setColor("BLACK")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1]
var avt = args || message.author.id;    
    client.fetchUser(avt).then(user => {
     avt = user;
  let embed = new Discord.RichEmbed() 
  .setColor("BLACK")
  .setAuthor(`${avt.tag}`, avt.avatarURL)
  .setTitle("Avatar Link")
  .setURL(avt.avatarURL)
  .setImage(avt.avatarURL)
  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed) 
    })
  }
})
const { GiveawaysManager } = require("discord-giveaways");
// Requires Manager from discord-giveaways
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;

client.on("ready", () => {
    console.log("I'm ready !");
});
client.on("message", (message) => {
    const ms = require("ms"); // npm install ms
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === "start"){
      if (!message.member.hasPermission("ADMINISTRATOR"))  return;
      message.delete();
        // g!start-giveaway 2d 1 Awesome prize!
        // will create a giveaway with a duration of two days, with one winner and the prize will be "Awesome prize!"
    let time = args[0];
                      let winners = args[1];
                      let prize = args.slice(2).join(" ")
                      if (!time || !winners || !prize) return message.reply(`Wrong Use | Usage : \n ${prefix}gstart <time> <winners> <prize>`)
                      if (isNaN(winners)) return message.reply(`Winner Need To Be Number`)
                      if (!time) return message.reply(`1s , 1m , 1h , 1w , 1mo`)

client.giveawaysManager.start(message.channel, {
    time: ms(args[0]),
    prize: args.slice(2).join(" "),
    winnerCount: parseInt(args[1]),
        hostedBy: message.author ,
    messages: {
        giveaway: "🎉🎉**GIVEAWAY** 🎉🎉",
        giveawayEnded: "🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
        timeRemaining: "Time remaining: **{duration}**!",
        inviteToParticipate: "React with 🎉 to enter!",
        winMessage: `Congratulations, {winners}! You won **{prize}**! ${message.url}`,
        embedFooter: "Giveaways",
        noWinner: "Could not determine a winner!",
        hostedBy: "**Hosted by: {user}**",
        winners: "winner(s)",
        endedAt: "Ended at",
        units: {
            seconds: "seconds",
            minutes: "minutes",
            hours: "hours",
            days: "days",
            pluralS: true // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
         }
    }
});
    }
});

client.on("message", (message) => {
    const ms = require("ms"); 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === "reroll"){
      if (!message.member.hasPermission("ADMINISTRATOR"))  return;
      message.delete();
        let messageID = args[0];
      if(!messageID) messageID = "**None**";
        client.giveawaysManager.reroll(messageID).then(() => {
            message.channel.send("Success! Giveaway rerolled!");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
});
client.on("message", (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === "end"){
      if (!message.member.hasPermission("ADMINISTRATOR"))  return;
      message.delete();
        let messageID = args[0];
      client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("Success! Giveaway Ended!");
        }).catch((err) => {
          if(!messageID) messageID = "**None**";
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
});
/////////////////////////////////////
client.on("message", message => {
  if(message.content.startsWith(".privnote")){
    const messageArray = message.content.split(" ")
    const args = messageArray.slice(1).join(" ")

const wrongusage = new Discord.RichEmbed()
  .setTitle(`**Incorrect usage**`)
  .setDescription(`#Usage: #privnote [Message]`)
  .setFooter(`HexGen Premium`)
  .setColor("GOLD");
    
    
  const checkdms = new Discord.RichEmbed()
  .setTitle(`**Successful**`)
  .setDescription(`Link sent in your DMs`)
  .setFooter(`HexGen Premium`)
  .setColor("GREEN");
  
    
  if(!args) return message.channel.send(wrongusage)
 const { createPrivnote } = require('privnote');
(async () => {
 const created = await createPrivnote(args);

  
  const link = new Discord.RichEmbed()
  .setTitle(`**Privnote**`)
  .setDescription(created.url)
  .setURL(created.url)
  .setFooter(`HexGen Premium`)
  .setColor("GOLD");

  
message.author.send(link)
message.channel.send(checkdms)
})()
}
});
client.on('message',msg => {
    if(msg.content.indexOf(prefix) !== 0) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const roleOrPrem = '  '; // تقدر تضع هون اي دي رتبة او برمشن
    if(!msg.guild.id) return;
    if(msg.author.bot) return;
    if(command == 'roles') 
    {
        if(!msg.member.roles.cache.get(roleOrPrem) && !msg.member.hasPermission(roleOrPrem)) return;
        if(!msg.guild.me.hasPermission(['MANAGE_ROLES'])) return msg.channel.send('I can\'t get server roles,I need premission `MANAGE_ROLES`').then(m=>m.delete(5000));
       let roles = msg.guild.roles.cache.filter(r=> r.name != '@everyone').sort((a,b)=> a.id - b.id).map( r => {
            if(r.name.length < 22) 
            {
                return `${r.name + Array(22 - (r.name.length)).map(a=> ' ').join(' ')+ r.members.size} members`
            } 
            else 
            {
                return `${r.name + '  ' + r.members.size} members`
            }
        })
        roles.push('@everyone            0 members')
        msg.channel.send(roles.join('\n'),{split:true,code:true})
    }
})
client.on('message', msg => {
 if(!msg.channel.guild) return;
        let user = msg.guild.member (msg.mentions.members.first() || msg.author);
 if (msg.content.startsWith(prefix + 'myrole')) {
    const mox = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setColor('#0099ff')
.setTitle ('User Roles information')
.addField ("Roles: ", user.roles.filter (r => r.name !== "@everyone").map (m =>"<@&" +m.id+">").join("\n"), true)
msg.channel.send(mox)
  }
});
client.on('message', msg => {
 if(!msg.channel.guild) return;
        let user = msg.guild.member (msg.mentions.members.first() || msg.author);
 if (msg.content.startsWith(prefix + 'qweqweeqwpartner')) {
    const mox = new Discord.RichEmbed()
.setThumbnail('https://cdn.discordapp.com/attachments/697323206008373331/699906284341821440/a_eb392347782dfbc9c0548ee9e3f87e50.gif')
.setColor('RANDOM')
.setTitle ('Partner System')
      .setDescription(`
	  
Partners

[ Members : 300 + ]
[ Online : 100 + ]

Rules
- [ يجب أن يكون بين ألسيرفرين نشر ]
- [ مسأعدة البعض بأستمرار في اي وقت ]
- [ تجنب ألمشاكل من أعضاء الادارة للسيرفرين ]
- قابل للتعديل في اي وقت
Managers :
<@688406596098982036>


	  `)
.setImage("https://cdn.discordapp.com/attachments/697323206008373331/699906477300645940/Sin-titulo-1.gif")
msg.channel.send(mox)
  }
});
client.on('message', msg => {
 if(!msg.channel.guild) return;
        let user = msg.guild.member (msg.mentions.members.first() || msg.author);
 if (msg.content.startsWith(prefix + 'qweqweqweads-system')) {
    const mox = new Discord.RichEmbed()
.setThumbnail('https://cdn.discordapp.com/attachments/697323206008373331/699906284341821440/a_eb392347782dfbc9c0548ee9e3f87e50.gif')
.setColor("#0585f0")
.setTitle ('ADS - System')
      .setDescription(`

- [ 120k - رسالة منشن هيري . ]
- [ 220k - رسالة منشن ايفريون , هيري ]
- [ 320k - قيف اواي مع شرط انه يدخل سيرفرك وكذا ]
- [ 450k - رسالة برودكاست اوفلاين واونلاين ]

- قابل للتعديل في اي وقت

Managers :
<@700316570743996426>

@everyone Status : On
	  `)
.setImage("https://cdn.discordapp.com/attachments/697323206008373331/699926071621058660/Sin-titulo-1.gif")
.setFooter("Ads-System Arab Dark Gaming .")
msg.channel.send(mox)
  }
});
/////////////////////
 client.on('message', message => {
  if(message.content.startsWith(`${prefix}invites`)) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});
client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='.member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
	
    });
////////////////////
  client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('699935668683538473');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online - [${currentSize}]`);
  if (currentSize !== size) channel.setName(`Voice Online - [${currentSize}]`);
});  
////////
/////////
	 client.on('message',   eyad =>{
    
    var  args = eyad.content.split(" ").slice(2).join(" ")
    var men = eyad.mentions.users.first()|| client.users.get(eyad.content.split(' ')[1])
    var  mas = eyad.author
                              if(eyad.content == 'pes') {
                              if(eyad.channel.type === "dm"){
if(!args) return  eyad.channel.send(":black_medium_square: **قم بوضع رسالة الصراحة **");
if(!men) return  eyad.channel.send(":black_medium_square:**قم بوضع ايدي المراد مصارحتة , ربما يكون الشخص غير موجود في سيرفرات مشتركة بينك وبينة لذلك لن يستطيع البوت الأرسال** ");
                      var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
     var eyadandr3d = new Discord.RichEmbed()
     .setAuthor(eyad.author.username , eyad.author.avatarURL)
     .setThumbnail(men.avatarURL)
     .setDescription(`**:black_medium_square:  هل انت موافق لآرسال هذه الصراحة  ؟  \nمحتوي الرسالة : ${args}**`)
     .setTimestamp() 
     .setFooter(`- By , message.author.name .`)
     eyad.channel.send(eyadandr3d).then(message => {
 message.react('✅').then(r=>{
 message.react('❌').then(r=>{            
    var kk = (reaction, user) => reaction.emoji.name === '✅' && user.id === eyad.author.id;    
    var nn = (reaction, user) => reaction.emoji.name === '❌' && user.id === eyad.author.id;
    var kkk = message.createReactionCollector(kk, { time: 60000 });
    var nnn = message.createReactionCollector(nn, { time: 60000 });
kkk.on("collect", r => {
          const embed = new Discord.RichEmbed()
               .setThumbnail("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")   
               .setColor("RANDOM")
               .addField('**• السلام عليكم ** ', `<@${men.id}>` , true)
                    .addField('**• لقد قام شخص ما بمصارحتك **' ,       ` __${args}__ ` , true)
                    .addField('**• تاريخ المصارحة**' , Day + "-" + Month + "-" + Year , true)
          client.users.get(men.id).sendEmbed(embed)
          eyad.reply(`لقد تم ارسال الصراحه للشخص \n <@${men.id}>`)
message.delete()
          eyad.delete();
})
nnn.on("collect", r => {
message.delete()
eyad.reply("`تم الغاء الصراحة`")
eyad.delete();
})
})
}) 
})
}}
});
////////////
client.on('message', message => {
  var id = message.author.id
  if (message.content.startsWith( prefix + "sug")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  if(!args) return message.reply('من فضلك اكتب اقتراحك بعد الامر')
  let embed = new Discord.RichEmbed()
.setColor('RANDOM') 
.addField('**`المقترح`**', `<@${id}>` , true)
.addField('**`الاقتراح`**', `${args}` , true)
.setFooter('Suggested By '+message.author.username, message.author.avatarURL)
message.guild.channels.find('name', '・suggestion').send(embed);

  }
  });
///////////

client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("697172676623466498");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("668240069869436928");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (data[Inv])
                if (data[Inv] < Invite.uses) {
                    setTimeout(function() {
 channel.send(`**invited by** ${Invite.inviter} `) ;
                    },1500);
 }
            data[Inv] = Invite.uses;
       
       });
    });
});
////////////////////
const yourID = "688406596098982036"; //Instructions on how to get this: https://redd.it/40zgse
const setupCMD = ".role"
let initialMessage = ``;
const roles = ["MTA:SA", "Fortnite", "Crossfire", "League of Leagends", "Black Squad", "Minecraft", "Roblox", "Fivem"];
const reactions = ["💭", "🇫", "🔫", "⚔", "🔪", "👾", "🥊", "🎆"];
const botToken = "NDgwNzM4NTIzNjk2MjAxNzI5.Dl9PIA.48CAMtPWvyvZawa9M-KqwtvVLlY"; /*You'll have to set this yourself; read more
                     here https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token*/

//Load up the bot...
//If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`اظغط على الرياكشن المرفق مع ألرسالة للحصول على رتبة **"${role}"**`); //DONT CHANGE THIS
    return messages;
}


client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})
client.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == client.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != client.user.id){
                var roleObj = msg.guild.roles.find('name', role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});
client.on("message", message => {
  var prefix = "#";
    let channel = message.guild.channels.find("name", "app-req")
    if(message.content.startsWith(prefix + "submit"))
    message.channel.send( message.member + ', **:timer:**').then( (m) =>{
      m.edit( message.member + ', **اسمك الحقيقى بالكامل ✍**' )
      m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
          m1 = m1.first();
          var name = m1.content;
          m1.delete();
          m.edit(message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **كم عمرك 🎓**' )
              setTimeout(() => {
                m.delete()
              }, 10000);
              m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                  m2 = m2.first();
                  var age = m2.content;
                  m2.delete()
                  message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                    m.edit( message.member + ', **هل ستتفاعل فى الرومات الصوتيه و الكتابية ؟ 🎙**' )
                    setTimeout(() => {
                      m.delete()
                    }, 10000);
                    m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                        m3 = m3.first();
                        var ask = m3.content;
                        m3.delete();
                        message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                          m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                          setTimeout(() => {
                            m.delete()
                          }, 10000);
                          m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                              m4 = m4.first();
                              var ask2 = m4.content;
                              m4.delete();
                              message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ اعطنا سبباً وجيهاً 🤔**' )
                                m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                    m5 = m5.first();
                                    var ask3 = m5.content;
                                    m5.delete();
                                  message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                m.edit( message.member + ', **هل ستضع الشعار الخاص بنا ؟ ᴬᴰᴳ 🤔**' )
                                m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m6) => {
                                    m6 = m6.first();
                                    var ask4 = m6.content;
                                    m6.delete();
              m.edit(message.member + ', **جارى جمع البيانات**').then( (mtime)=>{
                setTimeout(() => {
                  let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle('**`تقديم على ادارة`** [__**Arab Dark Gaming**__]')
                .addField('**`الاسم`**', `${name}` , true)
                .addField('**`العمر`**', `${age}` , true)
                .addField('**`هل سيتفاعل ؟`**',`${ask}`)
                .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)
                .addField('**`لماذا يجب علينا قبوله ؟`**',`${ask3}`)
                .addField('**`هل سيضع الشعار ؟`**',`${ask4}`)
                .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
                channel.send(embed)
                }, 2500);
                setTimeout(() => {
                  mtime.delete()
                }, 3000);
                
          })
        })
        })
      })
    })
  })
})
})
      })
  })
})
})
})
});
        client.on('message',async message => {
          let mention = message.mentions.members.first();
          if(message.content.startsWith("#accept")) {
          if(!message.channel.guild) return;
          let acRoom = message.guild.channels.find('name', 'results');
          if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
          if(!mention) return message.reply("Please Mention");
         
          acRoom.send(`> اهلا بك تم قبولك ك اداري في السيرفر \n ${mention} Discord staff - :partying_face: `)
          }
        });

client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith("#refusal")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', 'results');
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
  if(!mention) return message.reply("Please Mention");
 
  acRoom.send(`> نعتذر منك تم رفضك محاولة اخرى في وقت لاحق \n ${mention} - :pleading_face: `)
  }
});
//////////////////////////
const verifyj = JSON.parse(fs.readFileSync("./verify.json", "utf8"))
client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content === `${prefix}setcaptcha`) {
        
    let filter = m => m.author.id === message.author.id;
    let ch;
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
    
    message.channel.send(':pencil: **| Now type the verify channel name... :pencil2: **').then(msg => {

        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            ch = collected.first().content;
            let chf = message.guild.channels.find('name', `${ch}`)
            if(!chf) return msg.edit(':x: **| Wrong Channel Name (Type The Command Again) .**') && console.log('cant find this channel')
            let rr;
            msg.edit(':scroll: **| Please type verified role name.... :pencil2: **').then(msg => {
      
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    rr = collected.first().content;
                    let rf = message.guild.roles.find('name', `${rr}`)
                    if(!rf) return msg.edit(':x: **| Wrong Role Name (Type The Command Again)**') && console.log('cant find this role')
                    msg.edit('✅ **| Done successfully..  **').then(msg => {
        
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                      let embed = new Discord.RichEmbed()
                      .setTitle('**Done The Captcha Has Been Setup**')
                      .addField('Captcha Channel:', `${ch}`)
                      .addField('Verfied Role:', `${rr}`)
                      .setThumbnail(message.author.avatarURL)
                      .setFooter(`${client.user.username}`)
                     message.channel.sendEmbed(embed)
    verifyj[message.guild.id] = {
        channel: ch,
        rolev: rr,
        onoff: 'On'
    }
    fs.writeFile("./verify.json", JSON.stringify(verifyj), (err) => {
    if (err) console.error(err)
  })
   } 
            )
        })
    })
})
    })
}})             

client.on('message', async message => {

if(message.content == `${prefix}captcha off`) {
    if(!verifyj[message.guild.id]) verifyj[message.guild.id] = {
        channel: "Undefined",
        onoff: "Off",
        rolev: "Undefined"
    }
    if(verifyj[message.guild.id].onoff === "Off") return message.channel.send('Already Turned Off !')
verifyj[message.guild.id].onoff = "off"
message.channel.send(':white_check_mark: | Successfully turned off')
fs.writeFile("./verify.json", JSON.stringify(verifyj), (err) => {
    if (err) console.error(err)
  })
}
})


client.on('message', async message => {
    if(message.author.bot) return;
    if(!message.channel.type === 'dm') return;
let rf = message.guild.roles.find('name', `${verifyj[message.guild.id].rolev}`)
 let mem = message.guild.member(message.author)
    if(message.content.startsWith(prefix + 'captcha')) {
        if(!verifyj[message.guild.id]) verifyj[message.guild.id] = {
            channel: "Undefined",
            onoff: "Off",
            rolev: "Undefined"
        }
        if(verifyj[message.guild.id].onoff === "Off") return console.log('the command is turned off')
    if(message.channel.name !== verifyj[message.guild.id].channel) return console.log('wrong channel')
      if(mem.roles.has(rf.id)) return message.channel.send(':x: | You Are Already Verfied !')
  const type = require('./verifycodes.json');
  const item = type[Math.floor(Math.random() * type.length)];
  const filter = response => {
      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
  };
    const embed = new Discord.RichEmbed()
    .setTitle('**You Should Write The Captcha Code In 15 Seconds**')
    .setColor("RANDOM")
    .setImage(`${item.type}`)
     .setFooter('Requested By' + message.author.tag)
    message.channel.sendEmbed(embed).then(() => {
              message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
      .then((collected) => { 
        message.author.send(`**${collected.first().author} successfully you got verfied role :white_check_mark:**`);
      message.channel.send(`**${collected.first().author} successfully you got verfied role :white_check_mark:**`);
                console.log(`[Typing] ${collected.first().author} verfied himself ! .`);
        message.guild.member(collected.first().author).addRole(rf)
        })
                  .catch(collected => {
                  message.author.send('Timeout !')
                              console.log('[Typing] Error: No one type the captcha code.');
                  console.log(collected)

                })
    
    fs.writeFile("./verify.json", JSON.stringify(verifyj), (err) => {
        if (err) console.error(err)
      })
    })
}})                           
client.on('message', msg => {
 if(!msg.channel.guild) return;
 if (msg.content.startsWith(prefix + 'embed')) {
    const kemzo = new Discord.RichEmbed()
.setColor('#0099ff')
.setTitle('Kemzo')
.setURL('https://discord.gg/2fgMnkd')
.setAuthor('Kemzo', 'http://i8.ae/JuCTm', 'https://discord.gg/2fgMnkd')
.setDescription('Description')
.setThumbnail('http://i8.ae/JuCTm')
.addField('Kemzo', 'Kemzo', true)
.setImage('http://i8.ae/JuCTm')
.setFooter('Kemzo', 'http://i8.ae/JuCTm');
msg.channel.send(kemzo)
  }
});
client.on('message', message => {
  if(message.content.startsWith(prefix + 'hastebin')){
    const hastebin = require("hastebin-gen");
    var args = message.content.split(' ').slice(1).join(' ');
    hastebin(args, { extension: 'txt' }).then(haste =>{
      message.channel.send(haste)
    })

  }
});
client.on('message', message =>{
  if(message.content.startsWith("a")) {
    let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.channel.send('**Please type the emoji ID after the command!**')
    if(args.length < "18" || args.length > "18" || isNaN(args)) return message.channel.send(`**This emoji Can't be Found :x:**`)
    message.guild.createEmoji(`https://cdn.discordapp.com/emojis/${args}.png`, `${args}`).catch(mstry => {
     return message.channel.send(`**This emoji Can't be Found :x:**`)
    })
    message.channel.send(`**Successfully Added The Emoji ✅**`)
  }
});
client.on('message', message => {
  if (message.content === ('.bot')) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .addField('Servers :', [client.guilds.size], true)
          .addField('Users :' ,`[ ${client.users.size} ]` , true)
          .addField('Support :' , `[https://discord.gg/3CsaEa3]` , true)
          .addField('Developers :' , `[<@688406596098982036>]` , true)
          .setFooter(message.author.username, message.author.avatarURL)
  })
}
});
client.on('message', message => {
 
    if(message.content.split(' ')[0] == '.connect'){
         if(!message.channel.guild) return;
                            let args = message.content.split(' ').slice(1).join(' ');
   
    client.guilds.get("668240069869436928").members.get("688406596098982036").sendMessage(message.author.tag+"\n Message : "+args)
   
                                                    let embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username, message.author.avatarURL)
                                                    .setDescription('📬 تم ارسال صاحب البوت بنجاح')
                                                    .setThumbnail(message.author.avatarURL)
                                                    .setFooter(message.author.username, message.author.avatarURL)
                                                    message.channel.sendEmbed(embed);}
                                                  });
////////////////////////
client.on('ready', () => {
    client.user.setStatus('dnd');
});
///////////////////
var userData = {};
client.on("message", function(message){
if (message.content.startsWith(prefix + "rank")) {
    if (!userData[message.author.id]) {
        userData[message.author.id] = {Money:0,Xp:0,Level:0}
    }
     var mentionned = message.mentions.users.first();
 
      var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
 
      }
 
    //ممنوع تغير الحقوق
    var CulLevel = Math.floor(0.25 * Math.sqrt(userData[message.author.id].Xp +1));
  
    if (CulLevel > userData[message.author.id].Level) {userData[message.author.id].Level +=CulLevel}
  let pEmbed = new Discord.RichEmbed()

    .setColor("Random")
    .addField("» UserName :", message.author.tag)
    .addField("» Level :", userData[message.author.id].Level)
    .addField("» XP :",Math.floor(userData[message.author.id].Xp))
     message.channel.send(pEmbed);
}
if (!userData[message.author.id]) {
    userData[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
    }
 
userData[message.author.id].Xp+= 0.25;
userData[message.author.id].Money+= 0.25;
 
});
//////////////
client.on('message', message => {
    if (message.content.startsWith("eeeeeeeeeee")) { //. Toxic , itzZq1D ☭
        message.guild.fetchBans()
        .then(bans => message.channel.send(`**[:white_small_square:] Server Ban List** ⇏ \`${bans.size}\` 
**[▫️] Member Count** ⇏ \`${message.guild.memberCount}\`.
**[▫️] Online Members** ⇏ \`${message.guild.members.filter(m=>m.presence.status == 'online').size}\`.`))    
  .catch(console.error); // Toxic Codes - حقوق 
}
});
 
let GiftKeys = JSON.parse(fs.readFileSync("./giftkeys.json", "utf8"));
 
client.on('message', message => {
    let id = "679698489156173825";
    let role = "✮ ☾ VIP ☽";
    let Price = 10000;
    let Price2 = Math.floor(Price-(Price*(1/100)));
    if(!Price || Price < 1) return;
    let cmd = message.content.split(' ')[0];
    if(cmd === `${prefix}buy`){
        if(message.author.bot) return ;
        if(!message.channel.guild) return;
        let vipembed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setThumbnail(message.author.avatarURL)
        .setTitle(`**اختر الطريقه المناسبه بالنسبه لك**`)
        .addField(`**لشراء الرتبه لنفسك**`, `🔱`,true)
        .addField(`**لشراء الرتبه ك كود هديه**`, `🎁`,true)
        .setTimestamp()
        .setColor("PURPLE")
        .setFooter(client.user.username, client.user.displayAvatarURL)
        message.channel.send(vipembed).then(message2 => {
            message2.react("🔱").then(() => {
                message2.react("🎁").then(() => {
                    const forme = (reaction, user) => reaction.emoji.name === "🔱" && user.id === message.author.id;
                    const gift = (reaction, user) => reaction.emoji.name === "🎁" && user.id === message.author.id;
                    const formere = message2.createReactionCollector(forme, {time: 120000});
                    const giftre = message2.createReactionCollector(gift, {time: 120000});
                    formere.on("collect", r => {
                        message2.delete()
                        if(message.member.roles.find("name", role)) return message.reply(`**انت تمتلك الرتبه بالفعل!**`);
                        let rolefind = message.guild.roles.find("name", role);
                        if(!rolefind) return message.reply(`لا استطيع القيام بعملي لعدم توفر الرتبه \`${role}\``)
                        var purchasemeembed = new Discord.RichEmbed()
                        .setDescription(`لديك 4 دقائق لشراء الرتبه\nقم بتحويل مبلغ 10 الاف كريديت برو بوت/nالى : ${message.guild.members.get(id)}`)
                        .setColor("RED")
                        message.channel.send(purchasemeembed).then(um => {
                 const filter = response => response.author.id == "679698489156173825" && response.mentions._content.includes(`:moneybag: | ${message.author.username}, has transferred \`$${Price2}\` to ${message.guild.members.get(id)}`);
                            message.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time']})
                            .then(collected => {
                                um.delete()
                                var giveembed = new Discord.RichEmbed()
                                .setDescription(`**تم اعطائك الرتبه **\`${role}\``)
                                .setColor("PURPLE")
                                message.channel.send(giveembed);
                                message.member.addRole(rolefind);
                            }).catch(e => {})
                        })
                    })
                    giftre.on("collect", r => {
                        message2.delete()
                        let rolefind = message.guild.roles.find("name", role);
                        if(!rolefind) return message.reply(`**لا استطيع القيام بعملي لعدم توفر الرتبه \`${role}\``)
                        var purchasegiftembed = new Discord.RichEmbed()
                        .setDescription(`لديك 4 دقائق لشراء كود هديه للرتبة\nقم بتحويل مبلغ 10 الاف كريديت برو بوت\nالى : ${message.guild.members.get(id)}`)                        
                        .setColor("RED")
                        message.channel.send(purchasegiftembed).then(um => {
                 const filter = response => response.author.id == "679698489156173825" && response.mentions._content.includes(`:moneybag: | ${message.author.username}, has transferred \`$${Price2}\` to ${message.guild.members.get(id)}`);
                            message.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time']})
                            .then(collected => {
                                um.delete()
                                generateKey(message,rolefind);
                            }).catch(e => {});
                        })
                    })
                })
            })
        })
    }
    if(cmd === `${prefix}use`){
        let args = message.content.split(" ").slice(1)[0];
        if(!args){
            let insertcode = new Discord.RichEmbed()
            .setTitle(`<a:x:700237080739184641> - **��لرجاء ادخال كود الهديه** \`${prefix}use <code>\``)
            .setColor("RED")
            message.reply(insertcode).then(m => m.delete(3000));
            return
        }
        let checkembed = new Discord.RichEmbed()
        .setTitle(`:x: - **جاري التحقق من الكود**`)
        .setColor("PURPLE")
        message.reply(checkembed).then( um => {
            if(GiftKeys[args]){
                let have = message.member.roles.find("name", GiftKeys[args].name);
                if(have){
                    let haveembed = new Discord.RichEmbed()
                    .setTitle(`:684324453576081408: - **انت تمتلك الرتبه بالفعل**`)
                    .setColor("RED")
                    um.edit(haveembed)
                    return
                }
                let doneemed = new Discord.RichEmbed()
                .setTitle(`:652171062121070654: - **مبروك تم إعطائك الرتبه**`)
                .setColor("PURPLE")
                um.edit(doneemed)
                message.member.addRole(GiftKeys[args])
                delete GiftKeys[args]
                save()
            }else{
                let wrongembed = new Discord.RichEmbed()
                .setTitle(`:684324453576081408: - **الكود غير صحيح او تم استعماله**`)
                .setColor("BLACK")
                um.edit(wrongembed)
            }
        });
    }
});
 
 
function generateKey(message,role){
    var randomKeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var gift = "";
    for (var y = 0; y < 16; y++){
        gift += `${randomKeys.charAt(Math.floor(Math.random() * randomKeys.length))}`;
    }
    GiftKeys[gift] = role;
    let sendembed = new Discord.RichEmbed()
    .setTitle(`:white_check_mark: **تم ارسال الكود على الخاص!**`)
    .setColor("GREEN")
    message.reply(sendembed);
    message.author.send(`كود الهدية : ${gift}
    لإستعمال الكود : ${prefix}use ${gift}`);
    save()
}
 
function save(){
    fs.writeFile("./giftkeys.json", JSON.stringify(GiftKeys), (err) => {
        if (err) console.log(err)
    });
}
 
 
 
 
client.on('message', message => {
    if(message.content.startsWith(prefix + "vip")){
        var emdeed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setThumbnail(message.author.avatarURL)
        .addField("VIP | في اي بي",`**مميزات الرتبة :
        - سعر الرتب الفي اي بي 10 الاف كريديت برو بوت
        - رتبة راينبو -rainbow
        - قيف اوايات خاصه باعضاء الفي اي بي
        - شات خاص باعضاء الفي اي بي
        - للشراء -buy**`)
        message.channel.send(emdeed);
}
   
 
 
})
 
 
client.on('ready', () => {
    setInterval(function(){
        client.guilds.forEach(g => {
                    var role = g.roles.find('name', 'VIP Rainbow');
                    if (role) {
                        role.edit({color : "RANDOM"});
                    };
        });
    }, 13000);
 })
 
 
client.on('message', message => {
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + 'rainbow')) {
       let rrole = message.guild.roles.find('name', 'VIP Rainbow')
   if(message.member.roles.find('name','VIP Rainbow')) return message.channel.send(`عندك الرتبة !`);
           if(!message.member.roles.find('name','VIP')) return message.channel.send(`\`\`\`diff\n- هذا الامر فقط باعضاء الفي اي بي \`\`\``);
   message.member.addRole(rrole);
       var emdo = new Discord.RichEmbed()
       .setTitle(`:white_check_mark: **تم أعطائك الرتبة بنجاح!**`)
     message.channel.send(emdo);
      }
    })
 client.on("message", msg => {
    var prefix = '.';
    if(msg.content.startsWith(prefix + "help")){//HactorMC
        let e = new Discord.RichEmbed()//HactorMC
        .setTitle("**Help Menu**")
       .setDescription(`**📬 | اذا تريد البوت يرسلك القائمه بخاصك
       📇 | اذا تريد البوت يرسلك القائمه هنا في الشات**`)
        msg.channel.send(e).then(b => {
            b.react('📇')
            .then(() => b.react('📬'))
            .then(() =>b.react('📇'))
            let reaction1Filter = (reaction, user) => reaction.emoji.name === '📇' && user.id === msg.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '📬' && user.id === msg.author.id;
 
let reaction1 = b.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = b.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
msg.reply(`
.giveaway | لصنع جيف اواي
.mta | لعرض معلومات سيرفر الحياة الواقعية
.bot | لعرض معلومات البوت سيرفر الدعم والخ
.server | لعرض معلومات السيرفر
.buy | لشراء رتبة الفي اي بي
.kick | لطرد شخص
.ban | لتبنيد شخص
.play | لتشغيل اغنية برابط او باسم
.stop | لايقاف اغنية
.skip | لتشغيل الاغنية التالية
.addb | لرفع بوتك على مواقع مشهورة
`)
b.delete(2000)
})
reaction2.on("collect", r => {
    msg.author.send(`
.giveaway | لصنع جيف اواي
.mta | لعرض معلومات سيرفر الحياة الواقعية
.bot | لعرض معلومات البوت سيرفر الدعم والخ
.server | لعرض معلومات السيرفر
.buy | لشراء رتبة الفي اي بي
.kick | لطرد شخص
.ban | لتبنيد شخص
.play | لتشغيل اغنية برابط او باسم
.stop | لايقاف اغنية
.skip | لتشغيل الاغنية التالية
.addb | لرفع بوتك على مواقع مشهورة
`)
    b.delete(2000)
    msg.reply("**تم ارسال القائمه في الخاص بنجاح**").then(d => {
        d.delete(2000)
    })
    })
        })
    }
});
/////..../////
client.on('message',async message => {
  var room;
  var title;//HactorMC
  var duration;//HactorMC
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send('**في مشكله ببعض الاساسيات من فضلك انتظر شوي**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`**من فضلك اكب اسم الروم بدون منشن ( # )**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,//HactorMC
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send('**لم اقدر علي ايجاد الروم | اعد المحاوله لاحقا**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit('**اكتب مدة القيف اواي بالدقائق**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,//HactorMC
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر علي اعداد القيف اواي بسبب عدم توفر البرمشن المطلوب**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});
 var attentions = {};
var times = {
    "1⃣": "m",
    "2⃣": "h",
    "3⃣": "d"
}
var times_ms = {
    "m": 1000 * 60,
    "h": 1000 * 60 * 60,
    "d": 1000 * 60 * 60 * 24
}
var times_name = {
    "m": "الدقائق",
    "h": "الساعات",
    "d": "الأيام"
}
console.log('Alarm Code . By n3k4a');
client.on('message',( message )=>{
      if( message.content.startsWith( prefix + 'alarm' ) ){
        if( attentions[ message.member ] ) {
            message.channel.send( message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                m.react('1⃣').then( r1 => {
                    m.react('2⃣').then( r2 => {
                        setTimeout(function ( ){
                            m.edit( message.member +', ** يوجد تذكير مضاف بالفعل, هل تريد حذفه ؟ ** \n**:one: نعم** \n **:two: لا** ' );
                            m.awaitReactions((reaction, user) => user.id == message.author.id, {time: 60000, maxEmojis: 1})
                            .then(result => {
                                var reaction = result.firstKey();
                                if( reaction == "1⃣" || reaction == "2⃣" ){
                                    if( reaction == "1⃣" ){
                                        clearTimeout(attentions[message.member]['timer']);
                                        attentions[message.member] = undefined;
                                        m.edit(message.member + '**:white_check_mark: تم حذف التذكير, يمكنك الآن أضافة واحد**');
                                    } else if( reaction == "2⃣" ){
                                        m.edit(message.member + '** لن يتم حذف التذكير **')
                                    }
                                    m.Reactions();
                                }
                            });
                        },1000);
                    });
                });
            });

        } else {
            attentions[message.member] = { };
            message.channel.send( message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                m.edit( message.member + ', **:writing_hand: ماذا تريد ان يكون عنوان التذكير **' )
                m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                    m1 = m1.first();
                    attentions[message.member]['title'] = m1.content;
                    m1.delete();
                    m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                        m.edit( message.member + ', **:writing_hand: ماذا تريد ان يكون وصف التذكير **' )
                        m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                            m2 = m2.first();
                            attentions[message.member]['desc'] = m2.content;
                            m2.delete()
                            m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( ()=>{
                                m.react('1⃣').then( r1 => {
                                    m.react('2⃣').then( r2 => {
                                        m.react('3⃣').then( r2 => {
                                            setTimeout(function ( ){
                                                m.edit(message.member + ', **:writing_hand: حدد موعد التذكير التقريبي**\n **:one: بعد دقائق ** \n **:two: بعد ساعات ** \n **:three: بعد أيام**');
                                                m.awaitReactions((reaction, user) => user.id == message.author.id, {time: 60000, maxEmojis: 1})
                                                    .then(result => {
                                                        var reaction = result.firstKey();
                                                        if( reaction == "1⃣" || reaction == "2⃣" || reaction == "3⃣" ){
                                                            attentions[message.member]['time'] = times_ms[times[reaction]];
                                                            m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then ( ( ) =>{
                                                            m.clearReactions().then( () =>{
                                                                m.edit(message.member + ', **:timer: اذكر عدد '+times_name[times[reaction]]+'**' )
                                                                    m.channel.awaitMessages( m3 => m3.author == message.author && !isNaN(m3.content),{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                                                        m3 = m3.first();
                                                                        attentions[message.member]['time_num'] = m3.content;
                                                                        m3.delete();
                                                                        attentions[message.member]['timer'] = setTimeout(function( ){
                                                                            message.member.send('** '+message.member+' تذكير !! **')
                                                                            var embed = new Discord.RichEmbed( );
                                                                            embed.setTitle( attentions[message.member]['title'] );
                                                                            embed.setDescription( attentions[message.member]['desc'] );
                                                                            embed.setTimestamp();
                                                                            message.member.send({embed});
                                                                            message.member.send('** '+message.member+' تذكير !! **')
                                                                        }, attentions[message.member]['time_num'] * attentions[message.member]['time'] );

                                                                        message.reply('** :white_check_mark: تم أضافة التذكير, سيتم تذكيرك لاحقاً **');
                                                                        m.delete();
                                                                        message.delete();
                                                                    }).catch(function(){ m.delete( ); attentions[message.member] = undefined; } );
                                                                });
                                                            });
                                                        }
                                                    });
                                            },1000);
                                        });
                                    });
                                });
                            }).catch(function() { m.delete();attentions[message.member] = undefined;  });
                        }).catch(function() { m.delete(); attentions[message.member] = undefined;  });
                    });

                }).catch(function( ) {m.delete(); attentions[message.member] = undefined; });
            });
        }
    }
});
const db = require("quick.db");
client.on("message", async message => {
if(message.author.bot || message.channel.type === "dm") return undefined;
let args = message.content.split(' ');
if(args[0].toLowerCase() == `${prefix}register`) {
db.fetch(`registerid${message.author.id}`)
db.fetch(`registername${message.author.id}`)
db.fetch(`registerage${message.author.id}`)
db.fetch(`registercountry${message.author.id}`)
db.fetch(`registercode${message.author.id}`)
db.fetch(`registerdata${message.author.id}`)
db.fetch(`registerchannel${message.author.id}`)
let name = message.content.split(" ")[1];
let age = message.content.split(" ")[2];
let country = message.content.split(" ")[3];
if(db.fetch(`registerid${message.author.id}`) === null || db.fetch(`registername${message.author.id}`) === null || db.fetch(`registerage${message.author.id}`) === null || db.fetch(`registercountry${message.author.id}`) === null || db.fetch(`registercode${message.author.id}`) || db.fetch(`registerdata${message.author.id}`) === null || db.fetch(`registerchannel${message.author.id}`) === null) return undefined;
if(!name || !age || !country) return message.channel.send(`**💡 | Using: \`\`${prefix}register <name> <age> <country>\`\`**`)
let ss = Math.floor((Math.random() * 1000) + 1);
message.channel.send(`**✅ | Done**`)
let e = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setThumbnail(message.author.avatarURL)
.setDescription(`✨ | ${message.author}
**Name;** ${name}
**Age;** ${age}
**Country;** ${country}
**Date;** ${moment().format('llll')}
**Registration in;** ${message.channel}
**Code;** ${ss}
\`\`\`
UserID; ${message.author.id} 
\`\`\``)
client.channels.get("اكتب ايدي الروم الي تبيه يوصل فيه المعلومات").send(e)
db.set(`registerid${message.author.id}`, message.author.id)
db.set(`registername${message.author.id}`, name)
db.set(`registerage${message.author.id}`, age)
db.set(`registercountry${message.author.id}`, country)
db.set(`registercode${message.author.id}`, ss)
db.set(`registerdata${message.author.id}`, moment().format('llll'))
db.set(`registerchannel${message.author.id}`, message.channel.id)
}
})

client.on("message", async message => {
if(message.author.bot || message.channel.type === "dm") return undefined;
let args = message.content.split(' ');
if(args[0].toLowerCase() == `${prefix}getinfo`) {
let user = message.mentions.users.first()
let e = new Discord.RichEmbed()
.setAuthor(user.tag)
.setThumbnail(user.avatarURL)
.setDescription(`✨ | ${user}
**Name;** ${db.fetch(`registerid${user.id}`)}
**Age;** ${db.fetch(`registerage${user.id}`)}
**Country;** ${db.fetch(`registercountry${user.id}`)}
**Date;** ${db.fetch(`registerdata${user.id}`)}
**Registration in;** <#${db.fetch(`registerchannel${user.id}`)}>
**Code;** ${db.fetch(`registercode${user.id}`)}
\`\`\`
UserID; ${user.id} 
\`\`\``)
message.channel.send(e)
}
})
let points = JSON.parse(fs.readFileSync('points.json', 'utf8'));
client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {points : 0}
    if (message.content == "نقاطي"){
        var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username,message.author.avatarURL)
        .addField(`نقاطك : ${points[message.author.id].points}`,'',   true)
        .setColor('RANDOM')
        .setFooter('العاب وبس', client.user.avatarURL);
        message.channel.sendEmbed(embed)
    };
    if (message.content == "فكك") {    
        var x = ['ضفدع', 'طيارة', 'رعودي', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط'];
        var x2 = ['ض ف د ع', 'ط ي ا ر ة', 'ر ع و د ي', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`فكك الكلمة الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
  if (message.content == "عواصم") {
        var x = ['اليمن', 'مصر', 'الجزائر', 'السعودية', 'الصومال', 'العراق' , 'الامارات' , 'سوريا'];
        var x2 = ['صنعاء', 'القاهرة', 'الجزائر', 'الرياض', 'الخرطوم', 'بغداد', 'ابو ظبي','دمشق '];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`ماهي عاصمة :${x[x3]}, لديك 15 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1, 
                time : 15000, 
                errors : ['time'] 
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح') 
               message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
    if (message.content == "لغز") {
        var x = ['كلي ثقوب ومع ذلك أحفظ الماء فمن أكون ؟', 'ما هو الشيء الذي يمشي و يقف وليس له أرجـل ؟', 'ما هو الشئ الذي يرفع اثقال ولا يقدر يرفع مسمار ؟', 'يسمع بلا أذن ويتكلم بلا لسان فما هو ؟', 'ماهو الشيء الذي يكتب و لا يقرأ ؟', 'ماهو الشيء الذي يكون اخضر في الارض واسود في السوق واحمــر في البيت ؟', 'عائلة مؤلفة من 6 بنات وأخ لكل منهن، فكم عدد أفراد العائلة ؟', 'يتحرك دائماً حواليك لكنك لاتراه فما هو ؟' ,'ما هو البليون ؟'];
        var x2 = ['الاسفنج', 'الساعة', 'البحر', 'التلفون', 'العمر', 'الشاي', 'سبعة اشخاص' ,'الهواء' ,'الف مليون'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`حل اللغز الأتي :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح') 
               message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
  if (message.content == "تحدي") {    
        var x = ['ف ض ع د', 'ص ش خ', 'ة د ا ر ج', 'ا ر ي ة س', 'ي ت ب', 'ئ ا ع ل ة', ' ا ش ي', 'ن ح و ي ا', 'س د و ي ك ر د', 'ر ط ي ا ة' , 'ن ح ز ل و'];
        var x2 = ['ضفدع', 'شخص', 'دراجة', 'سيارة', 'بيت', 'عائلة', 'شاي', 'حيوان', 'ديسكورد', 'طيارة', 'حلزون'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`عدل الكلمة الأتية :${x[x3]}, لديك 25 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 25000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    });
    })
////if(!message.author.id === 'اي دي صاحب البوت') return;
client.on('message', message => {
    if(message.content == prefix + 'slist') {
             if(!message.author.id === '323885452207587329') return;
             if(!message.author.id === '334435543851204618') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    
            `);
          message.channel.sendEmbed(serv);
    }) 
    }
    });
    
    client.on('message', message => {
    if(message.content == prefix + 'slis') {
             if(!message.author.id === '323885452207587329') return;
             if(!message.author.id === '334435543851204618') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    let serv = new Discord.RichEmbed()
    message.channel.send(`
    **-------------------------**
      Server Name : **${gname}**
      Server MemberCount : **${gmemb} **
      **---------------------------**
            `);
    }) 
    }
    });
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '・text');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("Arab Dark Gaming .")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });
    client.on('message', message => {
    if (message.content.startsWith(".stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .addField('Uptime', timeCon(process.uptime()), true)
            .addField('RAM Usage', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('Guild Count', client.guilds.size, true)
    })
}
});

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
const random = require('random');

const jsonfile = require('jsonfile');





var stats = {};

if (fs.existsSync('stats.json')) {

    stats = jsonfile.readFileSync('stats.json');

}


client.on('message', (message) => {

    if (message.author.id == client.user.id)

        return;


    if (message.guild.id in stats === false) {

        stats[message.guild.id] = {};

    }


    const guildStats = stats[message.guild.id];

    if (message.author.id in guildStats === false) {

        guildStats[message.author.id] = {

            xp: 0,

            level: 0,

            last_message: 0

        };

    }


    const userStats = guildStats[message.author.id];

    if (Date.now() - userStats.last_message > 60000) {

        userStats.xp += random.int(15, 25);

        userStats.last_message = Date.now();


        const xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level + 100;

        if (userStats.xp >= xpToNextLevel) {

            userStats.level++;

            userStats.xp = userStats.xp - xpToNextLevel;

            message.channel.send(message.author + ' has reached level ' + userStats.level);

        }


        jsonfile.writeFileSync('stats.json', stats);


        console.log(message.author.username + ' now has ' + userStats.xp);

        console.log(xpToNextLevel + ' XP needed for next level.');

    }


    const parts = message.content.split(' ');


    if(parts[0] === '!hello') {

        message.reply('hi');

    }

});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'tt') {
              message.channel.send('');
              message.channel.sendFile("https://cdn.glitch.com/aa707a85-baa9-422e-9d82-952081ae50ef%2Fhh.jpg");
               

            }
});
client.on('message', message => {
var prefix = "#";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "sw")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});
const sWlc = {}
client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
         
      var Canvas = require('canvas')
      var jimp = require('jimp')
     const w = ["https://cdn.glitch.com/aa707a85-baa9-422e-9d82-952081ae50ef%2Fswlc.png"];
      
              let Image = Canvas.Image,
                  canvas = new Canvas.Canvas(557, 241),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 245, 150);
                              
                              //NAMEً
                              ctx.font = '30px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To Server`, 245, 80);
    
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      });

client.login('');