(function buildPopup() {

	var button = document.createElement('button');
	
	button.innerHTML = 'WIZZZ';
	button.style.backgroundColor = "pink"
	button.style.borderRadius = "5px"
	button.style.paddind = "7px"
	button.style.width = "100%"
	button.style.height = "100%"

	button.onclick = function(){
		browser.tabs.query({active: true, currentWindow: true})
		.then((tabs) => {
			browser.tabs.sendMessage(tabs[0].id, {
				command: "wizz",
			})
		})
	};
	document.body.appendChild(button);


})()
