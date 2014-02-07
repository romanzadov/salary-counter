$(function(){
	makeCounter("Median US household", 45000);
	makeCounter("Teacher", 55000);
	makeCounter("Nurse Practicioner", 95000);
	makeCounter("Lawyer", 130000);
	makeCounter("CEO", 950000);
	makeCounter("Hedge Fund Manager", 700000000); 
});

function makeCounter(profession, salary) {
	var professions = $("#professions");
	professions.append($("<div>").addClass("profession").text(profession));
	
	var counters = $("#counters");
	var counter = $("<div>").addClass("counter").addClass(profession);
	for (var i = 0; i<11; i++) {
		var digit = $("<div>").addClass("number");
		digit.data("digit", i);
		counter.append(digit);
		if (i == 8) {
			digit.addClass("last")
			counter.append($("<div>").addClass("decimal").text("."));
		}
		if (i == 10) {
			digit.addClass("last")
		}
	}
	var counterAndSymbol = $("<div>").addClass("counterAndSymbol").append($("<div>").addClass("dollar").text("$")).append(counter);
	counters.append(counterAndSymbol);
	window.setInterval(function(){
		updateSalaryInCounter(counter, salary);
	}, 100);
}

function getDigitValue(currentSalary, rollerNumber) {
	var salaryString = String(currentSalary).split("").reverse().join("");
	
	if (11-salaryString.length <= rollerNumber) {
		return salaryString.charAt(10-rollerNumber);
	}
	return "-";
}

function updateSalaryInCounter(counter, totalSalary) {
	var currentSalary = getCurrentSalary(totalSalary);
	var numbers = counter.find(".number");
	for (var i = 0; i<numbers.length; i++) {
		var number = $(numbers[i]);
		number.text(getDigitValue(currentSalary, number.data("digit")));
		number.toggleClass("dash", number.text() == "-");
	}
}

function getCurrentSalary(totalSalary) {
	var currentTime = new Date().getTime();
	return Math.ceil(totalSalary * ((currentTime - 1388534400000)/31557600000*100))
}

