const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'cogr', fromMe: true, desc: "WP"}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = "https://img.jakpost.net/c/2017/08/24/2017_08_24_31477_1503558583._large.jpg";

    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━💘Pinky Bot💘━━━━━⛦
𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 Pinky 𝐛𝐨𝐭.
 
■□■□■□■□■□■□■□■□■□■□
 *Hi Friend!!❤️*
 *ඔයාලා බලනවා ඇති මේ මොකක්ද කියලා?🤔🤔🤔🤔🤔🤔*
link:-https://chat.whatsapp.com/Bud1dd31AueDpG1kpn2jnt
*☢️මේකෙන් ඔයාට ඕනම සින්දුවක් වීඩියෝ එකක් ටක් ගාලා  download  කරගන්න  පුලුවන්.😎*
*☢️ඒක විතරක් නෙමේ ඔයාට ඔයාගෙම නම දාලා එක එක විදිහේ  whatsapp dp හදා ගන්නත් පුලුවන්.😏Dp වර්ග 70 ක්‌ විතර තියෙනවා.🤪🤪*
*☢️තව ඉතින් ෆොටෝ  වීඩියෝ  edit කරන්නත් පුලුවන්.🤗*
*☢️කැමතිනම් ඇවිල්ලා බලන්න.ඔයාට සුබ දවසක්.🤜🤛*
*➡️මෙය ස්වයංක්‍රීය ගෲපයකි*
*➡️link,spam massages share කරන්න බෑ❌*             
*➡️ජරා video බෑ❌*
*➡️කෙල්ලොන්ට inbox මැසෙජ් දාන්න බෑ❌එහෙම කරොත් admin කෙනෙක්ට කියන්න*
*➡️1: .song ( අවශ්‍ය සින්දුවේ කෑල්ලක්) ලෙස ටයිප් කර ඔබට අවශ්‍ය සින්දුව ලබා ගත හැක.🥰*
*➡️2:.attp (ස්ටිකරෙයේ අඩංගු විය යුතු දේ) ලෙස ටයිප් කර ඔබට අවශ්‍ය ස්ටිකරයක් ලබා ගත හැක* 
*➡️3:.wallpaper ලෙස ටයිප් කර wallpapers ලබා ගත හැක.*
*➡️4:.video yt link (අවශ්‍ය වීඩීයෝ එක)*
*➡️6 .help  මෙනුව සදහා*
*➡️5 කුනුහරප බෑ*
💢link:-https://chat.whatsapp.com/Bud1dd31AueDpG1kpn2jnt
▣▣▣▣▣▣▣▣▣💘Pinky Bot💘▣▣▣▣▣▣▣▣▣▣▣
`}) 

}));
