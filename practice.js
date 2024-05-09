let display = document.getElementById("display");
let expression = "";

function getNumber(num) {
    expression += num;
    display.value = expression;
}

function getOperator(op) {
    expression += op;
    display.value = expression;
}

function clearDisplay() {
    expression = "";
    display.value = "";
}

function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}

function calculateEquals() {
    debugger
    let numStack = [];
    let operatorStack = [];
    let num = "";

    for (let i = 0; i < expression.length; i++) {
        let element = expression[i];
        if (!isNaN(element)) {
            num += element;
        } else if (isOperator(element)) {
            numStack.push(parseFloat(num));
            num = "";

            while (
                operatorStack.length > 0 &&
                precedance(operatorStack[operatorStack.length - 1]) >=
                precedance(element)
            ) {
                let first = numStack.pop();
                let second = numStack.pop();
                let operator = operatorStack.pop();
                numStack.push(calculateEquals1(first, second, operator));
            }
            operatorStack.push(element);
        }
    }
    numStack.push(parseFloat(num));
    while (operatorStack.length > 0) {
        let first = numStack.pop();
        let second = numStack.pop();
        let operator = operatorStack.pop();
        numStack.push(calculateEquals1(first, second, operator));
    }

    let result = numStack.pop();
    display.value = result;
}

function calculateEquals1(a, b, c) {
    let result;
    switch (c) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;

        default:
            result = "invalid Operator";
            break;
    }
    return result;
}

function precedance(operator) {
    if (operator === "+" || operator === "-") {
        return 1;
    } else if (operator === "*" || operator === "/") {
        return 2;
    }
    return 0;
}
