//estado da calculadora
let currentInput = '0';
let previousInput = '';
let operation = null;
let shouldResetDisplay = false;

//elemento do display
const display = document.getElementById('display');

//atualiza display
function updateDisplay() {
    display.value = currentInput;
}

//adicionando numero
function addNumber(num) {
    if (currentInput === '0' || shouldResetDisplay) {
        currentInput = num;
        shouldResetDisplay = false;
    } else {
        //tamanho máximo do display
        if (currentInput.length < 12) {
            currentInput += num;
        }
    }
    updateDisplay();
}

//adicionando ponto decimal
function addDecimal() {
    if (shouldResetDisplay) {
        currentInput = '0.';
        shouldResetDisplay = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

//definindo operação
function setOperation(op) {
    if (operation !== null && !shouldResetDisplay) {
        calculateResult();
    }
    
    previousInput = currentInput;
    operation = op;
    shouldResetDisplay = true;
}

//calculando resultado
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
                // mostra erro no display
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
    
    //arredondando resultado
    result = Math.round(result * 100000000) / 100000000;
    
    currentInput = result.toString();
    operation = null;
    previousInput = '';
    shouldResetDisplay = true;
    updateDisplay();
}

//limpar display
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
    } else if (key === '.') {
        addDecimal();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        setOperation(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        //backspace
        if (currentInput.length > 1) {
            currentInput = currentInput.slice(0, -1);
        } else {
            currentInput = '0';
        }
        updateDisplay();
    }
});

//inicia display
updateDisplay();