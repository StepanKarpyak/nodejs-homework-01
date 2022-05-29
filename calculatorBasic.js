// console.log(process);
// console.log(process.env.stepan);
// console.log(process.env.mykola);
// console.log(process.env.NODE_ENV);
// console.log(process.argv);
// sum , sub , mult , div 
const [operation,...args] = process.argv.slice(2);
const numbers = args.map(item => Number(item));

// console.log(numbers);

// const resultSum = numbers.reduce((acc, num )=>{return acc+num} )
// console.log(resultSum);

// const resultSub = numbers.reduce((acc, num )=>{return acc-num} )
// console.log(resultSub);

// const resultMult = numbers.reduce((acc, num )=>{return acc*num} )
// console.log(resultMult);

// const resultDiv = numbers.reduce((acc, num )=>{return acc/num} )
// console.log(resultDiv);

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


function showResult(result) {
    console.log(result)
}


function getCalculationResult(operation, setMathOperation, showResult) {
    let result = null;
    
    switch (operation) {

    case 'sum':
        result = setMathOperation('+')
        showResult(result);
        break;
    
    case 'sub':
        result = setMathOperation('-')
        showResult(result);
        break;
    
    case 'mult':
        result = setMathOperation('*')
        showResult(result);
        break;
    
    case 'div':
        result = setMathOperation('/')
        showResult(result);
        break;
    
    default:
        console.log('unknot operation');
        break;
}
}

getCalculationResult(operation, setMathOperation, showResult);
