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
const Lang = Language.getString('scrapers');


Asena.addCommand({pattern: 'songs ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
    let arama = await yts(match[1]);
    arama = arama.all;
    if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
    var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text);

    let title = arama;
        
    await message.client.sendMessage(message.jid,title,MessageType.text);

    return await message.client.deleteMessage(message.jid, {id: reply.key.id, remoteJid: message.jid, fromMe: true});

}));