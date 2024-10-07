/* Immidiately Invoked Function Expression
    >HOW we can immidiately run the function
    >Also helps separate the function from pollution done by outer scope
*/ 

(function chai(){
    // named IIFE 
    console.log(`DB CONNECTED`);
})();

/*   ()()  : Two paranthesis, One for function, Other for execution
Always put semicolon ; after this IIFE */

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) (`hitesh`)

 