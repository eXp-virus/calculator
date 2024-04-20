function divide(a, b) {
    return Math.round((a / b) * 10000) / 10000;
}

function multiply(a, b) {
    return Math.round((a * b) * 10000) /10000;
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
let inputValue;
let result = 0; // store results of operate fn 


let input = document.querySelector('.input');
let buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let text = button.textContent || button.innerText;
        if(text != '=' && text != 'del') {
            input.textContent += text;
        }

    
        // select operator for calculation
        if(button.id == 'operator') {
            operator = button.textContent || button.innerText;
            num1 = Number(input.textContent.slice(0, -1));
        }

        if(operator) {
            num2 = getNum2();
        }
        
        if(button.id == 'equal') {
            result = operate(num1, operator, num2);
            input.textContent = result;
        }
        if(text == '%') {
            input.textContent = operate(num1, '%');
            
        }
        if(text == 'C') {
            input.textContent = '';
            result = 0;
            operator = '';
            num1 = 0;
            num2 = 0;
        }
        if(text == 'del') { // delete last entered input
            let lastEntered = input.textContent.slice(0, -1);
            input.textContent = lastEntered;
        }
        inputValue = input.textContent;
      });
      
});

function getNum2() {
    inputValue = input.textContent;
    let array = inputValue.split(/[+*/-]/g);
    return Number(array[array.length - 1]);
}