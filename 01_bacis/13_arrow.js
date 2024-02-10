// const user = {
//     username: "jethabhai",
//     price: 199,
     
//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);      // this function current context ke bare me batata hai
        
//     }
// }

// user.welcomeMessage()

// user.username = "bhidebhau";
// user.welcomeMessage()

// console.log(this)       //output:- {}



// function chai(){
//     let username = "Gujjubhai";
//     console.log(this)
// }
// chai()                     // when we will print this inside the function then, output:- we will get so many values as an output


// function chai(){
//     let username = "Gujjubhai";
//     console.log(this.username)
// }
// chai()            // when we will use this inside function then, output:- undefined



// const chai= function(){              // another way of declearing function
//      let username = "sodhibhai";
//      console.log(this.username);
// }
// chai()



// const chai= () => {                        // => :- is arrow function
//     let username = "sodhibhai";
//     console.log(this.username);
// }
// chai()     // output: undefined




// syntax of Arrow function:-
// () => {}
// we can hold arrow function in the variable also as shown below


// const addTwo = (num1, num2) => {           // basic way of decribing function
//     return num1 + num2
// }

// console.log(addTwo(3,4))


// Another way of describing function known as implicit return, here we will not use curly braces, implicit return ka meaning hai ki mai maan leta hu apko return keyword likhne ke jaroorat nhi hai 

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3,4))

// we can use () too while describing function using implicit return method to avoid confusion
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3,4))



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions





