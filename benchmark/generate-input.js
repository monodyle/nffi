const fs = require('node:fs')
const path = require('node:path')

const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 

const a = Array.from({ length: 1_000_000 }, (_, i) => i+1)

fs.writeFileSync(path.join(__dirname, 'input.js'), `const input = ${JSON.stringify(shuffle(a))}
module.exports = input`)
