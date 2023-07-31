# Node Foreign Function Interface

A Node using Rust as an addon.

## Development

1. Install nodejs deps: `yarn`
2. Build Rust dynamic lib `cargo build --release`
3. Generate random benchmark input: `node ./benchmark-input.js`

Happy coding!

## Benchmark

### [Quicksort algorithm](https://en.wikipedia.org/wiki/Quicksort)

Input: 1 million record with random sorted

```bash
$ hyperfine --warmup 3 'node ./benchmark/index.js rust' 'node ./benchmark/index.js'
Benchmark 1: node ./benchmark/index.js rust
  Time (mean ± σ):      2.549 s ±  0.316 s    [User: 3.305 s, System: 0.244 s]
  Range (min … max):    2.249 s …  3.065 s    10 runs

Benchmark 2: node ./benchmark/index.js
  Time (mean ± σ):     283.0 ms ±   8.3 ms    [User: 334.2 ms, System: 34.4 ms]
  Range (min … max):   272.9 ms … 296.1 ms    10 runs

Summary
  node ./benchmark/index.js ran
    9.01 ± 1.15 times faster than node ./benchmark/index.js rust
```

```bash
$ time node ./benchmark/node.js
node quicksort: 92.759ms

________________________________________________________
Executed in  194.70 millis    fish           external
   usr time  174.27 millis   46.00 micros  174.23 millis
   sys time   20.68 millis  183.00 micros   20.50 millis

$ time node ./benchmark/rust.js
create IntArray type: 0.232ms
transform Array<number> to IntArray: 2.179s
rust quicksort: 69.323ms
transform IntArray to Array<number>: 381.43ms

________________________________________________________
Executed in    2.82 secs    fish           external
   usr time    2.91 secs   62.00 micros    2.91 secs
   sys time    0.31 secs  242.00 micros    0.31 secs
```
