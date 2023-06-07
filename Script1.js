// JavaScript source code
function UpdateTime() {
    now = new Date();
    localTime = now.toString();
    GMTtime = now.toGMTString();
    hours = now.getHours();
    mins = now.getMinutes();
    secs = now.getSeconds();

    var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    str1 = " <p style='text-align: left;font-size: 17pt;font-family: 'Times New Roman'; margin-top:1px;margin-bottom:1px;' > Today is <strong>" + days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() +
        "</strong> Local Time: <strong>" + hours + ":" + mins + ":" + secs + "</strong></p>";
    document.getElementById("clock").innerHTML = str1;
}

setInterval(UpdateTime, 1000);