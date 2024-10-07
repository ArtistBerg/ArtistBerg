const user = {
    username : "Dostoevsky",
    price : 999,
     
    welcomeMessage : function(){
         console.log(`${this.username} , welcome to website`);
    }
}

user.welcomeMessage()
user.username =  "sam"  //name will be changed
user.welcomeMessage()    

console.log(this); // this shows the context, which is within {brackets}


// _____________ Funciton ma this use? : no thay ________________ // 

const chai = function(){
    let username = "masaledaar"
    console.log(this.username); // undefined
 }
// REASON : undefined means function ma (this) no hale but object ma j hale

//                        \
// ___________ >--Arrow=== > function [ () => ] _____________ //
//                        /  

const chapple = () => {
    let username = "masaledaar"
    console.log(this.username); //undefined
}

    // Intricit : descibe every detail :P _________________
    const addFive = (num1) => {
        return num1 + 5
    }

    // Emplicit : chalo maan liya bhai ;) _________________
    const addFour = (num1, num2) => num1 + num2
    // Another example
    const addTwo = (num1, num2) => ( num1 + num2 )


    console.log(addTwo(31,56));
    console.log(addFour(12,4));
    console.log(addFive(14));



// returning is object
const addAnything = (num1, num2) => ( {} )
const addAnything1 = (num1, num2) => ( { username : "Garba" } )



