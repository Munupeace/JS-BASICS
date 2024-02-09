//this is my first javascript code
// console.log('Hello World, I am learning javascript. Wish me well ');

//variables
// let myName = 'Peace';
// let myName;
// myName = 'peace';
// console.log(myName);
// let age = 24;
// let noEmail = false;
// let color = null;
// let notApproved = undefined;


// constant (for example we have this)
// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);
//but a situation where we dont want the variable to change we use the constant
// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);
// the above from line 15 will print an error because while using the const. you cannot reassign

// object
// let item ={
//     myName: 'peace',
//     age: 24,
//     noEmail: false
// };

// console.log(item);

//if we want to change something in the object we can use the dot notation as shown below
// item.age = 40;
// console.log(item.age);

// if we want to change something in the object we can also use the bracket [] notation as shown below
// item['myName'] = 'vwegba';
// console.log(item.myName);

//array
// let selectedColors = ['pink', 'violet', 'black', 'gold'];
// console.log(selectedColors);

//if you wanted specify a particular color in the array you do this

// let selectedColors = ['pink', 'violet', 'black', 'gold', 'green', 'purple'];
// console.log(selectedColors[5]);

//if you want to specify the length in the array you do this

// let selectedColors = ['pink', 'violet', 'black', 'gold', 'green', 'purple'];
// console.log(selectedColors.length);



// functions performing a task
// function check(age) {
//     console.log('that' + ' ' + 'is' + ' ' + 'age')
// }
// check(24);

// we can also do this like  this too
// function greet(name, lastname){
//     console.log('hello' + ' ' + name + ' ' + lastname)
// }
// greet('Munu', 'Peace');


// functions calculating a value

// function square(number) {
//     return number * number;
// }

// the console.log and square (2) are funtions as well
// console.log(square(2));

// function square(number) {
//     return number * number;
// }
// console.log(square(10));


// Arithmetic operators

// let x
// x = 10
// let y
// y = 2

// console.log(x+y);
// console.log(x-y);
// console.log(x/y);
// console.log(x*y);
// console.log(x%y);
// console.log(++x);
// console.log(x++);
// console.log(--y);


// Assignment operators
// let a = 10;
// a = a + 10;
// console.log('i am a1', a )
// is the same as that below using the assignment(=)operator 
// a += 10;

// let b = 20;
// b = b - 10;
// b -= 10;

// console.log('I am a2', a);

// comparison operator

// let c = 1;

// relational comparison
// console.log(c > 1);
// console.log(c >= 1);
// console.log(c < 1);
// console.log(c <= 1);

// equality comparison
// console.log(c === 1);
// console.log(c !== 1);


// Ternary operators or conditional operators
// for example if we have a rule like ths 
// if a customer has more than 100 points ,
// they are a 'gold' customer, otherwise ,
// they are 'silver' customer. 

// let points = 110;
// let type = points > 100 ? 'gold' : 'silver'
// console.log(type);



// logical operators
// logical and &&
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log(eligibleForLoan);

//  logical OR ||
// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log('Eligible', eligibleForLoan);

// logical NOT(!)

// let applicationRefused = !eligibleForLoan;

// console.log('Application Refused', applicationRefused);



// bitwise operator (or)
// console.log(1 | 2);
// bitwise operator (AND)
// console.log(1 & 2);


// let m = 'red';
// let n = 'blue';

// swapping blue to red and red to blue 
// let o = m;
// m = n;
// n = o;

// console.log (m);
// console.log(n);

// control flow


// if and else case
// assuming we have a case like this, 
// Hour 
// if the hour is (between 6am and 12pm) this is a condition: good morning!(this is a statement)
// if its between 12pm and 6pm: good afternoon!
// otherwise goodevening


// let hour = 11;

// if (hour >= 6 && hour < 12) 
//     console.log('Good, morning');
// else if (hour >=12 && hour < 18)
//     console.log('Good, afternoon');
// else 
//     console.log('Good, evening');


// // switch and case using this example

// let duty
// switch (duty) {
//     case 'guest':
//         console.log('Guest User');
//         break;
    
    // case 'moderator':
//         console.log('Moderator User')
//         break;

//         default:
//             console.log('Unknown User');

// // the result for this block of code is Unknown User but assuming we assigning the variable to either guest or moderator
// // we will have something different. switch case can also be done using the if and else statement
// }

// let office = 'guest';
// switch (office) {
//     case 'guest':
//         console.log('Guest User');
//         break;
    
//     case 'moderator':
//         console.log('Moderator User')
//         break;

//         default:
//             console.log('Unknown User');
// }

// using the if and else statement for same case

// let role = 'moderator'

// if (role === 'moderator')
//     console.log('Moderator');

// else if (role === 'guest')
//     console.log('Guest User');

// else
//     console.log('Unknown User');

    // loops
    // for loop
    // for (let i = 1; i <= 20; i++){
    //     if (i % 2 !== 0)
    //     console.log(i);
    // }


    // why loops
    // let i = 0;
    // while (i <= 5){
    //     if (i % 2 !== 0) 
    //     console.log(i);
    // i++
    // }

    // for-in loop
    // const person = {
        // names: 'mosh',
        // age: 30
    // }
