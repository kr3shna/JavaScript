// Immediately Invoked Function Expressions (IIFE)
// IIFI:-An IIFE is a JavaScript function that runs as soon as it is defined.IIFEs prevent pollution of the global JS scope. In a traditional function, if you create a variable within the function, it is accessible in the global object. If you define a variable in an IIFE, it is accessible only directly within the function
//syntax:- ()()      here, 1st () is where we write defination of our function and 2nd () is execution call of our fuction 

(function chai(){                   // It is named IIFE
    console.log(`DB CONNECTED`)
})();
//NOTE:- it is must write ; at the end of the function when we are writing two IIFE


//Another way of writing IIFE

((name) => {                     // it is unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("jethabhai")