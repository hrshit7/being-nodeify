const fs = require("fs");

console.log("Hello World ");

var a = 349584;

setImmediate(()=>{ 
    console.log("SetImmediate");
})


setTimeout(()=>{
    console.log("setTimeout called after 5 seconds");
},5000);

fs.readFile("./file.txt","utf8", (err, data)=>{
    console.log("File Data: ", data);
});

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
 * setImmediate
 * File Data: __________
 * 
 * setTime out called after 5 seconds
 */