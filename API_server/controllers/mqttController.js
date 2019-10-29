import routes from "../routes";

import Mqtt from "../models/Mqtt";
//import { database } from "../db";


export const getMqttHeightSave = async (req,res) => {
	const {
		query:{
			height : searchingBy
		}
	} = req;
//	query 만들어 주는 부분
	if(!searchingBy){
		res.json('error');
		return;
	}
 	var query = { user : '1'};
	
	var hmqtt;
	
	try{
		hmqtt = await Mqtt.update(query,
			{
				$set : {
					height : searchingBy
				}
			}
		)
		console.log(hmqtt);
	}catch(error){
		console.log(error);
	}
	res.send(hmqtt);
};

export const getMqttWeightSave = async (req,res) => {
	const {
		query:{
			weight : searchingBy
		}
	} = req;
//	query 만들어 주는 부분
	if(!searchingBy){
		res.json('error');
		return;
	}
 	var query = { user : '1'};
	
	var wmqtt;
	
	try{
		wmqtt = await Mqtt.update(query,
			{
				$set : {
					weight : searchingBy
				}
			}
		)
		console.log(wmqtt);
	}catch(error){
		console.log(error);
	}
	res.send(wmqtt);
};

export const getMqttHeartrateSave = async (req,res) => {
	const {
		query:{
			heartrate : searchingBy
		}
	} = req;
//	query 만들어 주는 부분
	if(!searchingBy){
		res.json('error');
		return;
	}
 	var query = { user : '1'};
	
	var heartrate;
	
	try{
		heartrate = await Mqtt.update(query,
			{
				$set : {
					heartrate : searchingBy
				}
			}
		)
		console.log(heartrate);
	}catch(error){
		console.log(error);
	}
	res.send(heartrate);
};

export const getMqttTemperateSave = async (req,res) => {
	const {
		query:{
			temperate : searchingBy
		}
	} = req;
//	query 만들어 주는 부분
	if(!searchingBy){
		res.json('error');
		return;
	}
 	var query = { user : '1'};
	
	var temperate;
	
	try{
		temperate = await Mqtt.update(query,
			{
				$set : {
					temperate : searchingBy
				}
			}
		)
		console.log(temperate);
	}catch(error){
		console.log(error);
	}
	res.send(temperate);
};


export const getMqttBmiSave = async (req,res) => {
	const {
		query:{
			bmi : searchingBy
		}
	} = req;
//	query 만들어 주는 부분
	if(!searchingBy){
		res.json('error');
		return;
	}
 	var query = { user : '1'};
	
	var bmi;
	
	try{
		bmi = await Mqtt.update(query,
			{
				$set : {
					bmi : searchingBy
				}
			}
		)
		console.log(bmi);
	}catch(error){
		console.log(error);
	}
	res.send(bmi);
};

export const getMqttSend = async (req,res) => {
	const {
		query : {
			user : searchingBy
		}
	} = req;
 	var query = { user : '1'};
	
	var smqtt;
	
	try{
		smqtt = await Mqtt.find({
			user : '1'
		})
		console.log(smqtt);
	}catch(error){
		console.log(error);
	}
	res.send(smqtt);
};


