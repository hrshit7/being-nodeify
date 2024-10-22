require("./xyz");

// const {calculateSum, x} = require("./computation/sum");

const util = require("util")         // modules in node itself 

const {calculateMultiply, calculateSum, x} = require("./Computation");

//import {x, calculateSum} from "./sum.js"      in es6 modules

const data = require("./data.json");

console.log(data);

var name = "Harshit Choudhary";

var a=10;

var b = 20;

calculateMultiply(4,5);

calculateSum(4,5);

console.log(x);

console.log(name);

console.log(a+b);