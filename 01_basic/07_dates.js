//date
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console. log(myCreatedDate. toDateString() ); //this will print the date in a readable format

//also note that month starts from 0, so 0 is January and 11 is December


let myCreatedDate1 = new Date('2023-01-23') //you can also create date using string format 
//here the date is in ISO format (YYYY-MM-DD) so starting from 0 is not required
console. log(myCreatedDate1. toDateString() ); //this will print the date in a readable format

