setInterval(showTime, 1000);
setInterval(dt, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	if (hour >= 12) {
		if (hour > 12) 
            hour = 12;
		am_pm = "PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}



	if(hour<10){
        hour="0"+ hour;
    }
    else{
        hour= hour;
    }
	if(min<10){
        min="0"+ min;
    }
    else{
        min= min;
    }
    if(sec<10){
        sec="0"+ sec;
    }
    else{
        sec=sec;
    }



	let currentTime =hour +":" +min +":" +sec +" "+am_pm;

	document.getElementById("clock-time").innerHTML = currentTime;
}

showTime();



function dt(){
    const d = new Date();
document.getElementById("clock-date").innerHTML = d;
}
dt();