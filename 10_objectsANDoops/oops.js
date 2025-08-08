// Ek simple object banaya
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // Yaha "this" ka matlab hai current object 'user'
        // Agar this print kare to pura object mil jayega
        console.log(this);
    }
}

// Example: 
// console.log(user.username) // direct property access
// console.log(user.getUserDetails()); // method call
// console.log(this); // Browser me => window object, Node me => empty object


// Constructor function banate hai
// Constructor ka kaam: naye object ka blueprint dena
function User(username, loginCount, isLoggedIn){
    // "this" yaha naye ban rahe object ko point karega
    this.username = username;  // property attach kar di
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // Ek method bhi attach kiya naye object ke saath
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // 'return this' likhne ki zarurat nahi hoti Constructor me
    // JS automatically return karta hai newly created object
    return this;
}

// "new" keyword ke steps:
// 1. Ek naya empty object {} banata hai
// 2. Constructor function ko call karta hai, "this" ko is new object se bind karke
// 3. Jo properties/methods "this" me add ki hai, wo new object me chali jati hai
// 4. Implicitly wo naya object return hota hai

// Naya instance banaya
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// constructor property: batata hai ki object kis function ka instance hai
console.log(userOne.constructor);  
// Output: [Function: User] 
// matlab userOne ka constructor function hai "User"

// console.log(userTwo); // dusra alag instance
