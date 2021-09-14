var btn=document.getElementById('btn')
var frame=document.querySelector('.frame')

function loadDate(){
    

    var countDate= new Date(2021,10,18,00)
    var now= new Date().getTime();
    var gap=countDate-now;
    var second=1000
    var minute=second*60
    var hour=minute*60
    var day=hour*24;
    const finalDay=Math.floor(gap/ day);
    const finalHour=Math.floor( (gap % day) / hour);
    const finalMinute=Math.floor( (gap% hour) / minute);
    const finalSecond=Math.floor( (gap % minute) / second);

    // assigning the values
    document.getElementById('day').innerText=finalDay;
    document.getElementById('hour').innerText=finalHour;
    document.getElementById('minute').innerText=finalMinute;
    document.getElementById('seconds').innerText=finalSecond;
}

setInterval(loadDate,1000);

var audio =document.getElementById('audio')



function rotate() {
    frame.classList.add('rotate')
    audio.play();
}
