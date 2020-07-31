function clock(){
    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hours < 10) {
        hours = "0"+hours
    }

    if (minutes < 10) {
        minutes = "0"+minutes
    }

    if (seconds < 10) {
        seconds = "0"+seconds
    }

    if (day < 10) {
        day = "0"+day
    }

    if (month < 10) {
        month = "0"+month
    }

    if (year < 10) {
        year = "0"+year
    }

    document.getElementById('relogio').innerHTML = hours + ":" + minutes + ":" + seconds
    document.getElementById('data').innerHTML = day + "/" + month + "/" + year
}
window.setInterval('clock()',500);
clock();