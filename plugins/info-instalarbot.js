import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler  = async (m, { conn }) => {
let texto = `
*ββ ππππΎππΈπ°π»*
> Tutorial: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
> Pagina Oficial: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
> Dashboard: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
> Panel: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
> Soporte: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley 

------------------------------------

*ββ ππππΎππΈπ°π»*
> Tutorial: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
> Pagina: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
> Soporte: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley

------------------------------------
` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'α΄Κα΄ α΄Κsα΄Ιͺα΄ - Κα΄α΄', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(instalarbot)/i
export default handler
