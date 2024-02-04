//Array
// JS arrays are resizable,contain mix different datatypes
// When we will do array-copy operations in JS it will creat Shallow copies rather than deep copies
// Shallow copies:- A shallow copy of an object is a copy whose properties share the same refrences 
// Deep copies :-A deep copy of an object is a copy whose properties do not share the same refrences

// different ways of definig arrays 

// const arr1 = [0,1,2,3,4,5];
// const arr2 = ["krishna","shende","kumar"];
// const arr3 = new Array(1,2,3,4,5,6,7);


//Array Methods

// const myArr =[1,2,3,4];
// myArr.push(7);             //.push adds an element in  the last
// console.log(myArr);

// myArr.pop()   
// console.log(myArr);        // removes last elment from the array

// myArr.unshift(12);
// console.log(myArr);            // Add an element in the starting of the array

// myArr.shift();               // removes 1st element from array
// console.log(myArr)

// console.log(myArr.includes(25));   //it checks if the given value is present in the array or not and gives boolen as an output

// console.log(myArr.indexOf(25));    // it checks if the given value is present in array or not if not present then it gives -1 as output and if present then give value itself as an output


// const newArr = myArr.join();        //converts all the values into string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice,splice

// const urArray = [1,2,3,4,5];
// const urArray1 = urArray.slice(1,3)   // removes the elements from array according to the given range but the last range is not included and it does not manipulate the original array
// console.log("A",urArray);
// console.log("B",urArray1);
// console.log("C",urArray);


// const urArray2 = urArray.splice(1,3);    //removes the elements from array according to the given range and the last range is included and it  manipulates the original array by removing the given range elements from it
// console.log("A",urArray);
// console.log("D",urArray);
// console.log("E",urArray2);



// let actors = ["salman","tiger","pushpa"];
// let actress = ["shraddha","munmun","raveena"];
// actors.push(actress);
// console.log(actors);

// let actors = ["salman","tiger","pushpa"];
// let actress = ["shraddha","munmun","raveena"];
// let jodi = actors.concat(actress);
// console.log(jodi);



//Spread Operator
// let actors = ["salman","tiger","pushpa"];
// let actress = ["shraddha","munmun","raveena"];
// const jodi = [...actors,...actress];     //easist way to join two string
// console.log(jodi);



// const arr1 = [1,2,3,[4,5,6],7,[8,9,[10,11]]];    // flat is use to open all the arrays which are present inside each other and gives one array
// const fullarr = arr1.flat(3);        // 3 is no. of arrays present inside array instead of that we can write infinity, infinity automatically takes no. of arrays on its own
// console.log(fullarr);


// const arr1 = [1,2,3,[4,5,6],7,[8,9,[10,11]]];  
// const fullarr = arr1.flat(Infinity);     
// console.log(fullarr);  



// console.log(Array.isArray("Krishna"))      //isArray  is used to know wether the passed value i array or not
// console.log(Array.from("Krishna"))      //from is used to convert passed value into array


// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3));    // .of converts array into elements