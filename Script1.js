// JavaScript source code
function UpdateTime() {
    now = new Date();
    localTime = now.toString();
    GMTtime = now.toGMTString();
    hours = now.getHours();
    mins = now.getMinutes();
    secs = now.getSeconds();


    if (mins < '10') {
        mins = '0' + mins;
    }

    if (secs < '10') {
        secs = '0' + secs;
    }

    if (hours < '10') {
        hours = '0' + hours;
    }

    var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    str1 = " <p> Today is <strong>" + days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() +
        "<br></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Local Time: <strong>" + hours + ":" + mins + ":" + secs + "</strong></p>";
    document.getElementById("clock").innerHTML = str1;
}

setInterval(UpdateTime, 1000);