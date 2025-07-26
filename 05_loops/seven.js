// reduce method

myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
initialValue = 0;
const sum = myNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);
console.log("Sum of all numbers:", sum);


const shoppingCart = [ 
    { item: "Apple", price: 1.5, quantity: 3 },
    { item: "Banana", price: 0.5, quantity: 6 },
    { item: "Orange", price: 1.0, quantity: 2 }
];

const totalCost = shoppingCart.reduce((accumulator, currentItem) => {
    return accumulator + (currentItem.price * currentItem.quantity);
}, 0);
console.log("Total cost of shopping cart:", totalCost);   