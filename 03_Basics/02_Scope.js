const a = 43;
if(true){

    let a = 50;
    console.log(a);
}
console.log(a);

// child can access the Icecream from adult
// adult can't take away Icecream from child

// Let's make a nested IF and learn something

if(true){
    const username = "Gayle";
    if(username === "Gayle"){
        const destiny = "pokemon"
        console.log(username);
    } 
    console.log(destiny);// here will be error
}
console.log(username);// here also will be error

function one(){
    const username = "Hitman"

    function two(){
    const website = "youtube"
    console.log(username); 
    }
    console.log(website);// error: website is only in function two
    
    two()
}



// **_____________ 2 TYPE OF FUNCTION INTIALISATION ___________**

//1// Normal(popular)

    function addOne(num){
        return num + 1
    }
    console.log(addOne(6));// calling allows before & after function

//2// Making a variable = function 

    const addTWO = function addTwo(num){
        return num + 2
    }
    console.log(addTWO(7));//calling only after variable has been intialised