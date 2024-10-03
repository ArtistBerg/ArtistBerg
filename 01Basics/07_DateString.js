//Dates

//below local,data are method so they need to be with ->()

let myDate = new Date( )
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//different types of date format
let myCreateDate  = new Date( 2023, 0, 12) //simple
let myCreateDate1 = new Date("2023-1-12")  //yyyy-mm-dd
let myCreateDate2 = new Date("05-01-2021") //mm-dd-yyyy
let myCreateDate3 = new Date(2023, 0, 23, 8, 9, 32) //6 things is in LocaleString
//Date(yyyy, mm, dd, hour, minute, seconds)

console.log(myCreateDate.toDateString());
console.log(myCreateDate1.toLocaleString());
console.log(myCreateDate2.toLocaleString());
console.log(myCreateDate3.toLocaleString());

// ************** Time Stamp *************

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime()); //here Date is an OBJECT so methods an be used
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());//6 means saturday