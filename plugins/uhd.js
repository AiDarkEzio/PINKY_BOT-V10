/* Codded by @sreezz-ai
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'hdwa', fromMe: false, desc: "```Give random HD wallpapers```" }, (async (message, match) => {

        var r_text = new Array ();
        
       r_text[0] = "https://images2.alphacoders.com/564/564835.jpg";
       r_text[1] = "https://images4.alphacoders.com/641/641968.jpg";
       r_text[2] = "https://images8.alphacoders.com/545/545909.jpg";
       r_text[3] = "https://images2.alphacoders.com/727/72732.png";
       r_text[4] = "https://images5.alphacoders.com/314/314574.png";
       r_text[5] = "https://images5.alphacoders.com/587/587597.jpg";
       r_text[6] = "https://images2.alphacoders.com/718/71840.jpg";
       r_text[7] = "https://images7.alphacoders.com/599/599379.jpg";
       r_text[8] = "https://images6.alphacoders.com/629/629544.jpg";
       r_text[9] = "https://images.alphacoders.com/545/545918.jpg";
       r_text[10] = "https://images3.alphacoders.com/648/648583.jpg";
       r_text[11] = "https://images8.alphacoders.com/632/632051.png";
       r_text[12] = "https://images8.alphacoders.com/128/128706.png";                   
       r_text[13] = "https://images7.alphacoders.com/736/736462.png";
       r_text[14] = "https://images4.alphacoders.com/106/106774.jpg";
       r_text[15] = "https://images.alphacoders.com/692/692362.png";
       r_text[16] = "https://images8.alphacoders.com/677/677543.jpg";
       r_text[17] = "https://images.alphacoders.com/178/178961.jpg";
       r_text[18] = "https://images4.alphacoders.com/596/596820.jpg";
       r_text[19] = "https://images4.alphacoders.com/206/206268.jpg";
       r_text[20] = "https://images6.alphacoders.com/613/613932.png";
       r_text[20] = "https://images5.alphacoders.com/613/613925.jpg";
       var i = Math.floor(21*Math.random())
       
       var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
       
        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.document, {filename: 'Alpha.jpg', mimetype: Mimetype.png})
        
     }));
