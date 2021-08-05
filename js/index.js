import colors from './data.js';

const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');

startButton.addEventListener('click', startSwitchColor);
stopButton.addEventListener('click', stopSwitchColor);

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function switchColor() {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]
};

let switchInterval;

function startSwitchColor() {
    switchInterval = setInterval(switchColor, 1000);
    startButton.setAttribute('disabled', 'disabled');
    // console.log('start');
};

function stopSwitchColor() {
    clearInterval(switchInterval);
    startButton.removeAttribute('disabled');
    // console.log('stop');
};