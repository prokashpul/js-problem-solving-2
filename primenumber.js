// Prime number check

function isPrime(numbers) {
    // error handling
    if (typeof numbers !== "number" || numbers < 2) {
        return "Oops You are input wrong ..";
    }
    // prime number checking

    for (let number = 2; number < numbers; number++) {
        if (numbers % number === 0) {
            return numbers + " is not a prime number";
        }
    }
    return numbers + " is a prime number";

}

const getPrime = isPrime(3);
console.log(getPrime)