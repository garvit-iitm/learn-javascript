

console.log(null > 0); // --false print
console.log (null == 0); // --false print
console.log(null >= 0); // --true print

/*
The reason is that an equality check == and comparisons > < >=
<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

// so we have strict conversions (===) that check datatypes also 

