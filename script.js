var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var initialcolor1 = window.getComputedStyle(body).backgroundImage.substr(26,14);
var initialcolor2 = window.getComputedStyle(body).backgroundImage.substr(42,16);

css.textContent = window.getComputedStyle(body).backgroundImage;

 
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "+ color1.value +", "+ color2.value +")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);