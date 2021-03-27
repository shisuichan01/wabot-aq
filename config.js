global.owner = ['6281239836942'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit

// Sticker WM
global.packname = 'I hope you\'re fine'
global.author = 'Nurutomo'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
