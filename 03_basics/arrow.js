//this keyword current context ko refer karta hai
//this keyword ko use karne se function ke andar current context ka access milta hai

const user = {
username: "garvit",
price: 999,

welcomeMessage: function () {
	console.log(`${this.username}, welcome to website`);

}
}

user.welcomeMessage(); // "garvit, welcome to website"


//this keyword current context ki baat karta hai, jo bhi function ke andar hai
//agar function kisi object ke andar hai, to this keyword us object ko refer karega
//agar function global scope me hai, to this keyword global object ko refer karega

//browser ke andar jo global object hai, wo window object hai
//node.js ke andar jo global object hai, wo global object hai

//node.js ke andar console.log ke andar this keyword ko use karne se global object ka access milta hai
console.log(this); // this will talk about the global context

//in browser, this will refer to the window object

function myName()    {
    let username = "Garvit";
    console.log(this.username); // undefined, because 'this' cannot be used in a function expression
}

const myName1 = function() {
    let username = "Garvit";
    console.log(this.username); // undefined, because 'this' cannot be used in a function expression
}

const myName2 = () => {
    let username = "Garvit";
    console.log(this.username); // undefined, because 'this' cannot be used in a function expression
}


() => {} //this is the sytntax for arrow function
//arrow funcion ke paas apna khud ka this nahi hota
//arrow function apne parent context ka this use karta hai
//arrow function ke andar this ka use karne se parent context ka this milega


const add = (num1, num2) => ( num1 + num2 ) 
// this is implicit return syntax for arrow function

console.log(add(5, 10)); // 15