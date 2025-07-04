
const name = ["garvit ","shrimann","naman"]

const surname = ['bhatnagar',"sah","sharma"]

// Concatenating two arrays
const fullName = name.concat(surname);
console.log(fullName); 


// Using spread operator to concatenate arrays
const fullName2 = [...name, ...surname];
console.log(fullName2);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5] ]]
const flat_array = another_array.flat(Infinity); // Flattens the array to infinity depth
console.log(flat_array);

console. log(Array. isArray ("Hitesh") )// Checks if "Hitesh" is an array, returns false
console. log(Array. from("Hitesh") )// Converts a string to an array of characters

