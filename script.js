// 1. Press the number we save that number some where
// 2. Press the operator
//3. Press the second number 
// 4. Press the equal sign that make calculation


let firstNumber 
let secondNumber 
let step = 0
let operation
let result =  0
let numArray = []
let secondNumArray = []
let expression = ''

let display = document.getElementById('display')


function getNumber(num){
    return;
    if(step === 0 || step === 1){
        numArray.push(num)
        step=1
        firstNumber = Number(numArray.join('')) // merge into one string
        display.value = firstNumber
    } else if (step === 2){
        secondNumArray.push(num)
        secondNumber = Number(secondNumArray.join(''))
        display.value = secondNumber
    }
}


function getOperator(op){
    step = 2
    operation = op
}

function clearDisplay(){
    display.value = 0
    firstNumber = null
    secondNumber = null
    step = 0
    operation = null
    result = 0
    numArray = []
    secondNumArray = []
}

// const calculateEquals = ()=>{
//     if(operation === '+'){
//         result = firstNumber + secondNumber
//         display.value = result
//     } else if (operation === '-' ){
//         result = firstNumber - secondNumber
//         display.value = result
//     } else if ( operation === '*'){
//         result = firstNumber * secondNumber
//         display.value = result
//     } else if ( operation === '/'){
//         result = firstNumber / secondNumber
//         display.value = result
//     }
// }
// display.value = result
function calculateEquals  (a,b,c){
    let result;
    switch (c) {
      case '+':
        result = a + b;
        display.value = result
        break;
      case '-':
        result = a - b;
        display.value = result
        break;
      case '*':
        result = a * b;
        display.value = result
        break;
      case '/':
        result = a / b;
        display.value = result
        break;
      default:
        result = 'Invalid operator';
    }
    return result;
  }