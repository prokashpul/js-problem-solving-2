// triangle height 8 and base 12 calculate area

//we know triangle area = (base X height)X 1/2

function triangleArea(base, height) {
    let area = (base * height) * 1 / 2;
    return area;
}

console.log(triangleArea(12, 8));

// triangle base 12 , side1 8 ,side 5
/* 
 semi-perimeter = (side1  + side2 + side3) / 2 ;
 area = Math.sqrt(s(s-side1)(s-side2)(s-side3));
 
 */

function triangleArea1(side1, side2, side3) {
    // semi-perimeter
    let s = (side1 + side2 + side3) / 2
    console.log(s)
    // triangle area
    let trArea = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return trArea.toFixed(2);
}

const side1 = 12;
const side2 = 8;
const side3 = 5;
console.log(triangleArea1(side1, side2, side3))