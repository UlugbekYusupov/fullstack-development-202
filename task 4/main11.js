const lamps = {
    red: document.querySelector('.lamp.red'),
    yellow: document.querySelector('.lamp.yellow'),
    green: document.querySelector('.lamp.green')
};

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const timerEl = document.getElementById('timer');

const sequence = [
    { color: 'red', duration: 30_000 },
    { color: 'yellow', duration: 5_000 },
    { color: 'green', duration: 30_000 },
    // second yellow mirrors real traffic flow when switching back to red
    { color: 'yellow', duration: 5_000 }
];

let timerId = null;
let tickId = null;
let running = false;
let stepIndex = 0;
let remainingMs = 0;

function setActive(color) {
    Object.values(lamps).forEach(lamp => lamp.classList.remove('active'));
    if (color && lamps[color]) {
        lamps[color].classList.add('active');
    }
}

function updateTimerDisplay() {
    const seconds = Math.ceil(remainingMs / 1000);
    timerEl.textContent = `Timer: ${running ? seconds : 0}s`;
}

function startTick() {
    if (tickId) clearInterval(tickId);
    tickId = setInterval(() => {
        if (!running) return;
        remainingMs = Math.max(remainingMs - 1000, 0);
        updateTimerDisplay();
    }, 1000);
}

function runStep() {
    if (!running) return;
    const { color, duration } = sequence[stepIndex];
    remainingMs = duration;
    setActive(color);
    updateTimerDisplay();
    startTick();
    timerId = setTimeout(() => {
        if (!running) return;
        stepIndex = (stepIndex + 1) % sequence.length;
        runStep();
    }, duration);
}

function startCycle() {
    if (running) return;
    running = true;
    stepIndex = 0;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    runStep();
}

function stopCycle() {
    running = false;
    if (timerId) {
        clearTimeout(timerId);
        timerId = null;
    }
    if (tickId) {
        clearInterval(tickId);
        tickId = null;
    }
    remainingMs = 0;
    setActive(null);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    updateTimerDisplay();
}

startBtn.addEventListener('click', startCycle);
stopBtn.addEventListener('click', stopCycle);

stopBtn.disabled = true;
setActive(null);
updateTimerDisplay();
