// Ye function username set karega
// Socho ye ek helper hai jo user ka naam rakhta hai
function SetUsername(username) {
    // DB call ya koi complex kaam yaha ho sakta hai
    this.username = username; // 'this' matlab jo object ban raha hai uska property
    console.log("called"); // bas check ke liye print kar rahe
}

// Ye function ek naya user banata hai
function createUser(username, email, password) {
    // Yaha hum SetUsername function ka code borrow kar rahe
    // .call(this, username) ka matlab hai "is object" ke liye function chalao
    SetUsername.call(this, username);

    // ab baaki user details set kar rahe
    this.email = email;
    this.password = password;
}

// Naya user bana rahe
const chai = new createUser("chai", "chai@fb.com", "123");

// User ka poora data print karega
console.log(chai);

