const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const text2image = require('text2image')
const axios = require('axios')
const font = text2image.loadFont('../media/font/DS.ttf')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd

Asena.addCommand({pattern: 'nin ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
    await message.sendMessage("I got cmd");

    // PNG
    text2image.convert(font, 'Hello, World!', 0, 0, 72).then(buffer => {
        await message.sendMessage("I got imag & sending");
         // <Buffer 89 50 4e ...
        await message.client.sendMessage(message.jid, fs.writeFileSync('hello_world.png', buffer), MessageType.image, { caption: Config.ALIVEMSG, quoted: message.data });
    })

    await message.sendMessage("I got imag & sending");
    
    await message.sendMessage("uplode it");
}));