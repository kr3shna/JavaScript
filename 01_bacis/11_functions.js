// Defining a funtion 

function sayMyName(){
    // console.log("Hello");
    // console.log("Duniya");
}

// sayMyName()               //here, sayMyName is refrance of function and () is execution of funtion

// function addTwoNumbers(num1,num2){          // here, (num1,num2) is parameter of the function
//    console.log(num1 + num2)
// }
// const result = addTwoNumbers(5,9);          //here, (5,9) is argument of function
// console.log("Result: ",result);       //it's output will show undefine



function addTwoNumbers(num1,num2){
    //  let result=num1 + num2;        // 1st way to resolve above seen pblm
    //  return result;                 // 2nd way to resolve the above seen pblm
    return num1 + num2;        
}
 
// const result = addTwoNumbers(5,5);
// console.log("Result: ",result);


function loginUserMessage(username){
   return `${username} just logged in`;
}

//  console.log(loginUserMessage("abc"));          // output1:- abc just logged in
//  console.log(loginUserMessage(""));             //output2:- just logged in
// console.log(loginUserMessage());                //output3:- undefined just logged in


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");        // to solve above seen pblm in output3 here we use if cond.if username is not passed then console.log will be executed
        return;
    }
    return `${username} just logged in`;
 }
//  console.log(loginUserMessage());    // output:- Please enter a username \n undefined


// alternative:- to tackle that pblm we can pass a default value so alteast that default value will print and if condition will not be checked

                                                 
function loginUserMessage(username= "xyz"){
    if(!username){
        console.log("Please enter a username");        // to solve above seen pblm in output3 here we use if cond.if username is not passed then console.log will be executed and if we pass any value them that value will be printed
        return;
    }
    return `${username} just logged in`;
 }
//  console.log(loginUserMessage());  
//  console.log(loginUserMessage("klm"));



function calculateCartPrice(...num1){                //here, ... is rest operator:-the rest operator puts the rest of some specific user-supplied values into a JavaScript array
        return num1;                                 //though, num1 is returned but more values will also be return due to rest operator
}

// console.log(calculateCartPrice(100,200,300));

function calculateCartPrice(val1,val2,...num1){
          return num1;
}
// console.log(calculateCartPrice(100,200,300,400,500,700));       //output:- [300,400,500,700]      here, 100 and 200 are assign to val1 and val2 and rest all are assign in array
                                 
          
const user = {
    username: "abcd",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);   // 1st way to pass the object

handleObject({
    username: "abcd",
    price: 199
})

const myNewArray  = [200,300,400,500];
function returnSecondValue(getArray){
      return getArray[1];
}

console.log(returnSecondValue(myNewArray));