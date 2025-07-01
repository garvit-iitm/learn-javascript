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




//--------------------------------learning about operations-------------------------------------------



log(1 + "2");
console. log("1" + 2 + 2);
console. log(1 + 2 +"2");

console.log(3+4*5% 3);

//agar string first hai toh saare addition string samajh kar honge 
//or agar integer first hai toh additon operation ho jaega orr frr string kee tareh add hoga


console. log(+true); // this will print 1
// console. log(true+); // this will show an unexepected expression and hence error
console. log (+""); // this will print 0

//also learned about prefix and postfix operations from mdm js documentation