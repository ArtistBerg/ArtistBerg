// const tinderUser = new Object()  -Singlton Object

const tinderUser = {}
tinderUser.id = "123opl"
tinderUser.name = "samDhoni"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser ={
    email : "gigantomachia@gmali.com",
    fullname: {
        userfullname:{
        firstname :"gignato",
        lastname :"Machia",
      }
   }
}
console.log(regularUser.fullname.userfullname.lastname);


//______ Combining Object like we did in Array____

const obj1 = {1: "a", 2 : "b"}
const obj2 = {3: "4", 7 : "t"}

//Printing is 3 way____________

//normal
const obj3 = Object.assign( {}, obj1, obj2)
console.log(obj3);

//Not good 
const obj4 = {obj1, obj2}
console.log(obj4);

//Very good
const obj5 = {...obj1, ...obj2};//spreads the object and then prints
console.log(obj5);


// ________________ Printing different things realated to object _______________ //

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// gives the boolean value if property contains or not


const course = {
  coursename : "js in hindi",
  price : "999",
  courseInstructor : "Vishy Anand"
}

// course.courseInstructor nthi karvu => To courseInstructory uper thi print thay javu joie

const {courseInstructor} = course
console.log(`Course Instr: ${courseInstructor}`);
//change long name
const {courseInstructor: Instr} = course 
console.log(`Course Instr: ${Instr}`);




