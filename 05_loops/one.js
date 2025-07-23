// for loop

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(`Element at index ${index} is ${element}`);
    
// }


//break and continue
// break: exits the loop
// continue: skips the current iteration and continues with the next iteration

for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element === 2) {
        continue; // skips the rest of the loop when element is 2
    }
    console.log(`Element is ${element}`);
    if (element === 4) {
        break; // exits the loop when element is 4
    }
    
}