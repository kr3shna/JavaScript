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


                                 
                                                