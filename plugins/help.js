// const AiDarkEzio = require("../events");
// const Config = require("../config");
// const fs = require('fs');
// const config = require("../config");
// const hrs = new Date().getHours({ timeZone: 'Asia/Colombo' })

// var wish = ''
// if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
// if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
// if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
// if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

// const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//         var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
//         var ov_time = new Date().toLocaleString('LK', { timeZone: 'Asia/Colombo' }).split(' ')[1]

// let caption = `
// ╭──────────────────╮
// ⊢‒‒‒⋈ PINKY ⋈‒‒‒⊣
// ╭──────────────────╯
// | ╭──────────●●►
// | │🔰MAIN BOT DTLS
// | │     ───────
// | │
// │ ┣𝕾⃝🌺 🌼HEY Bro, ${wish}
// | │
// | │Dᴀᴛᴇ : ${utch}
// | │
// | │Tɪᴍᴇ : ${ov_time}
// | │
// | │Wᴏʀᴋ Tʏᴘᴇ : ${config.WORKTYPE}
// | │
// | │Lᴀɴɢ : ${config.LANG}
// | │
// | │Aᴜᴛᴏ Bɪᴏ : ${config.AUTOBİO}
// | │
// | │Fᴜʟʟ Eᴠᴀ : ${config.TALKING_PINKY}
// | │
// | │Cᴏᴜɴᴛᴇᴅ Cᴏᴍᴍᴀɴᴅs : 127
// | │
// | ╰───────────●●►
// |    Ⓒ︎ | _𝙋𝙄𝙉𝙆𝙔_𝘽𝙊𝙏ᵗᵐ_
// ╰──────────────────╯
// `

// let pp

// if (Config.WORKTYPE == 'private') {

//   AiDarkEzio.addCommand(
//     { pattern: "help ?(.*)", fromMe: true, dontAddCommandList: false },
//     async (message, match) => {
//       let CMD_HELP = "";
//       AiDarkEzio.commands.map(async (command) => {
//         if (
//           command.dontAddCommandList === false &&
//           command.pattern !== undefined
//         ) {
//           try {
//             var match = command.pattern
//               .toString()
//               .match(/(\W*)([A-Za-z43ğüşiöç]*)/);
//           } catch {
//             var match = [command.pattern];
//           }
  
//           let HANDLER = "";
  
//           if (/\[(\W*)\]/.test(Config.HANDLERS)) {
//             HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
//           } else {
//             HANDLER = ".";
//           }
//           CMD_HELP +=
//             (match.length >= 3 ? HANDLER + match[2] : command.pattern) +
//             (command.desc === ""
//               ? "\n\n"
//               : " ".repeat(8 - match[2].length) + " : ");
//           if (command.desc !== "")
//             CMD_HELP += command.desc + (command.usage === "" ? "\n\n" : "\n\n");
//         }
//       });
//       try { pp = await message.client.getProfilePicture(message.jid.includes('-') ? message.data.participant : message.jid ); } catch { pp = await message.client.getProfilePicture(); }
//       await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: caption + "```" + CMD_HELP + "```", quoted: message.data }); });

//       return
//     }
//   );
// }
// else if (Config.WORKTYPE == 'public') {
//   AiDarkEzio.addCommand(
//     { pattern: "help ?(.*)", fromMe: false, dontAddCommandList: false },
//     async (message, match) => {
//       let CMD_HELP = "";
//       AiDarkEzio.commands.map(async (command) => {
//         if (
//           command.dontAddCommandList === false &&
//           command.pattern !== undefined
//         ) {
//           try {
//             var match = command.pattern
//               .toString()
//               .match(/(\W*)([A-Za-z43ğüşiöç]*)/);
//           } catch {
//             var match = [command.pattern];
//           }
  
//           let HANDLER = "";
  
//           if (/\[(\W*)\]/.test(Config.HANDLERS)) {
//             HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
//           } else {
//             HANDLER = ".";
//           }
//           CMD_HELP += '🎀' + 
//             (match.length >= 3 ? HANDLER + match[2] : command.pattern) +
//             (command.desc === ""
//               ? "\n\n"
//               : " ".repeat(8 - match[2].length) + "\n🧩");
//           if (command.desc !== "")
//             CMD_HELP += command.desc + (command.usage === "" ? "\n\n" : "\n\n");
//         }
//       });

//       try { pp = await message.client.getProfilePicture(message.jid.includes('-') ? message.data.participant : message.jid ); } catch { pp = await message.client.getProfilePicture(); }
//       await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: caption + "```" + CMD_HELP + "```", quoted: message.data }); });

//       return
//     }
//   );
// }

