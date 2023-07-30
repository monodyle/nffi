const node_quicksort = require("./quicksort");
const rust_quicksort = require("../src/lib.js");
const input = require('./input')

const [_, __, lang] = process.argv

if (lang === 'rust') {
  rust_quicksort(input)
} else {
  node_quicksort(input)
}
