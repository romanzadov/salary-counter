$(function(){
	makeCounter("Teacher", 50000);
});

function makeCounter(profession, salary) {
	var professions = $("#professions");
	professions.append($("<div>").addClass("profession").text(profession));
	
	var counters = $("#counters");
	var counter = $("<div>").addClass("counter").addClass(profession);
	for (var i = 0; i<10; i++) {
		counter.append(getRoller(getRollerStart(salary, i)).addClass(i));
	}
	counters.append(counter);
}

function getRoller(start) {
	var ul = $("<ul>");
	for (var i = 0; i<10; i++) {
		ul.append($("<li>").addClass((start-i+10)%10).text((start-i+10)%10));
	}
	return ul;
}

function getRollerStart(totalSalary, rollerNumber) {
	var salaryString = String(getCurrentSalary(totalSalary)).split("").reverse().join("");
	
	if (10-salaryString.length <= rollerNumber) {
		return salaryString.charAt(9-rollerNumber);
	}
	return 0;
}

function getCurrentSalary(totalSalary) {
	var currentTime = new Date().getTime();
	return Math.ceil(totalSalary * ((currentTime - 1388534400000)/31557600000))
}
