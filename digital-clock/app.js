let hours_span = document.getElementById("hours");
let min_span = document.getElementById("min");
let sec_span = document.getElementById("sec");

function clock() {
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let min = fullDate.getMinutes();
    let sec = fullDate.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    hours_span.innerHTML = hours;
    min_span.innerHTML = min;
    sec_span.innerHTML = sec;
}

setInterval(clock, 100);