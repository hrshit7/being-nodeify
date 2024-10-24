const fs = require("fs");

console.log("Hello World ");

var a = 349584;

setImmediate(()=>{ 
    console.log("SetImmediate");
})

Promise.resolve("Resolve").then(console.log);

setTimeout(()=>{
    console.log("Timer Expires");
},0);

fs.readFile("./file.txt","utf8", (err, data)=>{
    console.log("File Data: ", data);
});

process.nextTick(()=>{console.log("process.nextTick")})

function Fn(a){
    console.log("a=", a );
}

Fn(a);

console.log("Last Line of the file");



/**
 * output = 
 * Hello World
 * a= 349584
 * Last Line of the file
 * process.nextTick
 * Resolve
 * Timer Expires
 * SetImmediate
 * File Data: ___________
 */