console.log("Hello World");

var a= 41804;
var b= 70439842;

setTimeout(()=>{                     // execute only if the main thread is empty;
    console.log("Print as soon as possible");
}, 0); // Trust Issues

function multiplyFn(x,y){
    const res = x*y;
    return res;
}

var c = multiplyFn(a,b);

console.log("Multiplication result is: ", c);

