function timer()
{
	var dzis = new Date();
	
	var godzina = dzis.getHours();
	var minuty = dzis.getMinutes();
	if( minuty < 10 ) minuty = "0" + minuty;
	var sekundy = dzis.getSeconds();
	if( sekundy < 10 ) sekundy = "0" + sekundy;
	
	document.getElementById("zegar").innerHTML = godzina + ":" + minuty + ":" + sekundy;
	
	setTimeout("timer()", 1000);
}