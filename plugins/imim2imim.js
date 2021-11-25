const Julie = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('spammer');

Julie.addCommand({pattern: 'teaspam ?(.*)', fromMe: true, dontAddCommandList: true, desc: Lang.SPAM_DESC}, (async (message, match) => {

    await message.client.sendMessage(message.jid, 'Lang.NEED_WORD');

    if (match[1] === '') {
        return await message.client.sendMessage(message.jid, Lang.NEED_WORD);
    }

    // var spam = `${match[1]}`
    // var fin = spam.replace(/#/g, "\n");

    if (match[1] === 'ok') {
        
        await message.client.sendMessage(message.jid, 'i got it');

        Julie.addCommand({pattern: 'teaspame ?(.*)', fromMe: true, dontAddCommandList: true, desc: Lang.SPAM_DESC}, (async (message, match) => {
              
            
            await message.client.sendMessage(message.jid, 'Oh! No its working');

        }));

    }



}));
