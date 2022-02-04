// fibonacci
/* 0,1,1,2,3,5,8,13,21....... */

function fibonacci(number) {
  let fibonacciList = 0;
  for (let i = 0; i < number; i++) {
    fibonacci = i - 1 + (i - 2);
  }
  return fibonacciList;
}
console.log(fibonacci(10));
