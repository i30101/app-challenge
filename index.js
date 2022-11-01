let time = document.getElementById("time");
let play = document.getElementById("play");
let message = document.getElementById("time-message");
let total = document.getElementById("time-total");
let check = null;
let studyTime = 1500;
let breakTime = 300;
let count = studyTime;
let second, minute;
let round = "study";

// sets button to play
function buttonIsPlay() {
    play.innerHTML = `<span class="material-symbols-outlined toggle-icon">pause</span>`;
}

// sets button to pause
function buttonIsPause() {
    play.innerHTML = `<span class="material-symbols-outlined toggle-icon">play_arrow</span>`;
}

// updates time
function updateTime() {
    second = count % 60;
    minute = Math.floor(count / 60) % 60;
    minute = (minute > 59) ? minute = 59 : minute;
    second = (second < 10) ? '0'+second : second;
    minute = (minute < 10) ? '0'+minute : minute;
    time.innerHTML = `${minute}:${second}`;
}

// prints the duration
function printDuration() {
    if (check === null) {
        buttonIsPlay();
        check = setInterval(function () {
            count -= 1;
            updateTime();
            changeRound();
        }, 1000);
    }else {
        stop();
        buttonIsPause();
    }
}

function stop() {
    clearInterval(check);
    check = null;
}

function reset(wasClicked) {
    if(round == "study") {
        console.log("you are now on break");
        round = "break";
        total.innerHTML = "/5:00";
        message.innerHTML = "Get up and walk around!";
        count = breakTime;
    }else {
        console.log("you are now on study");
        round = "study";
        total.innerHTML = "/25:00";
        message.innerHTML = "Time to study!";
        count = studyTime;
    }
    clearInterval(check);
    buttonIsPause();
    stop();
    if(wasClicked) {
        updateTime();
    }else {
        printDuration();
    }
}

function changeRound() {
    if(count === 0) {
        reset();
        console.log(`you are now ${round}ing`);
    }else {
        console.log(`${round} time, ${count} seconds left`);
    }
}