const score  = 500
console.log(score);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString().length);//converted in string then length
console.log(balance.toFixed(3)); //decimals after number
                                 // max : 20

const otherNumber = 123.82480
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(5));
console.log(otherNumber.toPrecision(2));

const hundreds = 5000000 
console.log(hundreds.toLocaleString('en-US'));   //5,000,000
console.log(hundreds.toLocaleString());          //50,00,000 or use 'en-IN' 
console.log(hundreds.toLocaleString(`en-IN`));          //50,00,000 or use 'en-IN' 

// +++++++++++++++++++++++++ M A T H S ++++++++++++++++++++++++++

// Write console.log(Math) in inspect in web browser

console.log(Math);
console.log(Math.abs(-4));    //  absolute value :|-4| = 4   
console.log(Math.round(5.259832));
console.log(Math.ceil(5.12));
console.log(Math.floor(512.6519));
console.log(Math.min(4, 5, 8, 9));
console.log(Math.max(4, 5, 8, 9));


console.log(Math.random());
console.log( (Math.random()*10) +1);  // min 1 to aavej atle +1 karyu
console.log( Math.floor(Math.random()*10) +1);
//here, all the number after .(dot) will disappear

//Here I made computer Generated number between 50 to 100
const min = 50 ;
const max = 100 ;

console.log(Math.floor((Math.random()*4) + 50));//gives between 50 to 53
console.log(Math.floor((Math.random()*5) + 50));//gives between 50 to 54
// console.log(Math.floor((Math.random()*10) + 1)+ (max-min));
// console.log(Math.floor(Math.random()*(max - min + 1) ) + min );
