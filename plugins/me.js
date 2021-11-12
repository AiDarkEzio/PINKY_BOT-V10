const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'me', fromMe: true, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/QCq63J7/my-logo-2.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦Pinky❤️⃝➤⃟̱̱̱̱̄̄̄̄𝕤𝕞𝕒𝕣𝕥 𝕓𝕠𝕥⛦
════════════════════
     🐼_𝙒𝙊𝙍𝙆𝙄𝙉𝙂 𝘼𝙎 𝙋𝙐𝘽𝙇𝙄𝘾_🐼 ══════════════════
➣:𝙉𝙀𝙀𝘿 𝙏𝙊 𝙈𝘼𝙆𝙀 𝘽𝙊𝙏 𝙇𝙄𝙆𝙀 𝘼𝙎 𝙈𝙀🥺
⭕➣https://github.com
➣:𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙊𝙐𝙍 𝘾𝙃𝘼𝙉𝙉𝙀𝙇
⭕➣https://www.youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ
➣:𝙈𝘼𝙄𝙉 𝙂𝙍𝙊𝙐𝙋𝙎
⭕➣https://chat.whatsapp.com/Bud1dd31AueDpG1kpn2jnt
➣:𝙊𝙐𝙍 𝙀𝘿𝙐𝘾𝘼𝙏𝙄𝙊𝙉𝘼𝙇 𝙂𝙍𝙊𝙐𝙋
⭕➣https://chat.whatsapp.com/I0r4gwOm1xgCrhdOGfa748
➣:𝙊𝙒𝙉𝙀𝙍
⭕➣https://wa.me/message/941539856
➣:𝘾𝙊𝘿𝙀𝘿 𝘽𝙔
⭕➣Subadra Poshitha
══════════════════
`}) 

}));
