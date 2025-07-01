// the following code is notes from my course on JavaScript learining

const { memo } = require("react");

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//---------------------------------learning stack and heap memory-----------------------------

// Stack memory is used for primitive datatypes
// Heap memory is used for non-primitive datatypes

//----------------------------------example 1 for non primitive type

let myDetails = {
    name: "garvit",
    age: 22,
    address: "bareilly"
}


let myDetails2 = myDetails; // yeh same jageh par point kar rahe hain or yeh reference type hai

myDetails2.name = "garvit kumar"; // yeh dono same jageh par point kar rahe hain isliye dono ka naam change ho jayega
console.log(myDetails.name); // garvit kumar
console.log(myDetails2.name); // garvit kumar

//---------------------------------example 2 for primitive type

let myName = "garvit";
let myName2 = "bhatnagar"; // yeh alag alag jageh par point kar rahe hain or yeh primitive type hai

myName2 = myName; // yeh ab myName ki value ko copy kar raha hai or yeh alag alag jageh par point kar rahe hain
myName2 = "garvit singh bhatnagar"; // yeh ab myName ki value ko change nahi karega


console.log(myName); // garvit
console.log(myName2); // garvit singh bhatnagar

