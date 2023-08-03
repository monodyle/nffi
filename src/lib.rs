#[no_mangle]
fn nth_prime(n: usize) -> usize {
    let mut primes = vec![2];
    let mut i = 3;
    while primes.len() < n {
        if primes.iter().all(|&prime| i % prime != 0) {
            primes.push(i);
        }
        i += 2;
    }
    *primes.last().unwrap()
}
