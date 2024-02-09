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


// Array secific loops
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

 const coding = ['js','ruby','python','cpp']
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


myCoding.forEach((item) =>{
    console.log(item.languageName);      // accessing values from objects which are present inside array
})
