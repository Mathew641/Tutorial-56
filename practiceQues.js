// Some practice Question related to conditional statement

// Ques1. Use logical operator to find wheather the age of a person lies between 10 and 20 ?
let ageToday = prompt("Enter your age:");
if (ageToday>10 && ageToday<20){
    console.log("Yes, your age lies between 10 and 20, you can go for a ride.");
}
else{
    console.log("No, your age is not lying in a decided age bracket");
}

console.log("\n");

// Ques2. Demostrate the use of switch case in JS?
let fruit = prompt("Enter the name of fruit you like to have:");
switch (fruit){
    case "mango":
        console.log("Mango is 45 rupees per kg");
        break;
    
    case "grapes":
        console.log("Grapes is 30 rupess per kg");
        break;

    case "kiwi":
        console.log("Kiwi is 100 rupess per 100gram");
        break;
    
    case "oranges":
        console.log("Oranges are 10 rupess per kg");
        break;

    default:
        console.log("Entered fruit not available");
}

console.log("\n");

// Ques3. Write a JS program to find wheather a number is divisible by both 2 and 3 ?
let numEntered = prompt("Enter the Number:");
if (numEntered%2 === 0 && numEntered%3 ===0){
    console.log("Yes, entered number is divisible by both 2 and 3");
}

else if(numEntered%2 === 0 && numEntered !==0){
    console.log("Enterd number is divisible by 2 only")
}

else if(numEntered%2 !==0 && numEntered%3 ===0){
    console.log("Entered number is divisible by 3 only.");
}
else {
    console.log("Entered number is neither divisible by 2 nor by 3");
}

console.log("\n");

//  Ques4. Write a JS program to find wheather a number is divisible by either 2 or 3?
let newNum = prompt("Enter the Number:");
if (newNum%2 === 0 || newNum%3 ===0){
    console.log("Yes number is divisible by either of it");
}
else {
    console.log("No, number is not divisible by any one of it");
}

console.log("\n");

// Ques5. Print "You can drive" or "You cannot drive" based on the age being greater than 18 using ternary operator ?
let driverAge = prompt("Enter your age:");
driverAge>18 ? console.log("Yes, you can Drive"): console.log("No, you cannot drive");