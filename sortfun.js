let myNumber = [16, 74, 95, 90, 56, 84, 78, 93];

// shot function use

let secondLargestNumber = myNumber.sort(function (a, b) {
    return a - b;
});

console.log(secondLargestNumber);
let result = secondLargestNumber[secondLargestNumber.length - 3];

console.log(result)