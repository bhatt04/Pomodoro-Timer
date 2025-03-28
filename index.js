// const startE1 = document.getElementById("start");
// const stopE1 = document.getElementById("stop");
// const resetE1 = document.getElementById("reset");
// const timerE1 = document.getElementById("timer");

// let interval;
// let timeleft = 1500;

// function updateTimer(){
//     let minutes = Math.floor(timeleft / 60);
//     let seconds = timeleft % 60;

//     let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;

//     timerE1.innerText = formattedTime;
// }
// function startTimer(){  //START
//     // console.log(("started"));
//     interval = setInterval(()=>{
//     timeleft--;
//     // console.log("hello");
//     updateTimer();
//     if(timeleft === 0){
//         clearInterval(interval);
//         alert("Time's up!");
//         timeleft=1500;
//       }
//     }, 1000)
// }


// function stopTimer(){      //STOP
//     // console.log(("stop"));
//     clearInterval(interval);    
// }


// function resetTimer(){  //RESET
//     // console.log(("reset"));
//     clearInterval(interval);
//     timeleft = 1500;
//     updateTimer();
    
// }

// startE1.addEventListener("click" , startTimer)
// stopE1.addEventListener("click" , stopTimer)
// resetE1.addEventListener("click" , resetTimer)






const startE1 = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const resetE1 = document.getElementById("reset");
const timerE1 = document.getElementById("timer");
const titleE1 = document.getElementById("title");

let interval;
let timeleft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerE1.innerText = formattedTime;
}

function startTimer() {
    // Hide the title
    titleE1.style.opacity = "0";
    
    // Increase timer font size
    timerE1.classList.add("fullscreen");

    // Show Stop and Reset buttons
    stopE1.classList.remove("hidden");
    resetE1.classList.remove("hidden");

    // Start countdown
    interval = setInterval(() => {
        timeleft--;
        updateTimer();
        if (timeleft === 0) {
            clearInterval(interval);
            alert("Time's up!");
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



const inputE1= document.querySelector(".input");
const bodyE1 = document.querySelector("body");

updateBody();

function updateBody(){
    if(inputE1.checked){
        bodyE1.style.background="rgb(5, 19, 75)";
    }else{
        bodyE1.style.background="rgb(111, 97, 234) ";
    }
}

inputE1.addEventListener("input", () => {
    updateBody();
});

