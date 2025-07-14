//learning rest operator in functions
// the rest operator is passed in a function as ...any_variable_name
//the rest operator collects the as array of values

function calculateCartPrice ( ... num1){
return num1

}

console. log(calculateCartPrice(200, 400, 500, 2000))


//passing a object as a parameter in a function
userDetails = {
    name: "Garvit",
    age: 25,
    city: "Delhi"
}

function printUserDetails (any_object) {
    console.log(`Name: ${any_object.name}, Age: ${any_object.age}, City: ${any_object.city}`);
}

printUserDetails(userDetails);