import fetch from "node-fetch"

let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) throw 'Masukan Promptnya\nExample:\n.diffusion2 ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K'
m.reply(wait)
let anu = `https://api.xyroinee.xyz/api/ai/stablediffusion?q=${text}&apikey=${global.xyro}`
conn.sendFile(m.chat, anu, 'anu.jpg', `Prompt: ${text}`, m)
}
handler.help = ['diffusion2']
handler.tags = ['ai']
handler.command = /^(diffusion2)$/i
handler.limit = true
export default handler