$(function(){
	makeCounter("Firefighter", 30000);
	makeCounter("Teacher", 50000);
	makeCounter("Nurse Practicioner", 80000);
	makeCounter("Lawyer", 200000);
	makeCounter("CEO", 10000000);
	makeCounter("Hedge Fund Manager", 3000000000); 
});

function makeCounter(profession, salary) {
	var professions = $("#professions");
	professions.append($("<div>").addClass("profession").text(profession));
	
	var counters = $("#counters");
	var counter = $("<div>").addClass("counter").addClass(profession);
	for (var i = 0; i<10; i++) {
		var digit = $("<div>").addClass("number");
		digit.data("digit", i);
		counter.append(digit);
	}
	var counterAndSymbol = $("<div>").addClass("counterAndSymbol").append($("<div>").addClass("dollar").text("$")).append(counter);
	counters.append(counterAndSymbol);
	window.setInterval(function(){
		updateSalaryInCounter(counter, salary);
	}, 100);
}

function getDigitValue(currentSalary, rollerNumber) {
	var salaryString = String(currentSalary).split("").reverse().join("");
	
	if (10-salaryString.length <= rollerNumber) {
		return salaryString.charAt(9-rollerNumber);
	}
	return 0;
}

function updateSalaryInCounter(counter, totalSalary) {
	var currentSalary = getCurrentSalary(totalSalary);
	var numbers = counter.find(".number");
	for (var i = 0; i<numbers.length; i++) {
		var number = $(numbers[i]);
		number.text(getDigitValue(currentSalary, number.data("digit")));
	}
}

function getCurrentSalary(totalSalary) {
	var currentTime = new Date().getTime();
	return Math.ceil(totalSalary * ((currentTime - 1388534400000)/31557600000))
}

