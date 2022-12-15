chrome.runtime.onMessage.addListener(function (request) {
	currentURL = window.location.href;
	//currentURL = currentURL.replace("www", "m");
	ladderURL = "https://12ft.io/" + currentURL;
	window.open(ladderURL, '_blank');
})
