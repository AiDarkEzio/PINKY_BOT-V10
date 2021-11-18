const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');

//============================== TTS ==================================================
const fs = require('fs');
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const Language = require('../language');
const { type } = require('os');
const Lang = Language.getString('scrapers');

const NEED_TEXT_SONG = "*😫Plz Enter Channel Name*"
const NO_RESULT = "*Sorry | Can't find your channel Detles*"
const DOWNLOADING_SONG = "*Uploding your Chanel Detles*"


Asena.addCommand({pattern: 'yt-chanel ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_TEXT_SONG,MessageType.text);    
    let arama = await yts(match[1]);
    let chanel = arama.channels;
    if(chanel.length < 1) return await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text);
    var reply = await message.client.sendMessage(message.jid,DOWNLOADING_SONG,MessageType.text);

    if(chanel.length == 1) {
        let type = chanel[0].type
        let name = chanel[0].name
        let url = chanel[0].url
        let title = chanel[0].title
        let image = chanel[0].image
        let thumbnail = chanel[0].thumbnail
        let videoCount = chanel[0].videoCountLabel
        let subCount = chanel[0].subCount

        await message.client.sendMessage(message.jid,"\nType: " + type + "\n\nName: " + name + "\n\nUrl: " + url + "\ntitle: " + title + "\n\nimage: " + image + "\n\nthumbnail: " + thumbnail + "\n\nvideoCount: " + videoCount + "\n\nsubCount: " + subCount,MessageType.text);

    }

    else {

        let type = chanel
        await message.client.sendMessage(message.jid,type,MessageType.text)
    
    }
        
    // await message.client.sendMessage(message.jid,,MessageType.text);

    // return await message.client.deleteMessage(message.jid, {id: reply.key.id, remoteJid: message.jid, fromMe: true});

}));