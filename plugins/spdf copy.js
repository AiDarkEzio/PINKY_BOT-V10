let Asena = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let request = require('request');
let got = require("got");
let Config = require('../config');

let UV_DESC = "Converts audio to sound recording."
let UV_REPLY = "*You Must Reply to the Audio File!*"
let UV_PROC = "```Converting to Sound Recording..```"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'spdf ?(.*)', fromMe: true, desc: 'SPDF_DESC' }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage('SPDF_LINK');

    var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })

    await message.sendMessage('SPDF_PROC');

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf, filename: 'Alpha-spdf.pdf'})

    }));  
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'spdf ?(.*)', fromMe: false, desc: 'SPDF_DESC' }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage('SPDF_LINK');

    var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })

    await message.sendMessage('SPDF_PROC');

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf, filename: 'Alpha-spdf.pdf'})

    }));   
}
