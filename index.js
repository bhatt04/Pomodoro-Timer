
const startE1 = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const resetE1 = document.getElementById("reset");
const timerE1 = document.getElementById("timer");
const titleE1 = document.getElementById("title");

//popup
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");
const alarmSound = document.getElementById("alarm-sound");
popup.style.display = "none";

let interval;
let timeleft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerE1.innerText = formattedTime;
}

function startTimer() {
    titleE1.style.opacity = "0";
    timerE1.classList.add("fullscreen");
    stopE1.classList.remove("hidden");
    resetE1.classList.remove("hidden");

    // Start countdown
    interval = setInterval(() => {
        timeleft--;
        updateTimer();

        if (timeleft === 0) {
            clearInterval(interval);
            // alert("Time's up!");
            popup.style.display = "flex";
            // alarmSound.play();
            playAlarmSound();
            timeleft = 1500;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timeleft = 1500;
    updateTimer();
}

startE1.addEventListener("click", startTimer);
stopE1.addEventListener("click", stopTimer);
resetE1.addEventListener("click", resetTimer);


function playAlarmSound() {
    alarmSound.play().catch(error => {
        console.log("Audio playback failed:", error);
    });
}

function stopAlarmSound() {
    alarmSound.pause(); 
    alarmSound.currentTime = 0; 
}


closePopup.addEventListener("click", () => {
    popup.style.display = "none";
    stopAlarmSound();
});


//toogle 
const inputE1= document.querySelector(".input");
const bodyE1 = document.querySelector("body");

updateBody();

function updateBody(){
    if(inputE1.checked){
        bodyE1.style.background="rgb(5, 19, 75)";
    }else{
        bodyE1.style.background="#6f61ea ";
    }
}

inputE1.addEventListener("input", () => {
    updateBody();
});

