var min = '0' + 5;
var sec = 60;
var milisec = 60;
var timer;
var timerMili;
var startbtn = document.getElementById("startbtn");




function startTimer() {
    sec--;
    if (sec < 1) {
        sec = 2;
        min--;
        min = '0' + min;
    }
    if (sec <= 9) {
        sec = "0" + sec--;
    }
    if (min == "0" + -1) {
        sec = '00';
        min = '00';
    }
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

}
function timermsec() {
    milisec--;
    if (milisec < 1) {
        milisec = 60;
        milisec--;
    }
    if (milisec < 10) {
        milisec = "0" + milisec;
    }
    if (sec === '00') {
        milisec = "00";
    }
    document.getElementById("msec").innerHTML = milisec;
}

startbtn.onclick = function () {
    timer = setInterval(startTimer, 1000);
    timerMili = setInterval(timermsec, 16.6666667);
};

function stoptime() {
    clearInterval(timer);
    clearInterval(timerMili);
}
document.getElementById("stopbtn").addEventListener("click", stoptime);

function resetTimer() {
    document.getElementById("min").innerHTML = min  = '0' + 5;
    document.getElementById("sec").innerHTML = sec  = 60;
    document.getElementById("msec").innerHTML = milisec = 60;

}
document.getElementById("resetbtn").addEventListener("click", resetTimer);

