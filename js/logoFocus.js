var slideID;
var slideOther1;
var slideOther2;

function changePortSlide(n) {
	if (n === 0) {
		slideID = document.getElementById("portfLogo");
		slideOther1 = document.getElementById("portfGraphic");
		slideOther2 = document.getElementById("portfWeb");
	} 
	else if (n === 1) {
		slideID = document.getElementById("portfGraphic");
		slideOther1 = document.getElementById("portfLogo");
		slideOther2 = document.getElementById("portfWeb");
	}
	else if (n === 2) {
		slideID = document.getElementById("portfWeb");
		slideOther1 = document.getElementById("portfLogo");
		slideOther2 = document.getElementById("portfGraphic");
	}
	
	slideID.style.position = "relative";
	slideID.style.left = "0";
	slideID.style.display = "block";
	
	slideOther1.style.display = "none";
	slideOther2.style.display = "none";
	
	var i;
	var x = document.getElementsByClassName("portfGraphSlide");
	for (i = 0; i < x.length; i++) {
		$("#portfNav"+i).removeClass('active');
	}

	$("#portfNav"+n).addClass('active');
}