
var FullName = "Amit Jagda";
/*
Prefer not to use "var"
because of problem with block scope and functional scope that was in early code syntax.
*/

//naming variable | good way
    // fullName
    // full-name
    // full_name
    // FullName

/* how to initialise CONSTANT variable
  const means you can't change the value of it
    // const accountId
    // const accountAmit

    anything like this

*/    

// here

const accountId = 5686452            // can't change 
let accountEmail = "kozorg@dmail.com"// can change
var accountPassword = "the/;8yfudh"  // can change
accountCity = "Ujjain"               // can change   but plz don't use this to initialise

console.log(accountId)
console.table([accountId, accountPassword, accountEmail]) //To print together
/*IF you write
   accountId = 5236451                          : ERROR
      -this means you change the const value to new one, result in Error
*/

/*Undefined variable
  -if you don't define the variable then it is default value is undefined.
*/
