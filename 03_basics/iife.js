//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) EXAMPLE
//it is used because our code is polluted with other code
//and we want to avoid polluting the global scope with our variables and functions
//IIFE is a function that is executed immediately after it is defined

//in this the function is defined and executed immediately using IIFE
(function dat(){
    console.log("Database connected");
})(); //this is how we invoke the function immediately