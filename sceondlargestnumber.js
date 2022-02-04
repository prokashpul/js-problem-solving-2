// second largest number define 

function secondLargest(numbers) {
    let largest = numbers[0];
    let secondLargestNumber = numbers[0];

    for (const number of numbers) {
        if (number > largest) {
            secondLargestNumber = largest;
            largest = number;
        } else if (number > secondLargestNumber) {
            secondLargestNumber = number;
        }
    }
    return secondLargestNumber;

}

// declare a number array 
const myNumbers = [58, 95, 20, 67, 38, 83, 49, 88, 90, 56];
console.log(secondLargest(myNumbers))