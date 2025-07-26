// map

const nums = [1, 2, 3, 4, 5];
const squares = nums.map((num) => num * num);
console.log("Squares:", squares);

const squares1 = nums.map((num) => {
    num * num;
})

console.log("Squares:", squares1);
// this will return undefined for each element
//beacuse we have defined it inside {} means scope of function
// so we need to return it explicitly
// the correct way is below

// using return statement inside the arrow function
// this will return the square of each element in the array
const squares2 = nums.map((num) => {
    return num * num;
});
console.log("Squares:", squares2);