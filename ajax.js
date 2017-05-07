AJAX();
setInterval(AJAX, 500000);

function AJAX() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=08701, US";
	var apiKe = "e9b32cd985cc0132db4aea4282aac2f2";
	makeRequest();
    var httpRequest,
	weatherBox = document.getElementById('weather');
	function makeRequest() {
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod;
		httpRequest.open('GET', url + '&APPID=' + apiKe);
		httpRequest.send();
	}
	function responseMethod() {
		if (httpRequest.readyState === 4) {
			
		if (httpRequest.status === 200) {
			updateWeather(httpRequest.responseText);
		} else {
			hideElement();
		}
			console.log(httpRequest.responseText);
	}
	}
	function updateWeather(responseText) {
	var response = JSON.parse(responseText);
	var	conditions = response.weather[0].description,
		temperatureC = response.main.temp - 273.15,
		tempF = Math.floor(temperatureC * 1.8 + 32),
		wind = response.wind.speed * 0.621371;
		windSpeed = wind.toFixed(2);
		weatherBox.innerHTML = '<p> Temperature ' + tempF + '&#176; F</p><br><p>' + conditions + '</p><br><p>Wind Speed: ' + windSpeed + ' MPH</p>';
	}
	function hideElement() {
		weatherBox.innerHTML = '';
	}
	
}