// sync operations code can run only v8
console.log("Hello World");

var a= 41804;
var b= 70439842;

function multiplyFn(x,y){
    const res = x*y;
    return res;
}

var c = multiplyFn(a,b);

console.log("Multiplication result is: ", c);

