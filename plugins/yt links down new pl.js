// const Asena = require('../events');
// const {MessageType,Mimetype} = require('@adiwajshing/baileys');
// const translatte = require('translatte');
// const config = require('../config');
// const LanguageDetect = require('languagedetect');
// const lngDetector = new LanguageDetect();
// const Heroku = require('heroku-client');
// const heroku = new Heroku({
//     token: config.HEROKU.API_KEY
// });
// let baseURI = '/apps/' + config.HEROKU.APP_NAME;
// let help = require('./sql/data/Helperes')
// //============================== LYRICS =============================================
// const axios = require('axios');
// const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
// const solenolyrics= require("solenolyrics"); 
// //============================== CURRENCY =============================================
// const { exchangeRates } = require('exchange-rates-api');
// const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
// //============================== TTS ==================================================
// const fs = require('fs');
// const https = require('https');
// const googleTTS = require('google-translate-tts');
// //=====================================================================================
// //============================== YOUTUBE ==============================================
// const ytdl = require('ytdl-core');
// const ffmpeg = require('fluent-ffmpeg');
// const yts = require( 'yt-search' )
// const got = require("got");
// const ID3Writer = require('browser-id3-writer');
// const SpotifyWebApi = require('spotify-web-api-node');

// const spotifyApi = new SpotifyWebApi({
//     clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
//     clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
// });
// //=====================================================================================
// const Language = require('../language');
// const Lang = Language.getString('scrapers');
// const Glang = Language.getString('github');
// const Slang = Language.getString('lyrics');
// const Clang = Language.getString('covid');

// const wiki = require('wikijs').default;
// var gis = require('g-i-s');

// var dlang_dsc = ''
// var closer_res = ''
// var dlang_lang = ''
// var dlang_similarity = ''
// var dlang_other = ''
// var dlang_input = ''


// Asena.addCommand({pattern: 'song ?(.*)', fromMe: true, desc: Lang.SONG_DESC}, (async (message, match) => { 

//     if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);
    
    
    
//     let arama = await yts(match[1]);
//     songs = arama.videos;
//     if(songs.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
//     var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text);

//     let title = songs[0].title.replace(' ', '+');
//     let stream = ytdl(songs[0].videoId, {
//         quality: 'highestaudio',
//     });

//     let name = songs[0].title
//     let url = songs[0].url
//     let time = songs[0].timestamp
//     let ago = songs[0].ago
//     let views = songs[0].views
//     let cname = songs[0].author.name

//     got.stream(songs[0].image).pipe(fs.createWriteStream(title + '.jpg'));
//     ffmpeg(stream)
//         .audioBitrate(320)
//         .save('./' + title + '.mp3')
//         .on('end', async () => {
//             const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
//             writer.setFrame('TIT2', songs[0].title)
//                 .setFrame('TPE1', [songs[0].author.name])
//                 .setFrame('APIC', {
//                     type: 3,
//                     data: fs.readFileSync(title + '.jpg'),
//                     description: songs[0].description
//                 });
//             writer.addTag();

//             reply = await message.client.sendMessage(message.jid, fs.readFileSync('./' + title + '.jpg'), MessageType.image, {caption: help.songsender(name,url,time,ago,views,cname) });
//             await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
//             await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg', contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: message.data});
//             await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: message.data, ptt: false});
//         });
// }));


// Asena.addCommand({pattern: 'video ?(.*)', fromMe: true, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

//     if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    

//     var VID = '';
//     try {
//         if (match[1].includes('watch')) {
//             var tsts = match[1].replace('watch?v=', '')
//             var alal = tsts.split('/')[3]
//             VID = alal
//         } else {     
//             VID = match[1].split('/')[3]
//         }
//     } catch {
//         return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
//     }
//     var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

//     var yt = ytdl(VID, {
//         filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)
//     });

//     yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

//     yt.on('end', async () => {
//         reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
//         await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4, quoted: message.data});
//     });

// }));