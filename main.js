let digitalClock = setInterval(clock, 1000);

function clock() {
    let date = new Date();
    let localTime = date.toLocaleTimeString();
    document.getElementById("clock").innerHTML = localTime;
}