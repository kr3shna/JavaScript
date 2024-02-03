/*Kis tarah se data ko memory me rakha jata hai aur access kiya jata hai on that basis 
data types are classified into two types 1) Primitive Data types 2) Non-Primitive Data types*/

//Primitive Datatypes

/* 7 types:- strings, Number, Boolean, null, undefined,Symbol,BigInt */


// Refrence type (Non-Primitive datatypes)
//This are the values whose refrence are directly allocated in the memory

// Array, Objects ,Functions








// Memory
//There are two types of memory
//1) Stack Memory  (This memory is used in Primitive Datatype)
// whenever stack memory is used then we get the copy of the variable which we had decleared
//2) Heap Memory   (This memory is used in Non-Primitive Datatype)
//whenever this memory is used we get refrence of original value. so, whatever we will change it gets changes to the original value



// example for stack memory

// let name = "Krishna";
// let anothername = name;
// anothername = "Shende";

// console.log(name);
// console.log(anothername);

// example for heap memory

let userone={
    email: "user@google.com",
    upi: "user@ybl",
}

let usertwo = userone;
usertwo.email = "krishna.@google.com"

console.log(userone);
console.log(usertwo);