let index = 1;

// while loop
// A while loop continues as long as the condition is true
while (index <= 10) {
    const element = index;
    console.log(`Element at index ${index} is ${element}`);
    index++;
    
}

let myArray = [1, 2, 3, 4, 5];

let arr = 0;
while (arr < myArray.length) {
    const element = myArray[arr];
    console.log(`Element at index ${arr} is ${element}`);
    arr++;
}


//do while loop
// A do while loop executes the block of code once before checking the condition
let j =1;
do {
    const element = j;
    console.log(`Score ${element}`);
    j++;
}while (j <= 5);