//Comments in JS

//This is Single line Comment

/*This is Multi-Line 
Comment*/






// operators in JS
// Used to perform some operations

//  Arithmetic Operators

//  let a = 3;
//  let b = 2;
// console.log("a + b =", a + b);     //Addition Operator
// console.log("a - b =", a - b);     //substraction Operator
// console.log("a / b =", a / b);     //Division Operator gives quotient when a is divided by b
// console.log("a * b =", a * b);     //Multiplication Operator
// console.log("a % b =", a % b);     //Modulus Operator give remender when a is divided by b
// console.log("a ** b =", a ** b);     //Exponential Operator  it means a to the power b 

//Unary Operator

// let a = 3;
// let b = 2;
// a++; //Post Increment Operator a+= means a = a + 1 value of a will change in second time
// b--;  //post Decremenr Operator a-- means a = a - 1  value of a will change in second time0
// console.log("a =",a);
// console.log("b =",b); 
// console.log("a =",++a);    //Pre Increment Operator a+= means a = a + 1 value of a will change first then it will print
// console.log("b =",--b);    //Pre Decremenr Operator a-- means a = a - 1 value of a will change first then it will print



// Assignment Operator

// let a = 3;
// let b = 2;
//  a += 8    // a = a + 4
//  console.log("a =",a);
//  b -= 8    // b = b - 8
//  console.log("b =",b);
//  a *= 8    // a = a * 4
//  console.log("a =",a);
//  a /= 8    // a = a / 4
//  console.log("a =",a);
//  a %= 8    // a = a % 4
//  console.log("a =",a);
//  a **= 8    // a = a ** 4
//  console.log("a =",a);
 


// Comparision Operator

// Equal to Operator:- ==
// Equal to & type Operrator:- ===  It is an strict version of equal to Operator it also checks the Data Type 
// Not equal to Operator:- !=
// Not equal to & type Operator:- !== It is an strict version of Not equal to Operator it also checks the Data Type 

// Greater than Operator :- >
// Greater than Equal to Operator :- >=
// Less than Operator :- <
// Less than Equal to Operator :- <=


//Logical Operators in JS

// Logical AND:- &&    If both the conditions are TRUE then only the final result will be TRUE
// Logical OR:- ||     If one of the condition is TRUE then the final condition will be TRUE If both the condition is FALSE then the final condition will be FALSE
// Logical NOT:- !     It gives us the Opposite result





// Conditional Statements in JS
//It is used to implement some condition in the CODE

//if Statement

// let age = prompt("What is your AGE?");
// if(age >= 18 ){
//     console.log("CONGRATULATIONS!!\nYou are eligible to drive ");
// }
// if(age <= 18 ){
//     console.log("SORRY\nYou are not eligible to drive ");
//}


// if-else Statement

// let age = prompt("What is your AGE?");
// if(age >= 18 ){
//     console.log("CONGRATULATIONS!!\nYou are eligible to drive ");
// }
// else{
//     console.log("SORRY\nYou are not eligible to drive ");
// }


//else-if Statement 
//It is used to check multiple if statements





//Operators in JS

//Ternary Operator

//syntax :- condition?true output : false output

// let age = prompt("What is you age?");
// age >= 18 ? alert("CONGRATULATIONS!!\nYou are eligible to drive car") : alert("SORRY\nYou are not eligible to drive car")





// Loops in JS

//for loop

// synatax :- for(let i = 1; i<= 5; i++){        //Here let i = 1 is initialization, i <= 5 is an stopping condition and i++ is used updation
//     console.log("Hello Krishna")
//         }



//Infinite Loop
/* It is a type of loop which never ends 
means the stopping condition of the loop
always give value as true */ 


//while Loop

// Syntax:- while(Condition){
//     //do some work
// }

//do-while Loop

// syntax:- do{
//     //do some work
// }while(Condition);











//JAVA SCRIPT

//Operators

// let mrp = 1299;
// let disprice = 799;
// console.log("The MRP of item is " + mrp);
// console.log("The Discounted price of item is " + disprice);
// let disper = ((mrp - disprice)/mrp) * 100;
// let roundPrice = Math.round(disper);
// console.log(`You Saved ${roundPrice}%`);




//Array
// let arr = ["Krishna"," Sneha","Labdhi","Shende"];
// arr.push("Krishnass");
// console.log(arr);
// //let arr1 = arr.slice(2,4);
// //console.log(arr1);
// arr.splice(2,0,"krishnaaa","ss");
// console.log(arr);
// console.log(arr.length);


//  let name = ["Krishna","Sneha","Labdhi","Shende"];
// // let bday =[12,2,7];
// // let byear =[2003,2004,2004];
// // let nd = console.log(name.concat(bday,byear));
// console.log(name.copyWithin(0,1,2));






//LOOPS 

// for(initialisation,condition,increment/decrement){
//     code
// }

// for(let i = 1; i < 5; i++){
//     console.log(`${i} * ${i} = ${i * i}`);
// }


// let con = ["India","Russia","Itly","Singapore"];
// let newCon=[];
// for(let i = 0;i<con.length;i++){
//     newCon.push(con[i].toUpperCase());
// }
// console.log(newCon);




// let name =["krishna","shende","kss"];
// let uName = [];
// for(let i = 0; i<name.length; i++){
//     uName.push(name[i].toUpperCase());
// }
// console.log(uName);
// let lname= []
// for(let i = 0; i<uName.length; i++){
//     lname.push(uName[i].toLowerCase());
// }
// console.log(lname);



// let num = [1,2,3,4];
// let numsq = [];
// for(let i = 0; i<num.length;i++){
//     numsq.push();
// }
// console.log(numsq);
