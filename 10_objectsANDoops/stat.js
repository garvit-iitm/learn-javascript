class User {
    constructor(username){      
        // constructor tab chalega jab naya object banega
        // 'username' ko object ki property me store karte hain
        this.username = username
    }

    logMe(){                    
        // normal method jo har object use kar sakta hai
        console.log(`Username: ${this.username}`);
    }

    static createId(){          
        // STATIC METHOD:
        // Static method ka matlab hai ki yeh method object ke liye nahi hota,
        // balki class ke liye hota hai.
        // Isko call karne ke liye hum class ka naam use karte hain, object ka nahi.
        // Example: User.createId()  ✅
        //          hitesh.createId() ❌ (error dega)
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()) 
// Agar yeh line chalate to error aata kyunki createId static hai
// Sahi tarika: console.log(User.createId())

class Teacher extends User {    
    // Teacher class, User class se inherit kar rahi hai
    constructor(username, email){
        super(username)          
        // super() parent class ka constructor call karta hai
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); 
// Yaha bhi error aayega kyunki static method object se call ho raha hai
// Sahi tarika: console.log(Teacher.createId())

/*
    SUMMARY:
    - Is code me do classes hain: User aur Teacher.
    - Teacher, User se inherit karti hai (extends keyword).
    - constructor se object ka initial data set hota hai.
    - logMe ek normal method hai jo object ke saath kaam karta hai.
    - createId ek static method hai jo sirf class ke naam se call hota hai,
      object se nahi.
    - Static methods ka use tab hota hai jab koi kaam object ki specific
      data par depend nahi karta, balki general class level ka hota hai.
*/
