// second largest number

function secondLargest(numbers) {
    let largest = numbers[0];
    let secondLarge = numbers[0];
    for (const number of numbers) {
        if (number > largest) {
            secondLarge = largest;
            largest = number;
        } else if (number > secondLargest) {
            secondLarge = number;
        }
    }
    return secondLarge;
}

const myArray = [46, 65, 86, 48, 90, 78, 80, 48];
const secondLargestNumber = secondLargest(myArray);
console.log(secondLargestNumber);


let newArray = [46, 65, 86, 48, 90, 78, 80, 48];

newArray.sort(function (a, b) {
    return a - b;
});
console.log(newArray);

let secondBig = newArray[newArray.length - 2]
console.log(secondBig);