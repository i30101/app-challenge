let time = document.getElementById("time");
let play = document.getElementById("play");
let check = null;
let cnt = 1500;
let second, minute;

function updateTime() {
    second = cnt % 60;
    minute = Math.floor(cnt / 60) % 60;
    minute = (minute > 59) ? minute = 59 : minute = minute;
    second = (second < 10) ? '0'+second : second;
    minute = (minute < 10) ? '0'+minute : minute;
    time.innerHTML = `${minute}:${second}`;
}

function printDuration() {

    if (check == null) {
        play.innerHTML = `<span class="material-symbols-outlined toggle-icon">pause</span>`;

        check = setInterval(function () {
            cnt -= 1;
            // second = cnt % 60;
            // minute = Math.floor(cnt / 60) % 60;
            // minute = (minute > 59) ? minute = 59 : minute = minute;
            // second = (second < 10) ? '0'+second : second;
            // minute = (minute < 10) ? '0'+minute : minute;
            // time.innerHTML = `${minute}:${second}`;
            updateTime();
        }, 1000);
    }else {
        stop();
        play.innerHTML = `<span class="material-symbols-outlined toggle-icon">play_arrow</span>`;
    }
}

function stop() {
    clearInterval(check);
    check = null;
    // time.innerHTML = '0';
}

function reset() {
    clearInterval(check);
    cnt = 1500;
    updateTime();
}