// for each loop

const coding =['java', 'javascript', 'python', 'c++', 'c#'];

coding.forEach( function (item) {
    console.log(item);
})

// forEach with arrow function

coding.forEach( ( item ) => {
    console.log(`I love coding ${item}!`);
});

//array containing multiple objects [{},{},{}]
const arrayOfObjects = [
    { name: "Garvit", age: 21, country: "India" },
    { name: "Alice", age: 25, country: "USA" },
    { name: "Bob", age: 30, country: "UK" }
];


arrayOfObjects.forEach( (item) => {
    console.log(`Name: ${item.name}, Age: ${item.age}, Country: ${item.country}`);
});