// for (let key in person)
// console.log(key);

// To access the property of an Object, they are two ways to access the property of an Object
// the DOT NOTATION or the BRACKETS NOTATION.An example is shown below using the previous example in line 267


// const person = {
//     names: 'mosh',
//     age: 30
// }
// for (let key in person)
// console.log(key, person[key]);

// const colors = ['red', 'green', 'yellow'];
// for (let index in colors)
// console.log(index, colors[index]);

// // for-of loops
// const colours = ['red', 'green', 'yellow'];
// for (let colour of colours)
// console.log(colour);

// break and continue check note 


// EXERCISE 1
// write a function that takes two numbers and returns the maximum of the two.
// solution

// let number = max(10, 1);
// console.log(number)

// function max(number1, number2) {
//     if (number1 > number2) return number1;
//     else return number2;

//     // you can rewrite the above as this
//     return(number1 > number2) ? number1 : number2;
// }

// EXERCISE 2
// islandscape takes two parameters width, and height of an image, and returns true if the width
// is greater otherwise false
// solution

// console.log(islandscape(800, 1600));

// function islandscape(width, height) {
    // if (width > height) return true;
    // return false;
    // similarly;
    // return(width > height);
// }


// EXERCISE 3
// if its divisible by 3 = fizz
// if its divisible by 5 = Buzz
// if its divisible by 3 and 5 = fizzBuzz
// if its not divisible by 3 or 5 = get that number
// if you pass a string or boolean = not a number 
// solution


// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input){
//     if (typeof input !== 'number')
//         return NaN;

//     if ((input % 3 === 0) && (input % 5 === 0))
//     return 'FizzBuzz';

//     if (input % 3 === 0)
//     return 'Fizz';

//     if (input % 5 === 0)
//     return 'Buzz';


//     return input;
// }


// EXERCISE 4
// imagine we have a speed check limit 
// where the speed limit = 70
// for every extra (5km = indicated as kmPerPoint) extra the speed limit you get (1point), in otherwords this point count starts from 75 using this case
// if the driver gets up to 12points the result should be license suspended
// we use Math.floor to convert a floating number to an integer



// checkSpeed(75)

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint)
//     console.log('Okay');
// else {
//     // this is how we calculate the points using Math.floor
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12)
//         console.log('License suspended');
//     else
//     console.log('points', points);
// }

// }


// EXERCISE 5
// write a function = showNumbers
// that takes a parameter called limit.
// you pass a number in thev showNumbers if its EVEN in displays EVEN 
// otherwise ODD

// showNumbers(20);

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {

//         // put here
        
//         if (i % 2 === 0) console.log(i, 'EVEN');
//     else console.log(i, 'ODD');
    
    // it can also be written like this thing
    // const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
    // console.log(i, message);
// }

// }



// REGULAR EXPRESSION 
// USING THE TEST METHOD

// let txt = 'most programming courses starts with an hello world'

// let regex1 = new RegExp('hello');
// let regex2 = /world/;

// console.log(regex1.test(txt));
// console.log(regex2.test(txt));

// USING THE EXEC METHOD
// let txt = 'most programming courses starts with an hello world'

// let regex1 = /hello/;
// let regex2 = /world/;

// console.log(regex1.exec(txt));
// console.log(regex2.exec(txt));


// 1- USING THE STRING METHOD, the MATCH method
// let txt = 'most programming courses starts with an hello world'

// let regex1 = /hello/;
// let regex2 = /world/;

// console.log(txt.match(regex1));

// match on string and the exec on the regex object they produce the same result on the input

// 2- nother method is the SEARCH method, this method gives us the index 
// let txt = 'most programming courses starts with an hello world'

// let regex1 = /hello/;
// let regex2 = /world/;

// console.log(txt.search(regex2));

// 3 - REPLACE method : The purpose of this method is to allow us replace text with something . 
// this method takes two parameters. The regex and the replace word.

// let txt = 'most programming courses starts with an hello world'

// let regex1 = /hello/;
// let regex2 = /world/;
// console.log(txt.replace(regex1, 'welcome'));


// 4- SPLIT method : This method allows you to turn a string into an array. Thee way it does this is 
// by specifying the character you want to perform the split on. This will result to elimination in regex1 for example 
// thereby creating 2 isArrayLiteralExpression, 1 before the hello and the other after.

// let txt = 'most programming courses starts with an hello world'

// let regex1 = /\s/;
// let regex2 = /world/;
// console.log(txt.split(regex1));


// REGEX FLAGS
// 3 most common flags are (g-global match more than one occurence. i- case insensitive match, case doesnt matter, m-multi-line match.)
// the s before \s in line 476 is to indicate where they is s in the txt,while the g is regex flag

let txt = 'most programming courses starts with an hello world. Hello World'

let regex1 = /s\s/g;
let regex2 = /world/;
console.log(txt.split(regex1));

