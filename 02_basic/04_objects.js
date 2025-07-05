const tinderUser = new Object();
// it is not recommended to use new Object() to create an object
// it is a singleton object beacause it creates only one instance of object

const tinderUser1 = {}
// it is recommended to use object literal to create an object
// it is a non-singleton object because it creates multiple instances of object

tinderUser1.id = 1;
tinderUser1.name = "Garvit Singh Bhatnagar";
tinderUser1.isLoggedIn = true;

const regularUser = {
    email: "garvit@gmail.com ",
    fullname: {
        userfullname: {
            firstName: "Garvit",
            lastName: "Bhatnagar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName); // Garvit
console.log(regularUser.fullname); // { userfullname: { firstName: 'Garvit', lastName: 'Bhatnagar' } }


const object1 = {
    1: "one",
    2: "two",
}

const object2 = {
    3: "three",
    4: "four",
}

const object3 = Object.assign(object1, object2); // this will merge object1 and object2 into object3

const object4 = { ...object1, ...object2 }; // this will also merge object1 and object2 into object4 using spread operator

const object5 = Object.assign({}, object1, object2); // this will also merge object1 and object2 into object5 but it will create a new object

console.log(Object.keys(object1)); // [ '1', '2' ]
console.log(Object.values(object1)); // [ 'one', 'two' ]
console.log(Object.entries(object1)); // [ [ '1', 'one' ], [ '2', 'two' ] ]

console.log(object3.hasOwnProperty("1")); // true
console.log(object3.hasOwnProperty("5")); // false


//+++++++++++++++++++++++++++++++++ objects part 2 +++++++++++++++++++++++++++++++++++++++


const course ={
    courseName: "JavaScript",
    coursePrice: 999,
    courseDuration: "3 months",
}


const {courseName, coursePrice, courseDuration} = course; // destructuring assignment
console.log(courseName); // JavaScript
console.log(coursePrice); // 999
console.log(courseDuration); // 3 months

const {courseName: name, coursePrice: price, courseDuration: duration} = course; // renaming variables while destructuring
console.log(name); // JavaScript
console.log(price); // 999
console.log(duration); // 3 months



// json object notation
// in json object notation we use double quotes for keys and values

// {
//    "courseName": "JavaScript",
//    "coursePrice": 999,
//    "courseDuration": "3 months",
// }