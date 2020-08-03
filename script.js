function clock(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1; 
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        hours = "0" + hours
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    if (day < 10) {
        day = "0" + day
    }

    if (month < 10) {
        month = "0" + month
    }

    if (year < 10) {
        year = "0" + year
    }

    document.getElementById('hora').innerHTML = hours + ":" + minutes + ":" + seconds
    document.getElementById('data').innerHTML = day + "/" + month + "/" + year
}
window.setInterval('clock()',1000);
clock();