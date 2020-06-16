const change = document.getElementById('change');
const colortxt = document.getElementById('color');
const body = document.body;

change.addEventListener('click',changeColor);

function changeColor() {
	const col1 = getRandomRGB(); 
	const col2 = getRandomRGB();
	const col3 = getRandomRGB();

	const colorString = `rgb(${col1}, ${col2}, ${col3})`;
	// console.log(colorString);
	body.style.background=colorString;
	colortxt.innerText=colorString;
} 

function getRandomRGB() {
	return Math.floor(Math.random() * 256);
}
