import mongoose from "mongoose";

const MqttSchema = new mongoose.Schema({
	user : String,
	height : String,
	weight : String,
	heartrate : String,
	temperate : String
},{strict : false});

const model = mongoose.model("mqtts",MqttSchema);

export default model;
