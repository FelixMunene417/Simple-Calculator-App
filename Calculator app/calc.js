
function remove() {
    const inputValue = document.querySelector('.input-scrn');
    inputValue.value = '';
}
function appendNumber(num) {
    const inputValue=document.querySelector('.input-scrn');
    inputValue.value += num;
}
function appendOperator(operator) {
    const operatorValue=document.querySelector('.input-scrn');
    operatorValue.value += operator;
}
function calculate() {
    try {
        const inputValue = document.querySelector('.input-scrn');
        const result = eval(inputValue.value);
        inputValue.value = result;
    }
    catch (error) {
        alert('Invalid expression');
    }
}
document.body.addEventListener(
    'keydown',(event)=> {
        if(event.key==='1') {
            appendNumber('1');
        }
        else if(event.key==='2') {
            appendNumber('2');
        }
        else if(event.key==='3') {
            appendNumber('3')
        }
        else if(event.key==='4') {
            appendNumber('4');
        }
        else if (event.key==='5') {
            appendNumber('5');
        }
        else if(event.key==='6') {
            appendNumber('6');
        }
        else if(event.key==='7') {
            appendNumber('7');
        }
        else if (event.key==='8') {
            appendNumber('8');
        }
        else if (event.key==='9') {
            appendNumber('9');
        }
        else if (event.key==='0') {
            appendNumber('0');
        }
        else if (event.key==='+') {
            appendOperator('+');
        }
        else if (event.key==='-') {
            appendOperator('-');
        }
        else if(event.key==='*') {
            appendOperator('*');
        }
        else if (event.key==='/') {
            appendOperator('/');
        }
        else if (event.key==='Backspace') {
            remove();
        }
        else if (event.key==='Enter') {
            calculate();
        }
    }
)