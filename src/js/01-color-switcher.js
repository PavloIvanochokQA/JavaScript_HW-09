function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
};

const startButtonRef = document.querySelector('[data-start]');
const stopButtonRef = document.querySelector('[data-stop]');
const body = document.querySelector('body');

startButtonRef.addEventListener('click', onStartButtonClick);
stopButtonRef.addEventListener('click', onStopButtonClick);
stopButtonRef.disabled = true;
let intervalId = null;

function onStartButtonClick(event) {
    event.target.disabled = true;
    stopButtonRef.disabled = false;
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000);
};

function onStopButtonClick(event) {
    event.target.disabled = true;
    startButtonRef.disabled = false;
    clearInterval(intervalId);
};