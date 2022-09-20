var wizz;

createModale()
listeners()

webSocket = new WebSocket("ws://obscure-depths-82229.herokuapp.com");

function createModale() {
	wizz = document.createElement('div');
	wizz.style.cssText = 'visibility: hidden; text-align: center; padding: 5px; border: 2px solid green; border-radius: 5px; background-color: pink; z-index: 9999;width: 200px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);';
	document.body.appendChild(wizz);
}

function wizzz(choice) {
	wizz.style.visibility = "visible"
	if (choice === "fart") {
		var a = new Audio("https://www.soundjay.com/human/fart-01.wav");
		wizz.innerHTML = "<h1>Prout</h1>"
	}
	if (choice === "meow") {
		var a = new Audio("https://lasonotheque.org/UPLOAD/mp3/1890.mp3?v=d");
		wizz.innerHTML = "<h1>Meoow</h1>"
	}
	if (choice === "bark") {
		var a = new Audio("https://lasonotheque.org/UPLOAD/mp3/0682.mp3?v=d");
		wizz.innerHTML = "<h1>Ouaf ouaf</h1>"
	}
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

function gandalf() {
	var images = document.getElementsByTagName('img');
	console.log(browser.runtime.getURL("assets/gandalf/gandalf.gif"))

	for(var i = 0; i < images.length; i++)
	{
		var img = images[i];
		img.src = ""
		img.src = browser.runtime.getURL("assets/gandalf/gandalf.gif");
		
	}

}

function zombo() {

	let a = new Audio("https://zombo.com/zombo_words.mp3");

	document.body.innerHTML = "";
	document.body.classList.add("bodyflex")
	let banner = document.createElement("img")
	let wheel = document.createElement("img")

	banner.style.width = "85vw";
	banner.src = browser.runtime.getURL("assets/zombocom.png");

	wheel.src = browser.runtime.getURL("assets/pngwheel.png");
	wheel.classList.add("rotating")

	document.body.appendChild(banner)
	document.body.appendChild(wheel)
	a.play()
}

function cagify() {
	var images = document.getElementsByTagName('img');
	for(var i = 0; i < images.length; i++)
	{
		let index = Math.random() * (14 - 1) + 1
		var img = images[i];
		img.src = ""
		img.src = browser.runtime.getURL("assets/cage/" + Math.floor(index) + ".jpg");
		
	}	
}

function rotate() {

	var images = document.getElementsByTagName('img');
	for(var i = 0; i < images.length; i++)
	{
		let index = Math.random() * (14 - 1) + 1
		var img = images[i];
		if (!img.classList.contains("rotating")) {
			img.classList.add("rotating")
		} else {
			img.classList.remove("rotating")
		}
	}	
}


webSocket.onmessage = (event) => {
	let command = JSON.parse(event.data)
	if (document.visibilityState === "visible") {
		if (command == "gandalf") {
			console.log("okgandalf")
			gandalf()
		}
		if (command == "cagify") {
			cagify()
		}
		if (command === "zombo") {
			zombo()
		}
		if (command === "rotate") {
			rotate()
		}
		if (command.includes("sound##")) {
			console.log("okwizz")
			wizzz(command.split("##")[1])
		}
	
	}


}
