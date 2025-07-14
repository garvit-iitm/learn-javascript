// this is my learning for JavaScript functions

function sayMyName () {
console. log ("G") ;
console. log ("A");
console. log ("R");
console. log ("V");
console. log ("I");
console. log ("T");
}
sayMyName () ;

function addTwoNumbers (number1, number2) {

let result = number1 + number2
return result
}
const result = addTwoNumbers (3, 5)

console. log("Result: ", result) ; 

function loginUserMessage (username) {
if (!username) {
console. log ("PLease enter a username") ;
return
}

return `${username} just logged in`
}
console. log (loginUserMessage ("garvit") )

