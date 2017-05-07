(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
	var apiKe = "e9b32cd985cc0132db4aea4282aac2f2";
	makeRequest();
    var httpRequest;
	function makeRequest() {
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod;
		httpRequest.open('GET', url + '&APPID=' + apiKe);
		httpRequest.send();
	}
	function responseMethod() {
		if (httpRequest.readyState === 4) {
			console.log(httpRequest.responseText);
		}
	}
})();