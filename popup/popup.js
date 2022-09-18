(function listeners() {

	var buttonWizz = document.getElementById("wizz")
	var buttonMehdi = document.getElementById("mehdify")

	buttonWizz.addEventListener("click", () => {
		console.log("wizz")
		browser.tabs.query({active: true, currentWindow: true})
		.then((tabs) => {
			browser.tabs.sendMessage(tabs[0].id, {
				command: "wizz",
			})
		})
	});

	buttonMehdi.addEventListener("click", () => {
		console.log("mehdify")
		browser.tabs.query({active: true, currentWindow: true})
		.then((tabs) => {
			browser.tabs.sendMessage(tabs[0].id, {
				command: "mehdify",
			})
		})
	});


})()
