// Calculate Electricity  bill
//for first 100 unit price 5tk per unit
//for more than 100 unit price 6tk per unit
//for more than 200 unit price 7tk per unit


function electricityBill(unit) {
    // error handling 
    if (typeof unit != "number" || 0 >= unit) {
        return "OopS"
    }

    let billAmount; // set a undefine variable
    if (unit <= 100) {
        billAmount = unit * 5; //first 100 unit bill 
    } else if (unit > 200) {
        let firstBill = 100 * 5;
        let secondBill = 100 * 6;
        let remainingBill = (unit - 200) * 7; // 200 up unit bill
        billAmount = firstBill + secondBill + remainingBill;
    } else if (unit > 100) {
        let firstBill = 100 * 5;
        let remainingBill = (unit - 100) * 6; //100 up unit bill
        billAmount = firstBill + remainingBill;
    }
    return billAmount;

}

const totalBillUnit = electricityBill(10);
console.log(totalBillUnit, "Taka");