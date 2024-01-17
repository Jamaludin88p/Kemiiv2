let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let list = [{
      displayName: "Kemii",
      vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Kemii\nFN:Kemii\nitem1.TEL;waid=${nomorown}:${nomorown}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:dcode.kemii@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:http://github.com/decode-kemii\nitem3.X-ABLabel:Internet\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      }, {
      displayName: "Kiku - Wabot",
      vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Denis\nFN:Kiku - Wabot\nitem1.TEL;waid=62889808700677:62889808700677\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:dcode.kemii@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:http://github.com/dcode-kemii\nitem3.X-ABLabel:Internet\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      }];
   conn.sendMessage(m.chat, {
            contacts: {
                displayName: `${list.length} Kontak`,
                contacts: list
            }
        }, { quoted: m })
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler