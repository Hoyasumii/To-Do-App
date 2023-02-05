var currentDate = new Date();
var listOfDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
var listOfMonths = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

var currentDayName = listOfDays[currentDate.getDay()];
var currentDay = currentDate.getDate();

currentDay = (String(currentDay).length == 1) ? "0" + currentDay : currentDay;

var currentMonth = listOfMonths[currentDate.getMonth()];

document.getElementById("currentDate").textContent = currentDayName + ", " + currentDay + " de " + currentMonth;