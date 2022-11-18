// prime number 2,3,4,5,6,7,8,9,10

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        } 
    }
    return true;
}
console.log(isPrime(6));