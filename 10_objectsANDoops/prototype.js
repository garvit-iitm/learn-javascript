// 🔹 String variables with extra spaces
// let myName = "garvit     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

// 🔹 Array banaya jisme heroes ka naam hai
let myHeros = ["thor", "spiderman"]

// 🔹 Object jisme heroes ka naam aur unki power store hai
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    // Method banaya jo spiderman ki power print karega
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// 🔹 Object ke prototype me ek function add kar diya
// Ab ye function har object me available hoga
Object.prototype.garvit = function(){
    console.log(`Garvit is present in all objects`);
}

// 🔹 Array ke prototype me function add kiya
// Ab ye sirf arrays me available hoga, objects me nahi
Array.prototype.heyGarvit = function(){
    console.log(`Garvit says hello`);
}

// heroPower.garvit()   // Object ke prototype ka function call
// myHeros.garvit()     // Array bhi object hai to ye bhi access kar lega
// myHeros.heyGarvit()  // Array ka function call
// heroPower.heyGarvit() // ❌ Ye kaam nahi karega kyunki ye sirf arrays ke liye hai

// 🔹 Inheritance example
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // Ye old syntax hai prototype set karne ka
}

// 🔹 Old syntax - Teacher ka prototype User banaya
Teacher.__proto__ = User

// 🔹 Modern syntax - TeachingSupport ka prototype Teacher banaya
Object.setPrototypeOf(TeachingSupport, Teacher)

// 🔹 String with extra spaces
let anotherUsername = "GarvitSinghBhatnagar     "

// 🔹 String ke prototype me ek function add kiya
// Jo original string print karega aur trim karke uski actual length batayega
String.prototype.trueLength = function(){
    console.log(`${this}`); // original string print
    console.log(`True length is: ${this.trim().length}`); // trim karke length
}

// Function calls
anotherUsername.trueLength()
"garvit".trueLength()
"iceTea".trueLength()
