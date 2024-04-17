function divide(a, b) {
    return Math.round((a / b) * 1000) / 1000;
}

function multiply(a, b) {
    return Math.round((a * b) * 1000) /1000;
}

function divideByHundred(n) {
    return n / 100;
}

function operate(num1, operator, num2) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        case '%':
            return divideByHundred(num1);
    }
}

let num1;
let num2;
let operator;
let inputValue; // store input value for calculation

let array = [];
function getOperands() {
    array = inputValue.split(/[+\-\/%*]/g); // get two operands
    num1 = Number(array[0]);
    num2 = Number(array[1]); 
}

let input = document.querySelector('.input');
let buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let text = button.textContent || button.innerText;
        if(text != '=') {
            input.textContent += text;
        }
        inputValue = input.textContent || input.innerText;
        // select operator for calculation
        if(button.id == 'operator') operator = button.textContent || button.innerText;
        // show result
        if(button.id == 'equal') {
            getOperands();
            // only calculate when user has entered both operands and operator
            if(array.length == 2) input.textContent = operate(num1, operator, num2);
        }
      });
      
});


