//Convert the string "123" to a number and add 7. (0.5 Grade)
//• Output Example: 130
let result = Number("123") + 7;
console.log(result);

//-------------------------------------------------------
//Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
//• Input Example: 0
//• Output Example: "Invalid"
let variable = 0;
if (!variable) {
    console.log("Invalid");
}
//--------------------------------------------------------
// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// • Output Example:1, 3, 5, 7, 9


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue
    }
    console.log(i);
}


//.......................................................
//Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// Input Example: [1, 2, 3, 4, 5]
// Output Example: [2,4]

let i = [1, 2, 3, 4, 5,]
console.log(i.filter((num) => num % 2 === 0));
//.......................................................
//  Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
// • Input Example: [1, 2, 3], [4, 5, 6]
// • Output Example: [1, 2, 3, 4, 5, 6] 

let numbers = [1, 2, 3,];
let towNumbers = [4, 5, 6];
let combinedNumbers = [...numbers, ...towNumbers];
console.log(combinedNumbers);
//.......................................................
//  6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
// • Input Example: 2
// • Output Example: “Monday”
switch (2) {
    case 1:
        console.log(" Sunday");
        break;
    case 2:
        console.log(" Monday");
        break;
    case 3:
        console.log(" Tuesday");
        break;
    case 4:
        console.log(" Wednesday");
        break;
    case 5:
        console.log(" Thursday");
        break;
    case 6:
        console.log(" Friday");
        break;
    case 7:
        console.log(" Saturday");
}
//.......................................................
//Create an array of strings and return their lengths using map method (0.5 Grade)
//• Input Example: ["a", "ab", "abc"]
//• Output Example: [1, 2, 3]

const words = ["a", "ab", "abc",];
const result = words.map(word => word.length)
console.log(result);

//.......................................................
// Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
// • Input Example: 15
// • Output Example: “Divisible by both”
let a = 3;
let b = 5;
function number(num) {

    if (num % a) {
        console.log("  divion")
    } else if (num % a) {
        console.log("  divion")
    }
    else {
        console.log("Divisible by both");
    }

} number()
//.......................................................
// Write a function using arrow syntax to return the square of a number (0.5 Grade)
// • Input Example: 5
// • Output Example: 25
function number(num) {
    return num ** 2;
};
console.log(number(5))
//.......................................................
// 10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// • Input Example: const person = {name: 'John', age: 25}
// • Output Example: 'John is 25 years old'
function str() {
    const person = { name: 'John', age: 25 }
    const { name, age } = person;
    console.log(`'${name} is ${age} years old'`)
} str();
//.......................................................
// 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15

function number(a, c, f, h, l) {
    return a + c + f + h + l

} console.log(number(1, 2, 3, 4, 5))

//.......................................................
// 12.Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
// • Output Example: “Success”


function getData() {
    return new Promise((resolve, reject) => {
        resolve("Success”);
      //
    });
} console.log(getData())

//.......................................................
// 13. Write a function to find the largest number in an array. (0.5 Grade)
// • Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargest([1, 3, 7, 2, 4]));
//.......................................................
// Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
// • Input Example: name: "John", age: 30}
// • Output Example: ["name", "age"]

function getKeys(obj) {
    return Object.keys(obj);
}

const user = {
    name: "John",
    age: 30
};

console.log(getKeys(user));

//.......................................................
// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]

function str() {
    let a = "The quick brown fox";
    console.log(a.split(" "))
} str();
//.......................................................