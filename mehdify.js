var wizz;

export function createModale() {
	wizz = document.createElement('div');
	wizz.innerHTML += "<h1>Wizz :)</h1>"
	wizz.style.cssText = 'visibility: hidden; text-align: center; padding: 5px; border: 2px solid green; border-radius: 5px; background-color: pink; z-index: 9999;width: 200px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);';
	document.body.appendChild(wizz);
}

export function wizzz() {
	console.log("wizzing")
	wizz.style.visibility = "visible"
	var a = new Audio("https://www.soundjay.com/human/fart-01.wav");
	a.play();
}


export function closeModale() {
	wizz.style.visibility = "hidden"
}
