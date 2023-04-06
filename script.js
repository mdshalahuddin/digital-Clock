function displayTime(){
    var currentTime = new Date();
    var hrs = currentTime.getHours();
    var min = currentTime.getMinutes();
    var sec = currentTime.getSeconds();
    var timeSet = document.getElementById('timeSet');

    if(hrs >= 12){
        timeSet.innerHTML = 'PM';
    }else{
        timeSet.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);