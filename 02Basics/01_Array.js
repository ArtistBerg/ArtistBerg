// arrays
// 0 based indexing 
// shallow copy : shallow copy of an object is a copy whose properties share the same reference as those of the source object.
//  deep copy   : deep copy of an object is a copy whose properties do not share the same reference as those of the source.

const myArr = [0, 1, 2, 3, 4]

const myHeros = ["AllMight", "Deku", "Endeavour"]
console.log(myArr[2]);
console.log(myHeros[2]);

//array methods  

myArr.push(6)    //6 will be inserted  
myArr.pop()      //simply removes last item
// console.log(myArr);

myArr.unshift(9)  //inserts as 1st element
myArr.shift()     //removes first element
// console.log(myArr);

console.log(myArr.includes(9));  //boolean value :true\false
console.log(myArr.indexOf(8));   //gives index of item
//if not exist = -1

// changing array into string 
const newArry = myArr.join()

console.log(myArr);
console.log(typeof newArry)

const myNewArray = [25, 78, 95, 21, 62] 
console.log("A",myNewArray); //original

const myNewArray1 = myNewArray.slice(1,4)
console.log("slice",myNewArray1);
console.log("B",myNewArray); //After slice

const myNewArray2 = myNewArray.splice(1,3)
console.log("splice",myNewArray2);
console.log("C",myNewArray); //After splice
