// Two types of memory are there
// Stack (primitive) &  Heap (Non-primitive) 

//  STACK                       ********************************************************
//stack only gives copies of the original variable

let youtubechannelName = "Mrbeast"
let anotherName = youtubechannelName
anotherName = "NotMrbeast"

console.log(anotherName); //this don't change the original value 
console.log(youtubechannelName);

//  HEAP                        *******************************************************
// In heap memory the reference given is original so any changes made will be applies to the real one (not like stack memorty)

let userOne ={
    email: "amitator@google.com",
    age : 19,
}

let userTwo = userOne

userTwo.email = "animator@google.com"

console.log(userOne.email);
console.log(userTwo.email);
//both will be same bcz changing the userTwo Changes userOne as  well ;)