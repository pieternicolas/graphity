var slideIndex = 1;
showDivs(slideIndex);

function changeSlide(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("portfGraphSlide");
    if (n > x.length) {
		slideIndex = 1;
	}
	
    if (n < 1) {
		slideIndex = x.length;
	}
	
    for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
		}

	x[slideIndex-1].style.display = "block";
}

var slideWebIndex = 1;
showWebRows(slideWebIndex);

function changeWebSlide(n) {
    showWebRows(slideWebIndex += n);
}

function showWebRows(n) {
    var i;
    var x = document.getElementsByClassName("portfWebRow");
    if (n > x.length) {
		slideIndex = 1;
	}
	
    if (n < 1) {
		slideIndex = x.length;
	}
	
    for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
		}

	x[slideIndex-1].style.display = "block";
}