// Dates
// Date is Object


let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString);
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


let myCreatedDate = new Date(2024, 0, 23)
// console.log(myCreatedDate.toDateString());


let myCreatedDate1 = new Date(2024, 0, 23, 5, 3)    //here 0 represents Jan month
console.log(myCreatedDate1.toLocaleString());


let myCreatedDate2 = new Date("2023-01-14");
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-14-2023");
// console.log(myCreatedDate3.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));    //to get in milliseconds



let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

















