//here is the global scope
let globalVar = "I am global";


function localScopeExample() {
    // this is the local scope
    let localVar = "I am local";
    console.log(globalVar); // Accessing global variable
    console.log(localVar); // Accessing local variable
}   

let a = 300
if (true) {
let a = 10
const b = 20
console. log ("INNER: ", a);// Accessing inner 'a' ........output:10
}

console. log(a);// Accessing outer 'a' ........output:300


//just remember that the scope is different in code encvironments like browser and node.js
//in browser, the global scope is the window object
//in node.js, the global scope is the global object

//=========================================================================================================================


//learning hosting in JavaScript
//hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of
//their containing scope during the compile phase, before the code is executed.

function hoistingExample() {
    console.log(myVar); // undefined, because of hoisting
    let myVar = "I am hoisted";
    console.log(myVar); // "I am hoisted"
}
hoistingExample();      