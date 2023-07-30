# Node Foreign Function Interface

A Node using Rust as an addon.

## Development

1. Install nodejs deps: `yarn`
2. Build Rust dynamic lib `cargo build --release`
3. Generate random benchmark input: `node ./benchmark-input.js`

Happy coding!

## Benchmarks

Using [Quicksort algorithm](https://en.wikipedia.org/wiki/Quicksort) with random 1 million record.

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
