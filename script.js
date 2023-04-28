var invalidDay = document.getElementById("invalid-d");
var invalidMonth = document.getElementById("invalid-m");
var invalidYear = document.getElementById("invalid-y");

var mainRed = "hsl(0, 100%, 67%)";
var mainPurple = "hsl(259, 100%, 65%)"

var inputDay = document.getElementById("input-d");
var inputMonth = document.getElementById("input-m");
var inputYear = document.getElementById("input-y");
var titleDay = document.getElementById("title-d");
var titleMonth = document.getElementById("title-m");
var titleYear = document.getElementById("title-y");

var outputDay = document.getElementById("output-d");
var outputMonth = document.getElementById("output-m");
var outputYear = document.getElementById("output-y");

var submit = document.getElementById("submit");
var dayInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

submit.addEventListener("click", () => {
    var day = inputDay.value;
    var month = inputMonth.value;
    var year = inputYear.value;

    var now = new Date();
    var birth = new Date();

    var check = true;

    if (day < 1 || day > dayInMonth[month] || day == null) {
        invalidDay.style.display = "block";
        inputDay.style.borderColor = mainRed;
        titleDay.style.color = mainRed;
        check = false;
    } else {
        invalidDay.style.display = "none";
        inputDay.style.borderColor = "lightgray";
        titleDay.style.color = "gray";
    }

    if (month < 1 || month > 12 || month == null) {
        invalidMonth.style.display = "block";
        inputMonth.style.borderColor = mainRed;
        titleMonth.style.color = mainRed;
        check = false;
    } else {
        invalidMonth.style.display = "none";
        inputMonth.style.borderColor = "lightgray";
        titleMonth.style.color = "gray";
    }

    if (year < 1 || year > now.getFullYear() || year == null) {
        invalidYear.style.display = "block";
        inputYear.style.borderColor = mainRed;
        titleYear.style.color = mainRed;
        check = false;
    } else if (year == now.getFullYear()) {
        if (month > now.getMonth()) {
            invalidMonth.style.display = "block";
            inputMonth.style.borderColor = mainRed;
            titleMonth.style.color = mainRed;
            check = false;
        } else {
            invalidMonth.style.display = "none";
            inputMonth.style.borderColor = "lightgray";
            titleMonth.style.color = "gray";
        }
    } else {
        invalidYear.style.display = "none";
        inputYear.style.borderColor = "lightgray";
        titleYear.style.color = "gray";
    }

    if (check == false) {
        return;
    }

    var ansDay, ansMonth, ansYear;

    birth.setDate(day);
    birth.setMonth(month);
    birth.setFullYear(year);

    var age = (now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24);

    ansYear = now.getFullYear() - birth.getFullYear();
    if (now.getMonth() < birth.getMonth()) {
        ansYear -= 1;
        ansMonth = (now.getMonth() + 12) - birth.getMonth() + 1;
    } else {
        ansMonth = now.getMonth() - birth.getMonth();
    }

    if (now.getDate() < birth.getDate()) {
        ansMonth -= 1;
        ansDay = (now.getDate + 30) - birth.getDate() + 1;
    } else {
        ansDay = now.getDate() - birth.getDate();
    }

    outputDay.innerHTML = ansDay;
    outputMonth.innerHTML = ansMonth + 1;
    outputYear.innerHTML = ansYear;
})

