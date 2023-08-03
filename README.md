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

### Get 250th prime number

```bash
$ hyperfine --warmup 3 'node ./benchmark/node.js 250' 'node ./benchmark/rust.js 250'
Benchmark 1: node ./benchmark/node.js 250
  Time (mean ± σ):      28.5 ms ±   1.0 ms    [User: 23.4 ms, System: 4.8 ms]
  Range (min … max):    27.4 ms …  32.6 ms    105 runs

Benchmark 2: node ./benchmark/rust.js 250
  Time (mean ± σ):      86.9 ms ±   1.2 ms    [User: 140.5 ms, System: 18.0 ms]
  Range (min … max):    84.8 ms …  89.1 ms    34 runs

Summary
  node ./benchmark/node.js 250 ran
    3.05 ± 0.11 times faster than node ./benchmark/rust.js 250
```

### Get 25_000th prime number

```bash
$ hyperfine --warmup 3 'node ./benchmark/node.js 25000' 'node ./benchmark/rust.js 25000'
Benchmark 1: node ./benchmark/node.js 25000
  Time (mean ± σ):     978.4 ms ±  14.1 ms    [User: 970.5 ms, System: 8.0 ms]
  Range (min … max):   966.5 ms … 1015.4 ms    10 runs

Benchmark 2: node ./benchmark/rust.js 25000
  Time (mean ± σ):     807.7 ms ±   5.9 ms    [User: 863.5 ms, System: 14.9 ms]
  Range (min … max):   801.6 ms … 820.4 ms    10 runs

Summary
  node ./benchmark/rust.js 25000 ran
    1.21 ± 0.02 times faster than node ./benchmark/node.js 25000
```

### Get 250_000th prime number

```bash
$ hyperfine --warmup 3 'node ./benchmark/node.js 250000' 'node ./benchmark/rust.js 250000'
Benchmark 1: node ./benchmark/node.js 250000
  Time (mean ± σ):     94.420 s ±  0.976 s    [User: 94.407 s, System: 0.012 s]
  Range (min … max):   93.245 s … 96.012 s    10 runs

Benchmark 2: node ./benchmark/rust.js 250000
  Time (mean ± σ):     72.646 s ±  0.304 s    [User: 72.688 s, System: 0.026 s]
  Range (min … max):   72.333 s … 73.255 s    10 runs

Summary
  node ./benchmark/rust.js 250000 ran
    1.30 ± 0.01 times faster than node ./benchmark/node.js 250000
```
