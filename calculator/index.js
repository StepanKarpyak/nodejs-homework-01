// let {getCalculationResult} = require('./calculatorOperations')

// getCalculationResult();
let { setMathOperation, getCalculationResult } = require('./calculatorOperations');
let showResult = require('./showResult');
let { operation } = require('./utils');



getCalculationResult(operation, setMathOperation, showResult);

