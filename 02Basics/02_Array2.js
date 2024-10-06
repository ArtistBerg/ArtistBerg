const marvelHeros = ["Ironman","Thor","Spiderman"]
const dcHeros = ["Batman","flash","Superman"]
//Above are two arrays

//Now let's merge it
marvelHeros.push(dcHeros)
console.log(marvelHeros); //"changes the real array"

// Let's try another method
// concat doesn't change real array
    const marvelHeros2 = ["Ironman","Thor","Spiderman"]
    const allHeros = marvelHeros2.concat(dcHeros) 
    console.log(allHeros);

// 
    const newHeros = [ ...dcHeros,...marvelHeros ]
    console.log(newHeros);  // here already all dc heroes are there so output will contain dc heroes twice  

//   M E T H O D S    
    console.log(Array.isArray("Amit"));
    console.log(Array.from("Amit"));
    console.log(Array.from({name:"Amit"})) ;  // Interesting

    let score1 = 100;
    let score2 = 200;
    let score3 = 300;

    console.log(Array.of(score1, score2, score3));

 
//Here are rare situation

const another_array = [2, 3, 4, [ 5, 6, 7], 9, [1, [6,8]], 6]
const spread_Array = another_array.flat(Infinity)
console.log(spread_Array);