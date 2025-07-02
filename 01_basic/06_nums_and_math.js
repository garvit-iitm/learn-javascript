const score = 400
console. log(score); // it will print 400

const balance = new Number(100)
console. log (balance) ; // it will print Number {100} ,telling that it is a Number object

console. log(balance. toString().length); 
// it will print 3, because the number is converted 
// to string and length of string is 3


console.log(balance.toFixed(2)); // it will print 100.00
console.log(balance.toPrecision(3)); // it will print 100



console. log(Math. random());
console. log((Math.random()*10)+1);
console. log(Math. floor(Math.random()*10)+1);

const min = 10
const max = 20

console. log (Math. floor(Math. random() * (max - min + 1)) + min)