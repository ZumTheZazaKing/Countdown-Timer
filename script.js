const timer = document.querySelector('#timer');

const countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

var x = setInterval(function(){

    let now = new Date().getTime();

    let distance = countDownDate - now;


    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerText = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';


    if(distance < 0){

        clearInterval(x);

        timer.innerHTML = 'EXPIRED';

    }

}, 1000);