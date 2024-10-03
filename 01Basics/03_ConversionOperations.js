let score = "33"
let score1 = "Kozorg"
let score2 = null
let score3 = 12
let score4 = undefined

console.log(typeof score);   //string
console.log(typeof (score2)); //object

let valueInNumber = Number(score) //storing as "number" in valueInNumber variable
console.log(valueInNumber);

// Now here see different conversion of variable
 
    //Printing                    Number(score)         console.log(valueNumber) 

// console.log(valueInNumber);      //  12              => 12
// console.log(valueInNumber);      //"12abc","Name"    => NaN  (Not an Number)
// console.log(valueInNumber);      // null             => 0
// console.log(valueInNumber);      //undefined         => NaN  (Not an Number)

// ****************************************************************************************************
let isLoggedIn = "AmirKhan"

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true;  0 => false
// "" => false
// "AmirKhan" => true


/**************** O p e r a t i o n s ******************/

let str1 = 4
let str2 = 5 
let str3 = str1 + str2

console.log(str3);

console.log("1" + 2);       //12
console.log(1 + "2");       //12
console.log(1 + 2 + "2");   //32   1 is number so it takes all as number
console.log("1" + 2 + 2);   //122  1 is string so 2 + 2 is not 4 here but considered as string


