const displayEl = document.getElementById('display');
const keys = document.querySelector('.keys');

let current = '0';
let previous = null;
let operator = null;
let justEvaluated = false;

const operatorsMap = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b === 0 ? 'Error' : a / b,
};

const updateDisplay = (value = current) => {
    displayEl.textContent = value;
};

const handleNumber = (digit) => {
    if (justEvaluated) {
        current = digit;
        justEvaluated = false;
        updateDisplay();
        return;
    }

    if (current === '0') {
        current = digit;
    } else {
        current += digit;
    }
    updateDisplay();
};

const handleDecimal = () => {
    if (justEvaluated) {
        current = '0.';
        justEvaluated = false;
        updateDisplay();
        return;
    }
    if (!current.includes('.')) {
        current += '.';
        updateDisplay();
    }
};

const handleClear = () => {
    current = '0';
    previous = null;
    operator = null;
    justEvaluated = false;
    updateDisplay();
};

const handleDelete = () => {
    if (justEvaluated) {
        handleClear();
        return;
    }
    current = current.length > 1 ? current.slice(0, -1) : '0';
    updateDisplay();
};

const handlePercent = () => {
    const value = parseFloat(current);
    if (!Number.isNaN(value)) {
        current = (value / 100).toString();
        updateDisplay();
    }
};

const commitOperation = () => {
    if (operator && previous !== null) {
        const a = parseFloat(previous);
        const b = parseFloat(current);
        const result = operatorsMap[operator](a, b);
        current = result === 'Error' ? 'Error' : result.toString();
        previous = null;
        operator = null;
        updateDisplay(current);
        justEvaluated = true;
    }
};

const setOperator = (op) => {
    if (operator && !justEvaluated) {
        commitOperation();
    }
    previous = current;
    current = '0';
    operator = op;
    justEvaluated = false;
};

keys.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLButtonElement)) return;

    const number = target.dataset.number;
    const action = target.dataset.action;
    const op = target.dataset.operator;

    if (number) {
        handleNumber(number);
        return;
    }

    if (action === 'decimal') {
        handleDecimal();
        return;
    }

    if (action === 'clear') {
        handleClear();
        return;
    }

    if (action === 'delete') {
        handleDelete();
        return;
    }

    if (action === 'percent') {
        handlePercent();
        return;
    }

    if (action === 'equals') {
        commitOperation();
        return;
    }

    if (op) {
        if (current === 'Error') {
            handleClear();
        }
        setOperator(op);
    }
});

document.addEventListener('keydown', (e) => {
    if (/\d/.test(e.key)) {
        handleNumber(e.key);
    } else if (e.key === '.') {
        handleDecimal();
    } else if (['+', '-', '*', '/'].includes(e.key)) {
        const opMap = { '+': 'add', '-': 'subtract', '*': 'multiply', '/': 'divide' };
        setOperator(opMap[e.key]);
    } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        commitOperation();
    } else if (e.key === 'Backspace') {
        handleDelete();
    } else if (e.key === 'Escape') {
        handleClear();
    }
});
