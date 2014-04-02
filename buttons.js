//rotate squares 

var smallestSqButton = document.getElementById("layer1");
var smallSqButton = document.getElementById("layer2");
var mediumSqButton = document.getElementById("layer3");
var largeSqButton = document.getElementById("layer4");

var target1 = document.getElementById("smallestSq");
var target2 = document.getElementById("smallSq");
var target3 = document.getElementById("mediumSq");
var target4 = document.getElementById("largeSq");

function Rotate1() {
	target1.setAttribute("class", "rotate1");
}

function Rotate2() {
	target2.setAttribute("class", "rotate2");
}

function Rotate3() {
	target3.setAttribute("class", "rotate3");
}


function Rotate4() {
	target4.setAttribute("class", "rotate4");
}


smallestSqButton.addEventListener('click', Rotate1, false);

smallSqButton.addEventListener('click', Rotate2, false);

mediumSqButton.addEventListener('click', Rotate3, false);

largeSqButton.addEventListener('click', Rotate4, false);