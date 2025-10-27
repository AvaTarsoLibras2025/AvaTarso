//estado da calculadora popup
let currentInputPopup = '0';
let previousInputPopup = '';
let operationPopup = null;
let shouldResetDisplayPopup = false;

//display popup
let displayPopup;

//inicializa a calculadora popup
document.addEventListener('DOMContentLoaded', function() {
    displayPopup = document.getElementById('display-popup');
    updateDisplayPopup();
});

//abrir ou fechar a calculadora popup
function abrirCalculadora() {
    const overlay = document.getElementById('overlay-calculadora');
    if (overlay) {
        overlay.style.display = "flex";
        displayPopup = document.getElementById('display-popup');
        updateDisplayPopup();
    }
}

function fecharCalculadora() {
    const overlay = document.getElementById('overlay-calculadora');
    if (overlay) {
        overlay.style.display = "none";
    }
}

//fechando calculadora ao clicar fora
document.addEventListener('click', function(event) {
    const overlay = document.getElementById('overlay-calculadora');
    const widget = document.querySelector('.calculadora-widget');
    
    if (overlay && overlay.style.display === 'flex' && 
        !overlay.contains(event.target) && 
        !widget.contains(event.target)) {
        fecharCalculadora();
    }
});

//atualizando display popup
function updateDisplayPopup() {
    if (displayPopup) {
        displayPopup.value = formatNumberWithSeparators(currentInputPopup);
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

//OPERAÇÕES E FUNÇÕES da calculadora popup
function addNumberPopup(num) {
    if (currentInputPopup === '0' || shouldResetDisplayPopup) {
        currentInputPopup = num;
        shouldResetDisplayPopup = false;
    } else {
        if (currentInputPopup.replace(/\./g, '').length < 12) {
            currentInputPopup += num;
        }
    }
    updateDisplayPopup();
}

function addDecimalPopup() {
    if (shouldResetDisplayPopup) {
        currentInputPopup = '0,';
        shouldResetDisplayPopup = false;
    } else if (!currentInputPopup.includes(',')) {
        currentInputPopup += ',';
    }
    updateDisplayPopup();
}

function setOperationPopup(op) {
    if (operationPopup !== null && !shouldResetDisplayPopup) {
        calculateResultPopup();
    }
    
    previousInputPopup = currentInputPopup.replace(/\./g, '');
    operationPopup = op;
    shouldResetDisplayPopup = true;
}

function calculateResultPopup() {
    if (operationPopup === null || shouldResetDisplayPopup) return;
    
    const prev = parseFloat(previousInputPopup.replace(',', '.'));
    const current = parseFloat(currentInputPopup.replace(/\./g, '').replace(',', '.'));
    let result;
    
    switch (operationPopup) {
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
                currentInputPopup = 'Erro: Div/0';
                operationPopup = null;
                previousInputPopup = '';
                shouldResetDisplayPopup = true;
                updateDisplayPopup();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    
    result = Math.round(result * 100000000) / 100000000;
    currentInputPopup = result.toString().replace('.', ',');
    operationPopup = null;
    previousInputPopup = '';
    shouldResetDisplayPopup = true;
    updateDisplayPopup();
}

function clearDisplayPopup() {
    currentInputPopup = '0';
    previousInputPopup = '';
    operationPopup = null;
    shouldResetDisplayPopup = false;
    updateDisplayPopup();
}

//teclado do popup
document.addEventListener('keydown', function(event) {
    const overlay = document.getElementById('overlay-calculadora');
    if (overlay && overlay.style.display === 'flex') {
        const key = event.key;
        
        if (key >= '0' && key <= '9') {
            addNumberPopup(key);
        } else if (key === '.' || key===',') {
            addDecimalPopup();
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            setOperationPopup(key);
        } else if (key === 'Enter' || key === '=') {
            calculateResultPopup();
        } else if (key === 'Escape' || key === 'c' || key === 'C') {
            clearDisplayPopup();
        } else if (key === 'Backspace') {
            if (currentInputPopup.length > 1) {
                currentInputPopup = currentInputPopup.slice(0, -1);
            } else {
                currentInputPopup = '0';
            }
            updateDisplayPopup();
        }
    }
});

//fechando popup c/ ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharCalculadora();
    }
});

//inicializa display do popup
if (displayPopup) updateDisplayPopup();