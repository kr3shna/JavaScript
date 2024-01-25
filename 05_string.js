//Strings can be represented by single quotes and double quotes
//ex:- "Hello Krishna"
//ex:- 'Hello Krishna'


// const name ="krishna";
//  const  lastname ="shende";
// console.log(name + lastname);  // first way to add string

// console.log(`MY name is ${name} and my surname is ${lastname}`)  // Second way to add string


let mrp = 1299;
let disprice = 799;
console.log("The MRP of item is " + mrp);
console.log("The Discounted price of item is " + disprice);
let disper = ((mrp - disprice)/mrp) * 100;
let roundPrice = Math.round(disper);
console.log(`You Saved ${roundPrice}%`);

