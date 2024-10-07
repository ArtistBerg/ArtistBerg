const user = {
    username: "Amit",
    loginCount: 5,
    signedIn: true,

    getUserDetails: (() => console.log(`Username: ${this.username}`))
}
// console.log(user.username);
console.log(user.getUserDetails()); // have to call the function


// function as constructor
function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn
    
    return this
}

// "new" ?
    const userOne = User("Amit", 55, true) 
    console.log(userOne); // will give global context

    const userTwo = new User("Avani", 4, false)
    console.log(userTwo); // will give only necessery context

// "new" : contructor 
//       => creates new instance of the function User(){}
//       => not using this word will make a mess.
//       => userTwo will override the userOne's data when initialises(called)
//       => while printing only necessery details will be shown => see the difference between "userOne" and "userTwo"

    const userThree = new User("Himmat", 3, true)
    console.log(userThree);
    


