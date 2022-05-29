// let setMathOperation = require('./setMathOperation');
// let showResult = require('../showResult');

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

module.exports = getCalculationResult;