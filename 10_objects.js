// declration of objects through object litrals 

// const mySym = Symbol("key1")    // way of declearing symbol

// const JsUser = {
//     name: "Krishna",
//     [mySym]: "mykey1",                                //using symbol as a key
//     age: 18,
//     location: "Newyork",
//     email: "krishna@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday","Thursday"]

// }

// console.log(JsUser.email)         // 1st way of accessing objects
// console.log(JsUser["email"])      // second way of accessing objects
// console.log(JsUser[mySym])         // accessing symbol
// console.log(typeof JsUser[mySym])


// JsUser.email = "krishna@microsoft.com"    // changing values of object
// console.log(JsUser.email)

// Object.freeze(JsUser)                 // Object.freeze is use to freeze the object keys and their values so know one can change them
// JsUser.email = "krishna@chatgpt.com";
// console.log(JsUser);




// Declration of objects through singleton or construtor  

//  const tinder = new Object()         // 1st way of declearing object             //This is Singleton Object
// const tinderUser = {}           //2nd way of declearing object                   //This is non singleton Object

// tinderUser.id = "123abc";
// tinderUser.name = "sammy";
// tinderUser.isLoggedIn = false;

// // console.log(tinderUser);
// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//Nested Objects

// const regularUser = {
//     email: "some@gmail.com",
//     fullName:{
//         userFullname:{
//         firstName:"xyz",
//         lastName:"abc",
//        }
//     }
// }

// console.log(regularUser.fullName.userFullname.firstName)
   

// Merging / combining objects

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2)
// const obj3 ={...obj1, ...obj2}     //we will mostly use this spread operator
// console.log(obj3);


//When values come from Database  most of the time values from database come in the form of array of objects
// Array of Objects              

// const user = [
//     {
//         id: 1,
//         email: "x@gmail.com",
//     },
//     {
//         id: 2,
//         email: "y@gmail.com",
//     },
//     {
//         id: 3,
//         email: "z@gmail.com",
//     }
// ]

// console.log(user[0].email)


// Destructuring of Objects

// const course = {
//     courseName: "Best ever js course",
//     coursePrice: "999",
//     courseInstructor: "Hitesh Sir",
// }

// const {courseInstructor} = course;    // Another way of accessing objects if we are printing  it multiple time we don't have to write course.Instructor
// console.log(courseInstructor);

// const {courseInstructor: instructor} = course;      //destructuring object here we have assign courseInstructor another name as instructor so after that we will be using instructor to print courseInstructor

// console.log(instructor); 




