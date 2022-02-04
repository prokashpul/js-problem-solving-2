/* 
6! = 6x5x4x3x2x1 
*/

function factorial(number) {
    let factorialTotal = 1;
    for (let i = 1; i < number + 1; i++) {
        factorialTotal = factorialTotal * i;
    }
    return factorialTotal;
}

console.log(factorial(3));

// fibonacci
/* 0,1,1,2,3,5,8,13,21....... */

function fibonacci(number) {
    let fibonacciList = [0, 1];
    for (let i = 2; i < number + 1; i++) {
        fibonacciList[i] = fibonacciList[i - 1] + fibonacciList[i - 2]
    }
    return fibonacciList;
}
console.log(fibonacci(10));