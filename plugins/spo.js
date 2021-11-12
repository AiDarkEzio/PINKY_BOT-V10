/* sreezz/alpha*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');

Asena.addCommand({ pattern: 'spotify ?(.*)', fromMe: false, desc: "Download song from spotify" }, (async (message, match) => {

        const link = match[1]
    
         if (!link) return await message.client.sendMessage(message.jid, '```Give me a link```',MessageType.text)
    
        await axios
          .get(`https://api.lolhuman.xyz/api/spotify?apikey=https://github.com/BlackAmda&url=${link}`)
          .then(async (response) => {
            const {
              link,
              title,
            } = response.data.result
            
            await message.client.sendMessage(message.jid, '```Downloading pls wait.```', MessageType.text);
            const profileBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid, '```UPLOADING..```', MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(profileBuffer.data), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg'});
        });
 }));
