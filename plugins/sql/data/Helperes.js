/*
# Copyright (C) 2020 MuhammedKpln.
#
# WhatsAsena is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# WhatsAsena is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#
*/

function successfullMessage(msg) {
    return "✅ *Pinky Bot*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Pinky Bot*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *Pinky Bot*:  ```" + msg + "```"
}
function songsender(Nmae,Url,Time,Uploade_date,Views,Chanel_name) {
    return "\n»» ♪ Name : ```" + Nmae + "``` \n\n»» 💌 Link : ```" + Url + "``` \n\n»» 🕕 Running Time : ```" + Time + "``` \n\n»» ♻ Uploade Date : ```" + Uploade_date + "``` \n\n»» 👩‍💻 Views : ```" + Views + "``` \n\n»» 🆔 Chanel name : ```" + Chanel_name + "``` \n\n»» [ ᴛʏᴘᴇ: •ᴍᴘ𝟹 & •ᴍʀᴀ ]\n\n\n »» [ ᴜᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ ]««\n\n*And Plz Subscribe My Yt Chanel\nPlz\nPlz\nPlz\n\n»» [ https://youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ ]««"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage,
    songsender
}
