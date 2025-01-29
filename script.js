let startButton = document.getElementById("startButton");
let timeInputField = document.getElementById("timeInputField");

let timeMinutes = 30;

startButton.addEventListener("click", (e) => {
    timeMinutes = timeInputField.value;
    console.log(`Time value = ${timeMinutes}`);
})