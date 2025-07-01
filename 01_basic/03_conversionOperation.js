let age = "21abc"

console.log(typeof age);
console.log(typeof (age));

let valueInNumber = Number(age)

console.log(typeof valueInNumber);
console.log(valueInNumber);

/* 
in this example we understand there is 
issue in js as it can convert a value that is
not integer into integer ,we can check that by valueInNumber
*/

// "21" ----> number 
//"21abc" ------> NaN
//true --> 1,false -->0

// for boolean conversion
//"" --> false
//"garvit" --> true

let someNumber = 33
let stringNumber = String(someNumber)

console.log(typeof stringNumber)
