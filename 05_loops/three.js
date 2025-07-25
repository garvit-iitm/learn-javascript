//for of 

const array = [1, 2, 3, 4, 5];

for (const num of array) {
    console.log(num);
}

const greet = "Hello World";

for (const char of greet) {
    console.log(`Each character of greet is : ${char}`);
}

//map
// it is object that holds key value pairs
//it contain unique keys
const map = new Map();
map.set("name", "Garvit");
map.set("age", 21);
map.set("country", "India");

console.log(map);

for (const [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
}

// object is not iterable using for of loop
// but we can use for in loop to iterate over object properties
// for in loop is used to iterate over the properties of an object
const obj = {
    name: "Garvit",
    age: 21,
    country: "India"
};


for (const key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`);
}
