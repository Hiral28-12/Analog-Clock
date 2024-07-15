let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

function displayTime() {
    let date = new Date();

    let hh =date.getHours();
    let mm =date.getMinutes();
    let ss =date.getSeconds();

    let hRotation = 30*hh +mm/2;     //12hours = 360deg   1hour = 360/12 = 30     h hours = 30h+m/2
    let mRotation = 6*mm;            //60min = 360deg   1min = 360/60 = 6deg     m min = 6*m
    let sRotation = 6*ss;           //60sec = 360deg    1sec = 360/60 =6deg      s sec = 6*s

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displayTime, 1000);

