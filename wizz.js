var wizz;

createModale()
listeners()

webSocket = new WebSocket("ws://obscure-depths-82229.herokuapp.com");

function createModale() {
	wizz = document.createElement('div');
	wizz.innerHTML += "<h1>Wizz :)</h1>"
	wizz.style.cssText = 'visibility: hidden; text-align: center; padding: 5px; border: 2px solid green; border-radius: 5px; background-color: pink; z-index: 9999;width: 200px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);';
	document.body.appendChild(wizz);
}

function openModale() {
	wizz.style.visibility = "visible"
	var a = new Audio("https://www.soundjay.com/human/fart-01.wav");
	a.play();
}


function closeModale() {
	wizz.style.visibility = "hidden"
}

function listeners() {

	document.body.addEventListener("click", () => {
		closeModale()
	})		

	browser.runtime.onMessage.addListener((request) => {
		webSocket.send("wizz");
	});


}

webSocket.onmessage = (event) => {
	console.log(event.data);
	openModale()
}
