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
  console.time("create IntArray type");
  const IntArray = ArrayType("int");
  console.timeEnd("create IntArray type");
  console.time("transform Array<number> to IntArray");
  let data = new IntArray(arr);
  console.timeEnd("transform Array<number> to IntArray");
  // console.log(data.buffer)
  console.time("rust quicksort");
  lib.quicksort(data.buffer, data.length);
  console.timeEnd("rust quicksort");
  console.time("transform IntArray to Array<number>");
  const result = data.toArray();
  console.timeEnd("transform IntArray to Array<number>");
  return result;
}

module.exports = quicksort;
