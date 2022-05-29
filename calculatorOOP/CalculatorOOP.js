class CalculatorOOP {
  constructor(operation, numbers) {
    this.operation = operation;
    this.numbers = numbers;
  }
  
  showResult(result) {
    console.log(result);
  }

  getCalculationResult(operation) {
    let result = null;

    switch (operation) {
      case "sum":
        result = this.setMathOperation("+");
        this.showResult(result);
        break;

      case "sub":
        result = this.setMathOperation("-");
        this.showResult(result);
        break;

      case "mult":
        result = this.setMathOperation("*");
        this.showResult(result);
        break;

      case "div":
        result = this.setMathOperation("/");
        this.showResult(result);
        break;

      default:
        console.log("unknown operation");
        break;
    }
  }
  
  setMathOperation(operator) {
    let total = null;

    if (operator === "+") {
      total = this.numbers.reduce((acc, num) => {
        return acc + num;
      });
    }

    if (operator === "-") {
      total = this.numbers.reduce((acc, num) => {
        return acc - num;
      });
    }

    if (operator === "*") {
      total = this.numbers.reduce((acc, num) => {
        return acc * num;
      });
    }

    if (operator === "/") {
      total = this.numbers.reduce((acc, num) => {
        return acc / num;
      });
    }
    return total;
  }

  init() {
    this.getCalculationResult(this.operation);
  }
}

module.exports = CalculatorOOP;
