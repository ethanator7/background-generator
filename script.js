var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var r, g, b;

function setGradient() {
	bodystyle.background = 
		"linear-gradient(to right, "
		+ color1.value + ", " 
		+ color2.value 
		+ ")";
		css.textConent = body.style.background + ";";
}

function randomize() {
	r = (Math.trunc(Math.random() * 256)).toString(16);
	g (Math.trunc(Math.random() * 256)).toString(16);
	b = (Math.trunc(Math.random() * 256)).toString(16);
}

function setColors() {
	randomize();
	color1.value = "#" + r + g + b;
	randomize();
	color2.value = "#" + r + g + b;
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setColors);