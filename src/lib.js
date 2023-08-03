const ffi = require('ffi-napi')

const lib = ffi.Library('./target/release/libnffi', {
  nth_prime: ['uint', ['uint']]
})

module.exports = lib.nth_prime
