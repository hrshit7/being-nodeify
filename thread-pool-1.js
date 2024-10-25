const crypto = require("crypto");
const os = require("os");

// size of thread pool is by default 4
// and increase by ----

process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("password", "salt", 5000000, 50 , "sha512", (err, key)=>{
    console.log("1- cryptoPBKDF2 done");
});
crypto.pbkdf2("password", "salt", 5000000, 50 , "sha512", (err, key)=>{
    console.log("2- cryptoPBKDF2 done");
});
crypto.pbkdf2("password", "salt", 5000000, 50 , "sha512", (err, key)=>{
    console.log("3- cryptoPBKDF2 done");
});
crypto.pbkdf2("password", "salt", 5000000, 50 , "sha512", (err, key)=>{
    console.log("4- cryptoPBKDF2 done");
});
crypto.pbkdf2("password", "salt", 5000000, 50 , "sha512", (err, key)=>{
    console.log("5- cryptoPBKDF2 done");
});
