#! usr/bin/env node
var primes = [];
var fs = require('fs');
var outfile = "primes.txt";
primes.push(2);
primes.push(3);

function isprime(number) {
    for (var i = 2; i <= Math.sqrt(number); ++i) {
        if (number%i==0) {
            return false;
        }
    }
    return true;
}
var j = 4;
for (;;) {
    if (primes.length==100) {
        break;
    }
    if (isprime(j)) {
        primes.push(j);
        ++j;
    }
    ++j;
}
fs.writeFileSync(outfile,primes);

