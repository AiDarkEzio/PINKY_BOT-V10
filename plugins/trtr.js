const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const config = require('../config');
const fs = require('fs');
//=====================================================================================
const Language = require('../language');


Asena.addCommand({pattern: 'saong ?(.*)', fromMe: true, desc: "SONG_DESC"}, (async (message, match) => { 
 
let content = fs.readFileSync('../media/picture/12324543976.jpg') // change for file type
const media = await message.client.prepareMessage(message.jid, content, MessageType.image) // change for file type

message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text); 

const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
]
const buttonMessage = {
    contentText: "Hi it's button message",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)


}));

