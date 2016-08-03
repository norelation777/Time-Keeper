
var $inOutCont= $("#inOutKeeper"),

inTime= '', outTime='',

totalWorkTime=0;

function workTotal(){

	var timeUnit="",

			timeDivisor=1,

			finalTime=0;

	if(totalWorkTime>=3600000){

		timeUnit="Hours";

		timeDivisor=3600000;

	}

	else if(totalWorkTime>=60000){

		timeUnit="minutes";

		timeDivisor=60000;

	}else{

		timeUnit="seconds";

		timeDivisor=1000;

	}

	finalTime=Math.round(totalWorkTime/timeDivisor);

	$("#workTotal").remove();

	if(finalTime===0){

		$("#timeWorked").append("<li class='list-group-item list-group-item-warning' id='workTotal'><h4>You have not worked yet</h4></li>");

	}

	else{

		$("#timeWorked").append("<li class='list-group-item list-group-item-warning' id='workTotal'><h4>You have Worked for "+finalTime+" "+timeUnit+" total</h4></li>");

	}

}

function clockIn(){

	inTime= moment(),

	inTimeDisplay=inTime.format("dddd, MMMM Do YYYY, h:mm:ss a"),

	inText= "<li class='list-group-item list-group-item-info'>In on "+ inTimeDisplay +"</li>";

	$cont= $("#clockInButton");

	$cont.text("Clocked in @ "+inTimeDisplay);

	$cont.attr("class", "btn btn-success col-sm-6 disabled");

	if( $("#clockOutButton").text()!== "Clock Out" ){

		$("#clockOutButton").text("Clock Out");

		$("#clockOutButton").attr("class","btn btn-primary col-sm-6")

	}
	$("#inOutKeeper").append(inText);

	$.get("timeWriter.php", {inText});
}

function clockOut(){

	outTime=moment();

	var $cont= $("#clockOutButton"),

	outTimeDisplay= outTime.format("dddd, MMMM Do YYYY, h:mm:ss a"),

	timeWorkedUnit="seconds",
	inText="<li class='list-group-item list-group-item-danger'>Out on "+ outTimeDisplay +"</li>";

	timeWorked= outTime.diff(inTime);

	totalWorkTime += timeWorked;

	if(timeWorked>=3600000){

		timeWorkedUnit="Hours"

	}

	else if(timeWorked>=60000){

		timeWorkedUnit="minutes";

	}

	timeWorked= outTime.diff(inTime,timeWorkedUnit);
	var workText="<li class='list-group-item list-group-item-success'>You worked for "+timeWorked+" "+timeWorkedUnit+" "+" on "+outTimeDisplay+"</li>";

	$cont.text("Clocked out @ "+ outTimeDisplay);

	$cont.attr("class", "btn btn-success col-sm-6 disabled");

	if( $("#clockInButton").text()!== "Clock In" ){

		$("#clockInButton").text("Clock In");

		$("#clockInButton").attr("class","btn btn-primary col-sm-6");

	}

	$("#inOutKeeper").append(inText);

	$("#timeWorked").append(workText);

	workTotal();
	$.get("timeWriter.php", {inText});
	$.get("workWriter.php", {workText});

}



$(function(){

	workTotal();
	$("#inOutKeeper").load("test.txt");
	$("#timeWorked").load("worked.txt")
});