// function sayHello(name) {
//     console.log("Hello there, Hitesh ");
//     console.log("Hello there", name);
// }
// sayHello("Hemal");
// sayHello("Amit");

// function sayHello1(name) {
//     console.log("Hi, Hitesh ");
//     console.log(`Hi ${name}, how are you?`);
// }
// sayHello1("Hemal");


// function to ADD two numbers


function addTwoNumber(number1,  number2){
    console.log(number1 + number2);
}
addTwoNumber(3, 2)
addTwoNumber(3, "a")
addTwoNumber(3, null)


// ___ function that returns something ___

function addTwoNumber(number1,  number2){
    return number1 +  number2
}
const result = addTwoNumber(3, 8)
console.log(result);

// TIP : after return function don't execute 

// ___ Another interesting function ___

function userLoginMessage(username){
    if(username === undefined){  //OR if(!username)     here, !(username) means username = undefined 
        console.log(`Please enter username`);
        return 
    }    
    return `${username} just logged in`
} 

console.log(userLoginMessage("Amit")) // name
console.log(userLoginMessage(""))     // empty string
console.log(userLoginMessage())       // undefined


//***___ Function useing object as parameter ___***/

//1//  REST operator and SPREAD operator[...something]
    function calculateCartPrice(...num1){
    return num1
    }
    console.log(calculateCartPrice(200, 300, 500));
 

//2// Passing Object
    const user = {
        username : " Amit ",
        price : 220
    }

    function handleObject(anyObject){
        console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`);
    }

    //handleObject(user)
    handleObject({
        username : "sam",
        price : 49
    })


//3// passing Array
    const myNewArray = [200, 650, 950, 700]
 
    function returnSecondValue(getArray){
        return getArray[1]
    }
 
    console.log(returnSecondValue(myNewArray));
    console.log(returnSecondValue([200, 540, 50]));//manually giving array