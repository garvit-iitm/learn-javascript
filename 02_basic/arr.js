// array

a = [1, 2, 3, 4, 5];
myName = ["garvit", "bhatnagar"]

console.log(a);
console.log(myName);

const a2 = new Array(1, 2, 3, 4, 5);

//copy function in java script creates 
// shallow copy are thecopies that share the same reference
const a3 = a2; // shallow copy
a3[0] = 100; // changing a3 will change a2 as well

//deep copies are the copies that do not share the same reference

// array methods


a.push(6); // adds 6 at the end of the array
console.log(a);

a.pop(); // removes the last element of the array
console.log(a);

a.unshift(0); // adds 0 at the beginning of the array
console.log(a);
a.shift(); // removes the first element of the array
console.log(a);


// it is not recommended to use unshift and shift as they are slow operations
//because they have to shift all the elements in the array




console.log(a.indexOf(3)); // returns the index of 3 in the array
console.log(a.includes(3)); // returns true if 3 is present in the array
console.log(a.length); // returns the length of the array
console.log(a.join()); // joins the elements of the array into a string


//+++++++++++++++++++++++++slice and splice++++++++++++++++++++++++++

console.log(a.slice(1, 3)); // returns a new array with elements from index 1 to 2 (3 is not included)
console.log(a.slice(1)); // returns a new array with elements from index 1 to the end
console.log(a.slice(-2)); // returns a new array with the last 2elements


console.log(a.splice(1, 2)); // removes 2 elements from index 1 and returns them
console.log(a); // the original array is modified

//difference between slice and splice
// slice returns a new array and does not modify the original array
// splice modifies the original array and returns the removed elements

console.log(a.splice(1, 0, 100)); // adds 100 at index 1 without removing any elements