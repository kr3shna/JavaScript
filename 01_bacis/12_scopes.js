// var c = 300;           // code outside{} is known as global scope
if(true){
    let a = 10;                    // {} is known as scope
    const b = 20;                  // code inside {} is known as block scope
    var c = 30                     
    // console.log("Inner:",a);       //output: Inner: 10
}

// console.log(a);    // output: error
// console.log(b);    // output: error
// console.log(c);    // output: 30


function one(){
    const username = "abcd";
     function two(){
        const website = "metube";
        console.log(username);
    }
    // console.log(website);         //output:- error, becoz website ka scope srif block scope takk hi hai

    // two();
}

// one()

 

// ***********Intresting**********

function addone(num){                  //1st way of declearing function
return num + 1;
}
// console.log(addone(10))

const addtwo = function(num){         //2nd way declearing function
    return num + 2;
}
// console.log(addtwo(5))



//************ But **********
//if we will run the function before declaration we will see following outputs

console.log(addone(10))     //output:- 11

function addone(num){                  //1st way of declearing function
    return num + 1;
    }
    
    // console.log(add2(5))     //output:- error

    const add2 = function(num){         //2nd way declearing function
        return num + 2;
    }
    


    // https://developer.mozilla.org/en-US/docs/Glossary/Scope


