// alert("hello");

function myClock() {
	var time = new Date();
	var hour = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();
	var ampm = "AM"

	var num_hour = document.getElementById("hour");
	var num_min = document.getElementById("min");
	var num_sec = document.getElementById("sec");

	if(hour>12) { 
		hour = hour - 12;	
		ampm = "PM";
	};

	if(hour < 10) {
		hour = "0" + hour;
	}

	if(min < 10) {
		min = "0" + min;
	}

	if(sec < 10) {
		sec = "0" + sec;
	}

	num_hour.innerHTML = hour;
	num_min.innerHTML = min;
	num_sec.innerHTML = sec;

	// alert(hour+":"+min+":"+sec);
	console.log(hour+":"+min+":"+sec+ampm);

}
