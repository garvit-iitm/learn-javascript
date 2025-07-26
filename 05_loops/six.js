// filter method
// it is used to filter elements from an array based on a condition
// it returns a new array containing elements that satisfy the condition

myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const eve = myNums.filter( (num) => num % 2 === 0)

console.log("Even numbers:", eve);


const books = [
    { title: "JavaScript Basics", author: "John Doe", year: 2020 },
    { title: "Advanced JavaScript", author: "Jane Smith", year: 2021 },
    { title: "Learning Python", author: "Alice Johnson", year: 2019 },
    { title: "Web Development", author: "Bob Brown", year: 2022 }
];

const userBooks = books.filter( (book) => book.year > 2020);
console.log("Books published after 2020:", userBooks);
// filter with arrow function