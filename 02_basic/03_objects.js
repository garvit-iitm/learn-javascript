/*when we create an object using constructor function 
than only one instance of object is created and we directly
create an object than we can create multiple instances of object
*/

// Object Literal

mysym = Symbol("mySymbol");


const person = {
  name: "John",
  age: 30,
  [mysym]:"hello",
  location: "New York",
  email: "john@gmail.com"
}

// Accessing object properties
console.log(person.name); // John
console.log(person["age"]); // 30

console.log(person[mysym]); // hello
//symbols are created by [] inside a object 

// Object.freeze(person) // Freezes the object, preventing any changes to it

person.greeting = function(){
  console.log('hello jsuser, ${this.name}');
}

console.log(person.greeting()); // hello jsuser, John
console.log(person.greeting); // undefined , it will return undefined because we are not calling the function
// it will return the function reference