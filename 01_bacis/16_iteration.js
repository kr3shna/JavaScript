//Topics Discussed in this module:-
// loops(for,while,do while)
// break,continue
// Array specific loops (forof,forin,foreach)
//filter,map,reduce



// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 7){
//         console.log("Thala for reason")
//     }
//     console.log(element);
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for(let j = 0; j<= 10; j++){
//     //   console.log(`Inner loop:${j} and inner loop ${i}`)  
//     console.log(i + '*' + j + ' = ' + i*j);
//     }
    
// }


// let myArray = ["flash", "batman","superman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`)
//         break;
//     }
//     console.log(`value of i is ${index}`);
    
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`)
//        continue;
//     }
//     console.log(`value of i is ${index}`);
    
// }



// while loop
// let i = 0;
// while (i <= 10) {
//     console.log(`value of i is ${i}`);
//     i = i + 2;
// }


// myarray = ['jethabhai','bhidebhau','hathibhai']

// let arr = 0
// while (arr < myarray.length) {
//     console.log(`Gokuldhamvasi ${myarray[arr]}`);
//     arr = arr +1;
// }

// do while loop
 
// let score = 1;
// do {
//     console.log(`Score is ${score}`);
// } while (score <= 10);


// Array specific loops
// for of loop


// const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num)
// }


// const greetings = "hello duniya";
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
    
// }


//Maps

// const map = new Map()
// map.set('IN',"India");
// map.set('USA',"United States of America");
// map.set('Fr', "France");

// console.log(map);

// for of loop for map 

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }


//  for of loop for object

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }
// for (const [key, value] of myObject){
//     console.log(key, ':-', value);
// }
// Note:-  Objects are not iterable

// for in loop


// const myObject = {
//     js: "javascript",
//     cpp: "C++",
//     rb: "ruby",
//     swift: "swift by apple"
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


// const programing = ['js','rb','py','java','cpp']

// for(const key in programing){
//     console.log(programing[key]);
// }



// for each loop

// const coding = ['js','ruby','python','cpp']
// coding.forEach( function (val){
//     console.log(val);
// } )

//using arrow function

// coding.forEach((item) =>{
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item,index,arr);
// })

 const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
   {
        languageName: 'java',
        languageFileName:'java'
   },
   {
       languageName: 'python',
       languageFileName: 'py'
   },
]


// myCoding.forEach((item) =>{
//     console.log(item.languageName);      // accessing values from objects which are present inside array
// })




// const coding = ['js','ruby','python','cpp']

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);
//Note:- forEach does not return any value


// const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num)=>num > 4)
// console.log(newNums);

// Another method
// const newNums = []
// myNums.forEach((num) =>{
//     if (num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// let userBook = books.filter((bk)=>bk.genre === 'History')

// userBook = books.filter((bk)=>{                                   //if we use {} then we have to use return
//     return bk.genre ==='History' && bk.publish >= 1993
// })
// console.log(userBook)


// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num)=>num+10)
// console.log(newNums)
// const newNums = myNumbers.forEach((num)=> {
//     return num +10
// })
// console.log(newNums)

//chaining :- it means we can use diff methods (ex:- map,filter)at one go

// const newNums = myNumbers
//                   .map((num)=>num*10)
//                   .map((num)=> num + 1)
//                   .filter((num)=>num >= 35)   
//                   console.log(newNums);  



 const myNums = [1,2,3];
 
//  const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
//  },0)

//  console.log(myTotal)
   

// const myTotal = myNums.reduce((acc, currval)=> acc+currval,0)
// console.log(myTotal);



const shoppingCart =  [
    {
        itemName: "js course",
        price: 2999
    }, 
    {
        itemName: "python course",
        price: 999
    }, 
    {
        itemName: "mobile development course",
        price: 5999
    }, 
    {
        itemName: " data sciencecourse",
        price: 12999
    },
    
]
 

const priceToPay = shoppingCart.reduce((acc , item) => acc + item.price,0)
console.log(priceToPay)

                  
                  

// foreach:-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// filter:-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

//map:-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// reduce:-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

