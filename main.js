let result = '';
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let isDoneOpera = false;

Array.prototype.forEach.call(numbers, function (number) {
    number.onclick = add;
})

Array.prototype.forEach.call(operators, function (operator) {
    operator.onclick = add;
})
document.querySelector('#clear').onclick = clear;
document.querySelector('#sign').onclick = changeSign;

function add(e) {
    if (e.target.innerHTML === '=') {
        calc();
        isDoneOpera = true;
        return;
    }
    let newResult = e.target.innerText.toString();
    if(isDoneOpera === true &&
    (newResult !== '+' && newResult !== '-' && newResult !== 'x' && newResult !== '÷')) {
        result = '';
        console.log('new opera')
    }
    isDoneOpera = false;
    if (check() === 1 &&
    (newResult === '+' || newResult === '-' || newResult === 'x' || newResult === '÷')) {
        let index = result.length-1;
        result = result.substr(0, index);
        console.log(result);
    } 
    result = result.toString() + newResult;
    document.querySelector('#current').innerHTML = result;
    console.log(result);
}

function calc() {
    result = result.replace('x','*');
    result = result.replace('÷','/'); 
    result = eval(result).toString();
    console.log('result = ' + result);
    document.querySelector('#result').innerHTML = result;
}

function check() {
    let opera = result.substr(result.length - 1, 1);
    if (opera === '+' || opera === '-' || opera === 'x' || opera === '÷') {
        return 1;
    }
    return 0;
}

function clear() {
    result = '';
    document.querySelector('#result').innerHTML = '';
    document.querySelector('#current').innerHTML = '0';
}

function changeSign() {
    // let temp = result;
}