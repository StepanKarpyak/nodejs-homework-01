// let {getCalculationResult} = require('./calculatorOperations')

// getCalculationResult();
// let { setMathOperation, getCalculationResult } = require('./calculatorOperations');
// let showResult = require('./showResult');
let { operation, numbers } = require('./utils');
let CalculatorOOP = require('./CalculatorOOP');

new CalculatorOOP(operation, numbers).init();
// getCalculationResult(operation, setMathOperation, showResult);

