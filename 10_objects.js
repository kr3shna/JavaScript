// object litrals 

const mySym = Symbol("key1")    // way of declearing symbol

const JsUser = {
    name: "Krishna",
    [mySym]: "mykey1",                                //using symbol as a key
    age: 18,
    location: "Newyork",
    email: "krishna@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Thursday"]

}

console.log(JsUser.email)         // 1st way of accessing objects
console.log(JsUser["email"])      // second way of accessing objects
console.log(JsUser[mySym])         // accessing symbol
console.log(typeof JsUser[mySym])


JsUser.email = "krishna@microsoft.com"    // changing values of object
console.log(JsUser.email)

Object.freeze(JsUser)                 // Object.freeze is use to freeze the object keys and their values so know one can change them
JsUser.email = "krishna@chatgpt.com";
console.log(JsUser);
