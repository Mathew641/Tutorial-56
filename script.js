// alert("Welcome to the Tutorial-56 of Sigma Batch for Web Development of CodeWithHarry");

console.log("Hello, I am conditional Tutorial");

console.log("This is how code-runner helps in runing the js code in terminal without writing node js filename again and again ");

console.log("\n");
// let umr = prompt("Enter the age"); -> prompt is not defined in Nodejs
let umr = 45;
if (umr>18){
    console.log("Eligible for voting!");
}  // -> if block
else{
    console.log("You are not eligible of voting!");
} // -> else block

// exponential operator --> **
let powerOfTwo = 2;
console.log(powerOfTwo**20);

// modulus operator --> %
let rem = 57;
console.log("Remainder on dividing 57 by 4 is ->",rem%4);

// Assignment operator
let m = 18;
console.log("value of m is ->",m);
m += 5; // it means m = m+5
console.log("value of m after using += operator ->",m);
m *= 2; // it means m = m*2
console.log("value of m after doing m*=2 is ->",m);
m /= 3; // it means m = m/3
console.log("value of m after doing m/=3 is ->",m);
m -= 6; // it means m = m-7
console.log("Value of m after doing m-=7 is ->",m);
m %= 2; // it means m = m%2
console.log("Value of m after doing m%=2 is ->",m);
m **= 3; // it means m = m**3
console.log("Value of m is after doing m**=3 is ->",m);
// alert("sdk");

console.log("\n\n");

console.log("= -> is assignment operator whereas  == -> lose equality checker and === -> strict equality checker");

console.log(" == -> loose equality checker means it can check only data and not the data type");
//e.g
let a = 15; // this is a number
let b = "15"; // this is a string
if(a == b){
    console.log("Yes a and b are equal in value.");
}
else{
    console.log("No, a and b are not equal as there data  type are not same");
}

console.log("\n");

console.log(" === -> Strict equality checker check both data  and datatype");
let m1 = 28;
let n1 = "28"
if (m1===n1){
    console.log("Yes, m1 and n1 are equal in value as well as same in data type.");
}
else{
    console.log("No, m1 and n1 are not equal as their data types are not same althoug their value are equal.");
}

console.log("\n\n");

console.log(" != -> loose not equal to, it check only data not data type");
if (m1 != n1){
    console.log("m1 and n1 are not equal");
}
else{
    console.log("m1 and n1 are equal");
}

console.log("\n");

console.log("!== -> strict not equal to checking");
if(m1 !== n1){
    console.log("No, m1 and n1 are not equal as only their values are equal and not their data types.");
}
else{
    console.log("Yes m1 and n1 are equal");
}

console.log("\n\n");

//  Logical operator 
console.log("We have 3 different tpes of logical operators")
console.log(` 1. && operator -> And operator return true only when all the multiple conditions are true, otherwise gives false if even one condition comes out to be false. 

2. || -> OR operator returns true even single condition comes out to be true and gives false response even if all the multiple conditons comes out to be false.

3. ! -> not equal to operator.
`);
// e.g:




