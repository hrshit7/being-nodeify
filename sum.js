// modules protect there variables and functions from leaking
function calculateSum(a,b){
    console.log(a , b);
}

module.exports = {
    calculateSum,
}