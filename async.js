const fs = require("fs");
const https = require("https");

console.log("Hello World ");

var a = 349584;
var b = 324324;

https.get("https://www.google.com/", (res)=>{
    console.log("Fetched Data SuccessFully");
});

setTimeout(()=>{
    console.log("setTimeout called after 5 seconds");
},5000);

fs.readFile("./file.txt","utf8", (err, data)=>{
    console.log("File Data: ", data);
});

function multiplyFn(x,y){
    const res = x*y;
    return res;
}

var c = multiplyFn(a,b);

console.log("Multiplication result is: ", c);


