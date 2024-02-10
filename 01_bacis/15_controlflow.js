// if

 //syntax:-
            // if(condition){            
            //     //code              
            //   }

//example


const temp =41

// if(temp>37){
//     console.log("hayy garmi")
// }


// shorthand notation

const balance = 1000
// if(balance >500) console.log("paisa hi paisa")    

// const bankbalance = 1000;
// if(bankbalance>700) console.log("test1"), console.log("test2")      //we can write multipe lines using , but it is not prefered in industry

// example of nesting/multiple conditions

// const bankbalance = 1000;
// if(bankbalance<500){
//     console.log("less than 500");
// }
// else if(bankbalance<750){
//     console.log("less than 750")
// }
// else if(bankbalance<900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }

// const userloggedIn = true;
// const debitCard = true;
// const loggedInFromEmail = true;
// const loggedInFromGoogle = false;
// if(userloggedIn && debitCard){
//     console.log("Allowed to purchase the course")
// }

// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("user logged in")
// }


// Switch case

// SyntaxError:-

// switch (key) {
//     case value:

//         break;

//         default:
//             break;
// }

// const month = 3;
// switch (month){
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb")  ;
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
        
//     default:
//         console.log("default message");
// }


// truthy values and falsy values

// const useremail = "abc@xyz.ai";
// if (useremail){
//     console.log("Got user email");
// }
// else{
//     conaole.log("Don't have user email");
// }


//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// rest all are truthy values
// "0", 'false', " "(empty string),[](empty array),{}(empty object),function(){}(empty function)    this values are also truthy values


// checking whether array is empty or not
// if (useremail.length === 0){
//     console.log("Array is empty");
// }


//checking whether object is empty or not
// const emptyObj = {};

// if (Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10   //output:- 5
// val1 = null ?? 10   //output:- 10
// val1 = undefined ?? 15 // output:- 15
val1 = null ?? 10 ?? 20  //output:- 10
// console.log(val1)


// Terniary Operator
//condition ? true : false

const iceTeaPrice = 100;
// iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")