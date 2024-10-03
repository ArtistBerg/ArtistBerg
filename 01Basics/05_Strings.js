let name = "Kozorg"
let champWin = 89

// console.log( name + " Wins " + champWin);  Bad way to do it

console.log(`Name of the ${champWin} streak winning champion is ${name}`);// here use ` ans ${}


const gameName = new String('NovaTrueDuck')


// TYPES OF STRING FUNCTIONS:
// at()         : ƒ at()
// charAt()     : ƒ charAt()
// codePointAt  : ƒ codePointAt()
// concat       : ƒ concat()
// constructor  : ƒ String()
// endsWith     : ƒ endsWith()
// indexof      : ƒ indexof()
// includes     : ƒ includes()
// indexOf      : ƒ indexOf()
// isWellFormed : ƒ isWellFormed()
 
//bakina screenshot ma 6 joi levi

console.log(gameName[0]);
console.log(gameName.at(3));
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());// this function don't change the real string(gameName) but creates a copy and prints it.
console.log(gameName.charAt(2));
console.log(gameName.indexOf('D'));//don't forget to putting into '__'

console.log(gameName.substring(1,4));// will print 'ova'


//LET"S place this in newString
const newString = gameName.substring(1,4);
console.log(newString);
// and anotherString
const anotherString = gameName.substring(-1,4); //can even put - infront of this
console.log(anotherString);

const newStringOne = "    Amit       "
console.log(newStringOne);
console.log(newStringOne.trim());//removes the spaces around text     

//replacing 
const url = "https://Gukesh.com/gukesh%20chess"

console.log( url.replace( '%20' , '-'));

console.log(url.includes('Gukesh'));  //does contain the string between : true/false

console.log(url.split('e'));   //search in mdn

// :::::  charAt() ::::: 
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"


// :::::  charCodeAt() ::::: 
const anotherSentence = 'The quick brown fox jumps over the lazy dog.';

const index1 = 4;

console.log(`Character code ${sentence.charCodeAt(index1)} is equal to ${sentence.charAt(index1)}`);
// Expected output: "Character code 113 is equal to q"

console.log(typeof anotherSentence);