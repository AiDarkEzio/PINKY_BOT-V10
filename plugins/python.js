const AiDarkEzio= require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');


AiDarkEzio.addCommand({pattern: 'git', fromMe: false, desc: "*Gives Ouner Dtls*"}, (async (message, match) => {

    // send a simple text!
    await message.client.sendMessage (message.jid, 'Oh hello there;', MessageType.text)
    await message.client.sendMessage (message.jid, 'My Owner Is *Ai Dark Ezio*', MessageType.text)

    // send a location!
    await message.client.sendMessage(message.jid, {degreesLatitude: 7.75042537, degreesLongitude: 80.11583603}, MessageType.location)
    await message.client.sendMessage (message.jid, 'Owner In City', MessageType.text)

    // send a contact!
    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                + 'VERSION:3.0\n' 
                + 'FN:Dark Ezio\n' // full name
                + 'ORG:Subadra Bro You Tube Chanel;\n' // the organization of the contact
                + 'TEL;type=CELL;type=VOICE;waid=94781564565:+94781564565\n' // WhatsApp ID + phone number
                + 'END:VCARD'
    await message.client.sendMessage(message.jid, {displayname: "⚜Dark Ezio✅", vcard: vcard}, MessageType.contact)

    // send a list message!
    const rows = [
        {title: 'Youtube', description: "Name: Subadra Bro\n\nUrl: https://youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ", rowId:"rowid1"},
        {title: 'Github', description: "Name: Ai Dark Ezio\n\nUrl: https://github.com/AiDarkEzio", rowId:"rowid2"},
        {title: 'FaceBook', description: "Name: Subadra Poshitha", rowId:"rowid1"},
        {title: 'WhatsApp', description: "Number: +94781564565", rowId:"rowid2"},
        {title: 'Gmail', description: "Mail: scienceposhithapr@gmail.com", rowId:"rowid1"},
        {title: 'Instagram', description: "Name: Subadra Poshitha", rowId:"rowid2"},
    ]
    const sections = [{title: "__Owner_Deta__", rows: rows}]
    const button = {
        buttonText: 'Click Me!',
        description: "*Owner in Thins*",
        sections: sections,
        listType: 1
    }
    await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    // send a buttons message!
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: 'Good'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'Best Developer'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'Good Friend For you'}, type: 1}
    ]
    const buttonMessage = {
        contentText: "Hi it's button message\nWhat Do U Think My Owner",
        footerText: 'Your think, click the button',
        buttons: buttons,
        headerType: 1
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

    // End
    await message.client.sendMessage (message.jid, 'Owner Dtls End', MessageType.text)
 }));