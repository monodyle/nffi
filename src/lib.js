const path = require("node:path");
const ffi = require("ffi-napi");
const ref = require("ref-napi");
const ArrayType = require("ref-array-di")(ref);

const lib = ffi.Library(
  path.join(__dirname, "..", "target", "release", "libnffi"),
  {
    quicksort: ["void", [ref.refType("int"), "int"]],
  }
);

/**
 * Quick sort from Rust
 * @param {Array<number>} arr Array input
 */
function quicksort(arr) {
  const IntArray = ArrayType("int");
  let data = new IntArray(arr);
  lib.quicksort(data.buffer, data.length);
  return data.toArray();
}

module.exports = quicksort;
