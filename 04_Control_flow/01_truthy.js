// We will take here about truthy and falsy values
//  In if and else statement OR switch( )

//  CONSIDER THIS LIST:

    // Falsy values:
    // false, 0, -0, BigInt 0n, "", Null, NaN, undefined


    // Truthy values;
    // "false", "0", " ", {}, [], function(){}

// How to check string?
    let userEmail = " ";             // " " : True,  "": false
        if(userEmail.length === 0) {
            console.log("User Email is empty");
        }

// HOW to check Object?
    const emptyObj = {}
    // Object.keys(newObj) will return ARRAY
        if (Object.keys(emptyObj).length === 0) {
             console.log("Object is empty");
        }

// Nullish Coalescing Operator (??) : null, undefined
    let val1;
    // val1 = 8 ?? 10
    val1 = null ?? 10
    // val1 = undefined ?? 10
    // val1 = null ?? 20 ?? 10     //20 & 10 mathi je pela hase e

    console.log(val1);


// Ternary Operator
    // condition ? true : false
//exa.
    const iceTea = 50;
    iceTea <=80 ? console.log("less than 80") :console.log("More than 80")
