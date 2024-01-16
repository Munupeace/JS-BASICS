console.log('javascript')
let a = 10;
let b = 15;
let d = 10.1;
let e = true;
let f = false;

let c = a + b;
console.log(c);


if(!e){
    console.log('y');
}else{
    console.log('z')
} 

// let test = prompt('please enter a number')
// let num1 = parseFloat(prompt('input firstNumber'))
// let num2 = parseFloat(prompt('input secondNumber'))

// if(num1 < num2) {
    // console.log(`${num1} is less than ${num2}`);
// }else{
    // console.log(`${num2} is less than ${num1}`);
// }

// if(isNaN(test) ){
//     console.log('test is not a number');
// }else{
//     console.log('test is a number')
// }

// confirm evaluate boolean XPathExpression
// eligibility for a loan
// acct in bank
// collateral
// conditions met approved otherwise
// not approved  



// grade of student 
// 80 = excellent
// 70<60= b
// put in function 





// Assignment 1
// let grade = 90
let grade = parseFloat(prompt('SCORE'))
if(grade >= 80 && grade <= 100){
    console.log('Excellent');
}else if(grade >= 60 && grade <= 79){
        console.log('good');   
}else if(grade >=45 && grade <= 59){
    console.log('fair'); 
}else
    console.log('poor');


// Assignment2
// let eligibleForLoan = accountInbank && collateral
// accountInbank = ok;
// colateral = ok;

let haveAccount = confirm('Do you have an account?');
let haveCollateral = confirm('Do you have a collateral or a guarantor?');

if (haveAccount && haveCollateral){
    console.log('eligible for the loan');
}else {
    console.log('Sorry, you are not eligible for this loan');
}










