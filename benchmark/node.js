function nth_prime (n) {
  var primes = [2]
  for (var i = 3; primes.length < n; i += 2) {
    if (
      primes.every(function (prime) {
        return i % prime !== 0
      })
    )
      primes.push(i)
  }
  return primes[n - 1]
}

const [_, __, _input] = process.argv
nth_prime(Number(_input))
