var number1 = document.getElementById('num1');
var number2 = document.getElementById('num2');
var resultNum = document.getElementById('result');
var errorMessage = document.getElementById('error');

function sumNum() {
    if (number1.value == '' | number2.value == '') {
        errorMessage.textContent = 'Input Errado!';  
    }

    else {
        errorMessage.textContent = '';
        
        let sumTotal = parseFloat(number1.value) + parseFloat(number2.value);

        resultNum.textContent = sumTotal;
    }
}

function subNum() {
    if (number1.value == '' | number2.value == '') {
        errorMessage.textContent = 'Input Errado!';
    }

    else {
        errorMessage.textContent = '';

        let subTotal = parseFloat(number1.value) - parseFloat(number2.value);

        resultNum.textContent = subTotal;
    }
}

function multiNum() {
    if (number1.value == '' | number2.value == '') {
        errorMessage.textContent = 'Input Errado!';
    }
    
    else {
        errorMessage.textContent = '';

        let multiTotal = parseFloat(number1.value) * parseFloat(number2.value);

        resultNum.textContent = multiTotal;
    }
}

function divNum() {
    if (number1.value == '' | number2.value == '') {
        errorMessage.textContent = 'Input Errado!';
    }

    if (number1.value == '0' | number2 == '0') {
        errorMessage.textContent = 'Impossível Dividir por 0!';
    }

    else {
        errorMessage.textContent = '';

        let divTotal = parseFloat(number1.value) / parseFloat(number2.value);

        resultNum.textContent = divTotal;
    }
}