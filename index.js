const hourEL = document.getElementById("hour");
const minuteEL = document.getElementById("minutes");
const secondEL = document.getElementById("second");
const ampmEL = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m  = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm ='PM';

    if (h>12){
        h = h-12;
        ampm = "AM";
    }
    hourEL.innerText = h;
    minuteEL.innerText = m;
    secondEL.innerText = s;
    ampm, (innerText = ampm);

    setTimeout(()=>{
        updateClock()
    },1000);
}

updateClock();