// Function declaration jo ek number ko 5 se multiply karega
function multipleBy5(num) {
    return num * 5
}

// Functions JS me first-class citizens hote hain — iska matlab:
// 1. Function ko variable me store kar sakte ho
// 2. Function ko dusre function me pass kar sakte ho
// 3. Function ke sath properties/methods attach kar sakte ho jaise ek object

multipleBy5.power = 2 // yaha hum ek custom property add kar rahe hain function object me

console.log(multipleBy5(5));       // Output: 25 (function execute hua)
console.log(multipleBy5.power);    // Output: 2  (function ka custom property access)
console.log(multipleBy5.prototype); 
// Output: {} (ye ek empty object hai jo by default har function ke sath aata hai
//             aur yahi object "prototype chain" banane ke kaam aata hai jab 'new' use hota hai)


// ----------------------------------------------
// Constructor function (PascalCase naming convention usually hoti hai)
function createUser(username, score) {
    // 'new' lagane par 'this' ek naya empty object ban jata hai
    // Example: this = {}
    this.username = username
    this.score = score
    // Agar 'new' lagaya hai to by default 'this' return hota hai
}

// Constructor function ka prototype modify kar rahe hain
// 'prototype' ek object hota hai jisme methods store karte hain,
// taaki sab objects us method ko share karein (memory efficient)
createUser.prototype.increment = function() {
    this.score++  // 'this' us object ko point karega jisne function call kiya
}

createUser.prototype.printMe = function() {
    console.log(`price is ${this.score}`);
}


// 'new' keyword ke sath object ban raha hai
const chai = new createUser("chai", 25)
// 'new' ke steps:
// 1. Ek empty object banata hai → {}
// 2. is object ko link karta hai constructor ke prototype se
// 3. constructor function call karta hai, 'this' ko new object se bind karke
// 4. Agar constructor koi non-primitive value return nahi karta, to 'this' return hota hai

const tea = createUser("tea", 250)
// Yaha 'new' keyword use nahi kiya gaya, isliye:
// - 'this' global object (browser me window / Node.js me global) ko point karega
// - Agar strict mode hota to 'this' undefined hota
// - Isliye yaha tea variable actually undefined hoga (kyunki createUser kuch return nahi kar raha)

chai.printMe() // Output: price is 25

/*

 Behind the Scenes when 'new' is used:

1. **Naya object create hota hai**  
   Jaise const obj = {}

2. **Prototype link hota hai**  
   naya object → constructorFunction.prototype se linked hota hai  
   Matlab agar object me koi property/method nahi mila, JS prototype chain me dhundta hai.

3. **Constructor call hota hai**  
   Constructor function arguments ke sath call hota hai  
   'this' = naya object hota hai

4. **Object return hota hai**  
   Agar constructor koi object explicitly return nahi karta,  
   JS automatically 'this' return kar deta hai (jo naya object hai).

 Is tarah se 'prototype' methods ek hi jagah store hote hain  
   aur sab naye objects usko share karte hain → memory efficient.

*/
