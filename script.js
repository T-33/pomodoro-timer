let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let timeInputField = document.getElementById("timeInputField");
let remainingTimeField = document.getElementById("timeLeftField");

let minutesTensField = document.getElementById("minutesTensField");
let minutesOnesField = document.getElementById("minutesOnesField");
let secondsTensField = document.getElementById("secondsTensField");
let secondsOnesField = document.getElementById("secondsOnesField");

let minutes = 30;
let seconds = 0;

let intervalId;

let timerStarted = false;

startButton.addEventListener("click", (e) => {
    minutes = timeInputField.value;
    updateTimeField(timeInputField.value, 0);
    startTimer();
});

stopButton.addEventListener("click", (e) => {
    minutes = 0;
    seconds = 0;
    updateTimeField(0, 0);
    stopTimer();
    alert("Time is up!!!");
});

timeInputField.addEventListener("input", (e) => {
    if(!timerStarted) {
        minutes = timeInputField.value;
        
        updateTimeField(timeInputField.value, 0);
    }
});

function startTimer(e) {
    stopTimer();
    timerStarted = true;
    intervalId = setInterval((e) => {
        updateTime();
        console.log(minutes + " " + seconds);
        updateTimeField(minutes, seconds);
    },1000);
}


function updateTime() {
   if(!(minutes == 0 && seconds == 0)) {
        seconds -= 1;

    if(seconds < 0) {
        seconds = 59;
        minutes -= 1;
    }
}
}

function updateTimeField(minutes, seconds) {
    minutesTensField.textContent = Math.floor(minutes / 10);
    minutesOnesField.textContent = minutes % 10;

    secondsTensField.textContent = Math.floor(seconds / 10);
    secondsOnesField.textContent = seconds % 10;
}

function stopTimer() {
    clearInterval(intervalId);
}
