 // singleton
 
//object literals

const JsUser = {} //this is simply object 

const randomObject ={
    name : "Amit",
    "full name" : "Amit Jagda", //dot(.) operator not usable
    age  : 21,
    location : "Morbi",
    email : "amitiscoder@google.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday","Saturday"]
}

//Let's print it.
// console.log(randomObject.email)
// console.log(randomObject["email"]); //more prefereble way
// console.log(randomObject["full name"]);


//* * *  * * *  ADDING SYMBOL *  * * *  * * * *
const mySymbol = Symbol("key1"); //Initialising
const ObjectWithSymbol ={
    name : "Amit",
    "full name" : "Amit Jagda", //dot(.) operator not usable
    age  : 21,
    [mySymbol] : "Mykey 1",
}
console.log(ObjectWithSymbol[mySymbol]);
//using [] is compalsory for printing/using symbol


// ___FREEZING the object___

randomObject.email = "hemal@chatgpt.com"
// Object.freeze(randomObject)
//now any change will not apply
randomObject.email = "Giganto@micorosoft.com"
console.log(randomObject)//giganto valu print nay thay bcz it has been freeze


/* _____ ADD - FUNCTIONS _____ */

randomObject.greetings = function(){
    console.log("Hello and Welcome to Greed Island");
}
randomObject.greetingsTwo = function(){
    console.log(`Hello ${this["full name"]} and Welcome to Greed Island`);
}

console.log(randomObject.greetings());
console.log(randomObject.greetingsTwo());