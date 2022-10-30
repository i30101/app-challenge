var check = null;
var cnt = 1500;


function printDuration() {
    if (check == null) {


        check = setInterval(function () {
            cnt -= 1;
            var second = cnt % 60;
            var minute = Math.floor(cnt / 60) % 60;
            minute = (minute > 59) ? minute = 59 : minute = minute;
            second = (second < 10) ? '0'+second : second;
            minute = (minute < 10) ? '0'+minute : minute;
    
            document.getElementById("time").innerHTML = `${minute}:${second}`;
        }, 1000);
    }
}

function stop() {
    clearInterval(check);
    check = null;
    // document.getElementById("time").innerHTML = '0';
}


