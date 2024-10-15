
const { error } = require("console");
const fs = require("fs");

//create file through sync method
// fs.writeFileSync("./text.txt" , "hii harshit this side async");

//create file wiht async method
// fs.writeFile("./text.txt" , "hii harshit this side async", (error)=>{});

//read file with sync method
// const res = fs.readFileSync("./text.txt", "utf-8");
// console.log(res);

//read file through async method 
// fs.readFile("./text.txt", "utf-8", (error, result)=>{
//     if(error){
//         return error;
//     }else{
//         return result;
//     }
// });

//also we can append thing, copy file, etc file handling works can be done through it.

