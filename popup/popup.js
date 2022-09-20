(function listeners() {

	document.querySelectorAll('.btn').forEach(b => {
		b.addEventListener("click", e => {
			console.log(e.target.getAttribute("data-action"))
			browser.tabs.query({active: true, currentWindow: true})
			.then((tabs) => {
				browser.tabs.sendMessage(tabs[0].id, {
					command: e.target.getAttribute("data-action"),
				})
			})
		})
	})

})()
