function date()
{
	var dzis = new Date();
	
	var rok = dzis.getFullYear();
	var dzien = dzis.getDate();
	var miesiac = dzis.getMonth() +1;
	
	
	document.getElementById("data").innerHTML = "dziś jest: " + dzien + "." + miesiac + "." + rok + " r.";
	
	setTimeout("date()", 1000);
}