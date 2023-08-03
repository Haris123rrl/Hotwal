import fetch from "node-fetch"

let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) throw 'Masukan Promptnya\nExample:\n.diffusion neko girl, cute face, upper body, white hair, look at viewer'
m.reply(wait)
let anu = `https://api.xyroinee.xyz/api/ai/stablediffusion?q=${text}&apikey=${global.xyro}`
conn.sendFile(m.chat, anu, 'anu.jpg', `Prompt: ${text}`, m)

}
handler.help = ['diffusion']
handler.tags = ['ai']
handler.command = /^(diffusion)$/i
handler.limit = true
export default handler