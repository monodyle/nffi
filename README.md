# Node Foreign Function Interface

A Node using Rust as an addon.

## Development

1. Install nodejs deps: `yarn`
2. Build Rust dynamic lib `cargo build --release`
3. Generate random benchmark input: `node ./benchmark-input.js`

Happy coding!

## Benchmark: Get nth prime number

### Get 5th prime number

```bash
$ hyperfine --warmup 3 'node ./benchmark/node.js 5' 'node ./benchmark/rust.js 5'
Benchmark 1: node ./benchmark/node.js 5
  Time (mean ± σ):      26.3 ms ±   0.4 ms    [User: 21.3 ms, System: 4.6 ms]
  Range (min … max):    25.5 ms …  27.9 ms    111 runs

Benchmark 2: node ./benchmark/rust.js 5
  Time (mean ± σ):      84.9 ms ±   1.2 ms    [User: 138.9 ms, System: 13.5 ms]
  Range (min … max):    82.9 ms …  87.5 ms    35 runs

Summary
  node ./benchmark/node.js 5 ran
    3.22 ± 0.07 times faster than node ./benchmark/rust.js 5
```

### Get 50th prime number

```bash
$ hyperfine --warmup 10 'node ./benchmark/node.js 50' 'node ./benchmark/rust.js 50'
Benchmark 1: node ./benchmark/node.js 50
  Time (mean ± σ):      26.3 ms ±   0.4 ms    [User: 20.5 ms, System: 5.4 ms]
  Range (min … max):    25.7 ms …  28.8 ms    109 runs

Benchmark 2: node ./benchmark/rust.js 50
  Time (mean ± σ):      84.8 ms ±   1.5 ms    [User: 134.5 ms, System: 18.8 ms]
  Range (min … max):    81.8 ms …  89.0 ms    34 runs

Summary
  node ./benchmark/node.js 50 ran
    3.23 ± 0.08 times faster than node ./benchmark/rust.js 50
```

### Get 250th prime number

```bash
$ hyperfine --warmup 25 'node ./benchmark/node.js 250' 'node ./benchmark/rust.js 250'
Benchmark 1: node ./benchmark/node.js 250
  Time (mean ± σ):      27.8 ms ±   0.9 ms    [User: 23.4 ms, System: 4.0 ms]
  Range (min … max):    26.9 ms …  33.2 ms    106 runs

Benchmark 2: node ./benchmark/rust.js 250
  Time (mean ± σ):      84.6 ms ±   1.0 ms    [User: 131.4 ms, System: 21.0 ms]
  Range (min … max):    82.0 ms …  87.2 ms    34 runs

Summary
  node ./benchmark/node.js 250 ran
    3.05 ± 0.10 times faster than node ./benchmark/rust.js 250
```
