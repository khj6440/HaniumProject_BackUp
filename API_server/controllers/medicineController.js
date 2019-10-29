import routes from "../routes";

import Medicine from "../models/Medicine";
//import { database } from "../db";

import request from "request";
import axios from "axios";


export const video = (req,res) => res.render("home",{pagetitle:"upload"});
/*
const api = axios.create({
	headers: 
}
*/
export const getMedicineName = async (req,res) => {
//	let db;
	const {
		query:{
			name : searchingBy
		}
	} = req;
	var medicines;
	if(!searchingBy){
		res.json('error');
		return;
	}

	const quer = new RegExp(searchingBy);
	try{
		medicines = await Medicine.find({
			품목명: quer
		})
		console.log(medicines);
	}catch(error){
		console.log(error);
	}
	res.json(medicines);

/*
	var actoken;
	const clientID = 'e7e1ddb8500e47219067a1ecf0458164';
	const clientSecret = '7fe631d4f37d4387a816ed361f5ede83';
	
	var options = {
		method : 'POST',
		url: 'https://oauth.fatsecret.com/connect/token',
   		auth : {
     	 		user : clientID,
      			password : clientSecret
   		},
   	headers: { 'content-type': 'application/json'},
   	form: {
      		'grant_type': 'client_credentials',
      		'scope' : 'basic'
   	},
   	json: true
	}
	request(options, function(error, response, body) {
		if(error) throw new Error(error);
		actoken = body.access_token;
		console.log(actoken);
	})
*/		
				



}
	
