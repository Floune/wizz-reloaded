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

function wizzz() {
	console.log("wizzing")
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
		console.log("receiving ping from popup", request.command)
		webSocket.send(JSON.stringify(request.command));
		
	});


}

function mehdify() {
	var images = document.getElementsByTagName('img');
	console.log(browser.runtime.getURL("assets/mehdi.jpeg"))

	for(var i = 0; i < images.length; i++)
	{
		var img = images[i];
		img.src = ""
		img.src = browser.runtime.getURL("assets/mehdi.jpeg");
		img.classList.add('rotating')
		
	}

}

webSocket.onmessage = (event) => {
	let command = JSON.parse(event.data)
	if (command == "wizz") {
		console.log("okwizz")
		wizzz()
	}
	if (command == "mehdify") {
		console.log("okmehdi")
		mehdify()
	}
}
