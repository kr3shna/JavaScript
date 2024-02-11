// console.log(7 > 1);
// console.log(7 >= 1);
// console.log(7 < 1);
// console.log(7 <= 1);
// console.log(7 != 1);


// console.log("7" > 0);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);     /* The reason is that an equality check == and comparisions >,<,<=,>= works differently
                               Comparisions convert null to a number ,treating it as 0.
                            That's why  null==0 is false and null>= is true*/
   
                            
//Strict check
// === (triple equals to it not only checks number bit it also checks datatype. It does not allow for conversion)
//  console.log("2"== 0);
//  console.log("2"===0);                            