// estado da calculadora
let currentInput = '0';
let previousInput = '';
let operation = null;
let shouldResetDisplay = false;

// elemento display
const display = document.getElementById('display');

//função atualiza o display
function updateDisplay() {
    display.value = currentInput;
}

// função q adiciona números
function addNumber(num) {
    if (currentInput === '0' || shouldResetDisplay) {
        currentInput = num;
        shouldResetDisplay = false;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

// adiciona pto decimal
function addDecimal() {
    if (shouldResetDisplay) {
        currentInput = '0.';
        shouldResetDisplay = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

// define a operação
function setOperation(op) {
    if (operation !== null && !shouldResetDisplay) {
        calculateResult();
    }
    
    previousInput = currentInput;
    operation = op;
    shouldResetDisplay = true;
}

// calcula o resultado
function calculateResult() {
    if (operation === null || shouldResetDisplay) return;
    
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
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
                alert('Erro: Divisão por zero!');
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operation = null;
    previousInput = '';
    shouldResetDisplay = true;
    updateDisplay();
}

// limpa o display
function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    shouldResetDisplay = false;
    updateDisplay();
}

//inicializa display
updateDisplay();