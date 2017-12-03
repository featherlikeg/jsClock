console.log("hello");


function myDay() {
	var myDay = new Date();	
	return(myDay);
}

function myDate() {

	var myDay = new Date();		

	var year = myDay.getFullYear();
	var month = myDay.getMonth()+1;
	var date = myDay.getDate();
	var day_num = myDay.getDay();

	var week = [ "일", "월", "화", "수", "목", "금", "토"];
	var day_text = week[day_num];

	var arr = [year,month,date,day_text];
	
	document.write("오늘은 "+arr[0]+"년 "+arr[1]+"월 "+arr[2]+"일 "+arr[3]+"요일 입니다.");

}

function myClock() {
	var myDay = new Date();

	var hour = myDay.getHours();
	var min = myDay.getMinutes();
	var sec = myDay.getSeconds();

	var clock = "지금 시각은 "+hour+" : "+min+" : "+sec+" 입니다.";
	document.getElementById("clock").innerHTML = clock;
}

	var h = 0;
	var i = 0;
	var m = 0;
function myWatch() {

	i = i+10;

	if (i>59) { m = m+10 ; i = i%60; 
		if (m>59) { h++; m = m%60 }
	}

	document.getElementById("timer").innerHTML = h + ":" + m + ":" + i;	
}

function start() {
	var myVar = setInterval("myWatch()",1000);
}