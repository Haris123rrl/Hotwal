import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285936162097', 'haris', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285936162097'
global.packname = 'Clara - MD by'
global.author = '© haris'
global.namebot = '​Clara - MD'
global.wm = '© Clara By haris'
global.stickpack = 'Clara - MD by'
global.stickauth = '© haris'
// Link Sosmed
global.sig = 'https://www.instagram.com/har_is4215/'
global.sgh = 'https://github.com/Haris123rrl'
global.sgc = 'https://chat.whatsapp.com/CTOLdac0BmFCuIokIxqoIZ'
// Donasi
global.psaweria = 'soon'
global.ptrakterr = 'soon'
global.povo = '6285936162097'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = '3d27cc6592c983dd253f642f'
global.rose = ''
global.xyro = 'KX3eCMiOeA'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "KX3eCMiOeA",
    popcat : ''
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "KX3eCMiOeA",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
