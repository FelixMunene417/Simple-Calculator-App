
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
