// alert("hello");

function myClock() {
	var time = new Date();
	var hour = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();
	var ampm = "AM"

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


	alert(hour+":"+min+":"+sec);

}