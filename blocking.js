const crypto = require("crypto");

var a=453;
var b= 5245;

console.log("Hello Node");

// pbkdf2 = Password Base Key Deravetive Function 

// syncronus function - will block the main thread - Dont use it
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key generated");

setTimeout(()=>{                     // execute only if the main thread is empty;
    console.log("Print as soon as possible");
}, 0); // Trust Issues

// async function 
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err,key)=>{
    console.log("Second key generated");
} )

function multiplyFn(x,y){
    const res = x*y;
    return res;
}

var c = multiplyFn(a,b);

console.log("Multiplication result is: ", c);
