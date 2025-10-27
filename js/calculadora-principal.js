//estado da calculadora principal
let currentInput = '0';
let previousInput = '';
let operation = null;
let shouldResetDisplay = false;

//display principal
const display = document.getElementById('display');

//atualiza display principal
function updateDisplay() {
    if (display) {
        display.value = formatNumberWithSeparators(currentInput);
    }
}

function formatNumberWithSeparators(numberString) {
    const parts = numberString.split(',');
    let integerPart = parts[0];
    const decimalPart = parts[1] || '';
    
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    if (decimalPart) {
        return integerPart + ',' + decimalPart;
    }
    return integerPart;
}

//funcoes da calculadora principal
function addNumber(num) {
    if (currentInput === '0' || shouldResetDisplay) {
        currentInput = num;
        shouldResetDisplay = false;
    } else {
        if (currentInput.replace(/\./g, '').length < 12) {
            currentInput += num;
        }
    }
    updateDisplay();
}

function addDecimal() {
    if (shouldResetDisplay) {
        currentInput = '0,';
        shouldResetDisplay = false;
    } else if (!currentInput.includes(',')) {
        currentInput += ',';
    }
    updateDisplay();
}

function setOperation(op) {
    if (operation !== null && !shouldResetDisplay) {
        calculateResult();
    }
    
    previousInput = currentInput.replace(/\./g, '');
    operation = op;
    shouldResetDisplay = true;
}

function calculateResult() {
    if (operation === null || shouldResetDisplay) return;
    
    const prev = parseFloat(previousInput.replace(',', '.'));
    const current = parseFloat(currentInput.replace(/\./g, '').replace(',', '.'));
    let result;
    
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                currentInput = 'Erro: Div/0';
                operation = null;
                previousInput = '';
                shouldResetDisplay = true;
                updateDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    
    result = Math.round(result * 100000000) / 100000000;
    currentInput = result.toString().replace('.', ',');
    operation = null;
    previousInput = '';
    shouldResetDisplay = true;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    shouldResetDisplay = false;
    updateDisplay();
}

//teclado
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        addNumber(key);
    } else if (key === '.' || key===',') {
        addDecimal();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        setOperation(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        if (currentInput.length > 1) {
            currentInput = currentInput.slice(0, -1);
        } else {
            currentInput = '0';
        }
        updateDisplay();
    }
});

//inicializa display
updateDisplay();