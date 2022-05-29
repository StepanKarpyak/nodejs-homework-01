let {numbers} = require('../utils')


function setMathOperation(operator) {
    let total = null;

    if (operator === '+') {
        total = numbers.reduce((acc, num )=>{return acc + num})
    }
    
    if (operator === '-') {
        total = numbers.reduce((acc, num )=>{return acc - num})
    }

    if (operator === '*') {
        total = numbers.reduce((acc, num )=>{return acc * num})
    }

    if (operator === '/') {
        total = numbers.reduce((acc, num )=>{return acc / num})
    }
    return total;
}

module.exports = setMathOperation;