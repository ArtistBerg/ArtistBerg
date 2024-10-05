const promiseOne = new Promise(function(resolve, reject){
    // DO an async task
        // Database(DB) Calls, cryptography, network
    setTimeout(function(){
        console.log('Async taks is complete');
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

// In other method of promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 complete');
        resolve();//resolve called
    },2000)
}).then(function(){
    console.log('Async 2 resolved');
})

  
// third promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "chai", email: "amit@chai.com"})
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
    
})

// fourth promise (learning error handling)
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){ 
        let error = false;
        if (!error) {
            resolve({username: "amit"});//you can pass an object
        } else {
            reject('ERROR: Something Went Wrong!');
        }
    }, 1000)
})

// chainning of .then() 
promiseFour.then((user) => {
                console.log(user);
                return user.username
            }).then((call) => {
                     console.log(`doubled .then() ${call}`);
               }).catch(() => {
                        console.log('ERROR: Something went wrong');
                  }) 

// Adding finally()

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error =  false;
        if (!error) {
            resolve({ name : "Optimus Prime", role: "Hero"})   
        } else {
            reject("ERROR: Prime not found")
        }
    }, 3000);
})
//another way to write pretty code
promiseFive
.then((a) => { 
    console.log(a);        
    return a.role
})
.then((b) => {
    console.log(b);
})
.catch(() => {
    console.log("Error: PromiseFive errored");
})
.finally(() => console.log("Promise is either resolved or rejected"))


// Promise sixth
    // .then()   .catch()    => NOT USING
    // ASYNC await           => USING
const promiseSix = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error =  true;
        if (!error) {
            resolve({ name : "Javascript", pass: "myHero"})   
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 3000);
})

// This async function can't handle error from promiseSix
    // async function consume_SIX(){
    //     const response = await promiseSix  ---
    //     console.log(response);                 \
    // }                                           |
                                         //        |
// With try-catch block                            |
async function consume_SIX(){            //        |    
    try {                                //       /  
        const response = await promiseSix//   <---   
        console.log(response);   
    } catch (error) {
        console.log(error);
        
    }
}
consume_SIX()


async function getAllUsers() {
    const response = await fetch('https://api.github.com/users/artistberg')
    const data = response.json()// string to json
    console.log(data);
}
getAllUsers();