import fetch from "node-fetch"


let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) throw 'Masukan Promptnya\nExample:\n.animedif2 neko girl, cute face, upper body, white hair, look at viewer'
m.reply(wait)
let anu = `https://api.xyroinee.xyz/api/ai/animediffusion2?q=${text}&apikey=${global.xyro}`
conn.sendFile(m.chat, anu, 'anu.jpg', `Prompt: ${text}`, m)
    
}
handler.help = ['animedif2']
handler.tags = ['ai']
handler.command = /^(animedif2)$/i
handler.limit = true
export default handler