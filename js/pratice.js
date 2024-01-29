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
// let grade = 90




//NORMAL FUNCTION
function myNames(){
    console.log('My name is Peace');
}
myNames();


//ARROW FUNCTION
let greeting = () => {
    console.log('Good evening');
}
greeting();


//RETURNING SOMETHING

let mentionNumbers = (number) => {
    return number;
}
console.log(mentionNumbers(5))


let addNumbers = (numb1, numb2) => {
    return numb1 + numb2;
}
console.log(addNumbers(7, 3))


let meanNumbers = (number1, number2, number3, number4) => {
    return ((number1 + number2 + number3 + number4)/4);
}
console.log(meanNumbers(1, 2, 3, 4));




// Assignment 1
// let studentScore = parseFloat(prompt('PLEASE ENTER A SCORE'))
// let grade = (score) => {
//     if(score >= 80 && score <= 100){
//         console.log('Excellent');
//     }else if(score >= 60 && score <= 79){
//             console.log('good');   
//     }else if(score >=45 && score <= 59){
//         console.log('fair'); 
//     }else
//         console.log('poor'); 
// }
// console.log(grade(studentScore));

let studentScore = parseFloat(prompt('PLEASE ENTER A SCORE'))
function grade(score){
    if(score >= 80 && score <= 100){
                console.log('Excellent');
            }else if(score >= 60 && score <= 79){
                    console.log('good');   
            }else if(score >=45 && score <= 59){
                console.log('fair'); 
            }else
                console.log('poor');  
} 
grade(studentScore);




    


// Assignment2
// let eligibleForLoan = accountInbank && collateral
// accountInbank = ok;
// colateral = ok;

// let haveAccount = confirm('Do you have an account?');
// let haveCollateral = confirm('Do you have a collateral or a guarantor?');

// let getLoan = (haveAccount, haveCollateral) => {
    
//     if (haveAccount && haveCollateral){
//         console.log('eligible for the loan');
//     }else {
//         console.log('Sorry, you are not eligible for this loan');
//     }

// }

// console.log(getLoan(haveAccount, haveCollateral));





ASSIGNMENT
a function that 