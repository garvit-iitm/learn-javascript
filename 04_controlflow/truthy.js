const userEmail = "g@garvit.ai";

if (userEmail) {
  console.log("Email is provided");
}
else {
  console.log("Email is not provided");
} 


// falsy values in JavaScript
// false, 0, "", null, undefined, NaN ,BigInt -0n , 0 

// truthy values in JavaScript
// true, 1, " ", "0", [], {}, BigInt 1n,functions (){}


//nullish coalescing operator (??):null and undefined
// it returns the right-hand operand when the left-hand operand is null or undefined
// it is used to provide a default value when the left-hand operand is null or undefined

let val1;
// val1 = 5 ?? 10 ------> assigns 5 to val1
// val1 = null ?? 10 --------> assigns 10 to val1
// val1 = undefined ?? 15 --------> assigns 15 to val1
val1 = null ?? 10 ?? 20 // assigns 10 to val1 because the first operand is null


// ternary operator

// condition ? expressionIfTrue : expressionIfFalse;


