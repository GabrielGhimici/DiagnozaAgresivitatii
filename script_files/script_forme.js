window.onload =  myMain;

function myMain() {
document.getElementById("meniu_princ").onclick = function (){
		showMyMenu();
	}
}

function showMyMenu() {
	var x=document.getElementById("meniu_l");
	var y=document.getElementById("meniu_princ");
	x.style.display = "block";
	y.style.marginBottom = "5px";
}