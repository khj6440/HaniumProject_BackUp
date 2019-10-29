var mqtt = require('mqtt');

const heightContainer = document.querySelector(".mqtt-height"),
	heightText = heightContainer.querySelector("h2");
const weightContainer = document.querySelector(".mqtt-weight"),
	weightText = weightContainer.querySelector("h2");
const HeartRateContainer = document.querySelector(".mqtt-HeartRate"),
	HeartRateText = HeartRateContainer.querySelector("h2");
const TemperatureContainer = document.querySelector(".mqtt-Temperature"),
	TemperatureText = TemperatureContainer.querySelector("h2");
const UserContainer = document.querySelector(".user"),
	UserIcon = UserContainer.querySelector("i"),
	UserText = UserContainer.querySelector("span");
const BotContainer = document.querySelector(".bot"),
	BotIcon = BotContainer.querySelector("i"),
	BotText = BotContainer.querySelector("span");


const client = mqtt.connect("ws://"+ "192.168.1.21" + ":" + 9001);

function connectMqtt() {
	client.on("connect",function(){
		console.log("connected to the Mqtt server");
	});
	client.subscribe("sensor/#");
	//client.subscribe("user/#");
	client.on("message", function(topic, message){
		if(topic === "sensor/height"){	
			heightText.innerText = `height     : ${message}`;
			console.log(message);
		}
		if(topic === "sensor/weight"){
			weightText.innerText = `wieght     : ${message}`;
			console.log(message);
		}
		if(topic === "sensor/Heart"){
			HeartRateText.innerText = `HeartRate  : ${message}`;
			console.log(message);
		}	
		if(topic === "sensor/data"){
			UserIcon.className = "fa fa-user";
			UserText.innerText = `${message}`;
			console.log(message);
			setTimeout(function(){
				UserIcon.className = "";
				UserText.innerText = "";
			},10000);
		}
		if(topic === "sensor/Temp"){
			TemperatureText.innerText = `Temperature : ${message}`;
			
			console.log(message);
		}
		if(topic === "sensor/chatbot"){
			BotIcon.className = "fa fa-comment";
			BotText.innerText = `${message}`;
			console.log(message);
			setTimeout(function(){
				BotIcon.className = "";
				BotText.innerText = "";
			},10000);
		}
	});
}
connectMqtt();

