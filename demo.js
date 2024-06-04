

let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');





setInterval(function () {
    let currentTIme = new Date();
    hours.innerHTML = (currentTIme.getHours() < 10 ? '0' : '') + currentTIme.getHours();
    minutes.innerHTML = (currentTIme.getMinutes() < 10 ? '0' : '') +  currentTIme.getMinutes();
    seconds.innerHTML = (currentTIme.getSeconds() < 10 ? '0' : '') + currentTIme.getSeconds();
}, 1000);


// condition ? abc : xyz