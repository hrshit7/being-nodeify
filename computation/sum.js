// modules protect there variables and functions from leaking

var x=40;

function calculateSum(a,b){
    const sum =a+b;
    console.log(sum);
}

module.exports = {
    x,
    calculateSum,
}