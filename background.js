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

function cagify() {
	let index = Math.random() * (8 - 1) + 1
	var images = document.getElementsByTagName('img');
	for(var i = 0; i < images.length; i++)
	{
		let index = Math.random() * (8 - 1) + 1
		var img = images[i];
		img.src = ""
		img.src = browser.runtime.getURL("assets/cage/" + Math.floor(index) + ".jpg");
		
	}	
}

function rain() {
const rainContainer = document.body;

// background Colors for the raindrop
const background = [
"linear-gradient(transparent, aqua)",
"linear-gradient(transparent, red)",
"linear-gradient(transparent, limegreen)",
"linear-gradient(transparent, white)",
"linear-gradient(transparent, yellow)"
];

const amount = 100; // amount of raindops
let i = 0;

// Looping and creating the raindrop then adding to the rainContainer
while (i < amount) {
  //  Creating and Element
  const drop = document.createElement("i");

  //   CSS Properties for raindrop
  const raindropProperties = {
  	width: Math.random() * 5 + "px",
  	positionX: Math.floor(Math.random() * window.innerWidth) + "px",
  	delay: Math.random() * -20 + "s",
  	duration: Math.random() * 5 + "s",
  	bg: background[Math.floor(Math.random() * background.length)],
  	opacity: Math.random() + 0.2
  };

  //   Setting Styles for raindrop
  drop.style.width = raindropProperties.width;
  drop.style.left = raindropProperties.positionX;
  drop.style.animationDelay = raindropProperties.delay;
  drop.style.animationDuration = raindropProperties.duration;
  drop.style.background = raindropProperties.bg;
  drop.style.opacity = raindropProperties.opacity;

  //   Appending the raindrop in the raindrop container
  rainContainer.appendChild(drop);
  i++;
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
	if (command == "cagify") {
		console.log("oknico")
		cagify()
	}
	if (command === "rain") {
		console.log("rain")
		rain()
	}
}
