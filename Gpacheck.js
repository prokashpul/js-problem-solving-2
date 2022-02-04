// student Gpa Result check


const studentData = [{
        name: "Diba",
        mark: 77
    }, {
        name: "Santu",
        mark: 55
    },
    {
        name: "Shuvo",
        mark: 68
    }, {
        name: "Apurba",
        mark: 82
    },
    {
        name: "Prokash",
        mark: 30
    }, {
        name: "Mizan",
        mark: 95
    }
]


// declare a function name totalMarks

function totalMarks(Name) {

    if (typeof Name !== "string") {
        return "Wrong input";
    }
    let studentName = Name.toLowerCase();
    let result = studentName + " Oops ! your result is not found";

    for (let name of studentData) {
        let stName = name["name"].toLowerCase();
        let stMark = name.mark;
        if (stName == studentName) {

            if (stMark < 40) {
                result = "Hi ! " + stName + ", you are fail . your Mark is " + stMark;
            } else if (stMark >= 40 && stMark < 50) {
                result = "Hi ! " + stName + ", you are fail . your Mark is " + stMark;
            } else if (stMark >= 50 && stMark < 60) {
                result = "Hi ! " + stName + ", you Gat (B) . your Mark is " + stMark;
            } else if (stMark >= 60 && stMark < 70) {
                result = "Hi ! " + stName + ", you Gat (A-) . your Mark is " + stMark;
            } else if (stMark >= 70 && stMark < 80) {
                result = "Hi ! " + stName + ", you Gat (A) . your Mark is " + stMark;
            } else if (stMark >= 80 && stMark < 100) {
                result = "Hi ! " + stName + ", you Gat (A+) . your Mark is " + stMark;
            } else {
                result = "Hi ! " + stName + ", Oops ! your result is not found ";
            }

        }

    }
    return result;

}
let studentName1 = "santu";
let studentName2 = "diba";
let studentName3 = "Ratul";
console.log(totalMarks(studentName1));
console.log(totalMarks(studentName2));
console.log(totalMarks(studentName3));