let startButton = document.getElementById("startButton");
let timeInputField = document.getElementById("timeInputField");
let remainingTimeField = document.getElementById("timeLeftField");

let minutesLeftField = document.getElementById("minutesLeftField");
let secondsLeftField = document.getElementById("secondsLeftField");

let timeMinutes = 30;

let timerId;

startButton.addEventListener("click", startTimer);

timeInputField.addEventListener("input", updateTimerTimeBeforeStart);

function startTimer(e) {
    timerId = setInterval(updateTimeLeft,1000);
}

function updateTimerTimeBeforeStart(e) {
    minutesLeftField.textContent = timeInputField.value;
    secondsLeftField.textContent = 0;
}

function updateTimeLeft() {
    let minutesLeft = minutesLeftField.textContent;
    let secondsLeft = secondsLeftField.textContent;
    
    if(secondsLeft == 0) {
        console.log("update seconds");
        
        minutesLeftField.textContent -= 1;
        secondsLeftField.textContent = 59;
    } else {
        console.log("take one");
        
        secondsLeftField.textContent -= 1;
    }
}