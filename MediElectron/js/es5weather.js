const axios = require('axios');
const humidity = document.querySelector(".js-weather");

var lat,lon;
var region;

KAKAO_KEY = "d8d67d3d69ab7f44bc09d1ecf85da1f8";

function getWeather(lat,lon){
	fetch(
		`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=e95d958a11128b11ad3eb0fa101dae38'`
	)
	.then(function(reponse){
		return response.json();
	})
	.then(function(json){
		wether.innerText = `Humidity : ${json.main.humidity}%`
	})
}

function init(){
	fetch(
		'http://ip-api.com/json'
	)
    	.then(function(response){
		return response.json();
	})
	.then(function(json){
		var lat = json.lat;
		var lon = json.lon;
	})
	.then(function(lat,lon){
		getWeather(lat,lon);
	})
}


init();
