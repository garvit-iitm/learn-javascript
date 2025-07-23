// =============================================
// JavaScript Execution Context & Memory Phases
// =============================================

/*
1️ Global Execution Context Created:
   - The `this` keyword is initialized and points to the global object.

phase 1: Memory Creation Phase
   - Variables and functions are hoisted.
   - Variables are initialized to `undefined`.   

Memory Creation Phase (Hoisting):
   - Variables are set to 'undefined'.
     val1 → undefined
     val2 → undefined
     result1 → undefined
     result2 → undefined
   - Function definitions are stored in memory.
     addNum → [Function definition stored]

phase 2: Execution Phase
   - The code is executed line by line. 

Execution Phase:
   - Code is executed line by line.
   - Variables are assigned real values:
     val1 → 10
     val2 → 5
     result1 → addNum(val1, val2) → 15
     result2 → addNum(10, 2) → 12

 Function Execution:
   - A new Execution Context is created for `addNum(num1, num2)`
     Includes:
     ➤ Memory Phase:
         num1 → undefined
         num2 → undefined
         total → undefined
     ➤ Execution Phase:
         num1 → 10
         num2 → 5
         total → num1 + num2 → 15
   - After execution, the function context is deleted (popped off the call stack).
*/



