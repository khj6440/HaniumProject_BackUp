import routes from "../routes";

import Pharmacy from "../models/Pharmacy";
//import { database } from "../db";
import Position from "../models/Position";
import axios from "axios";

export const video = (req,res) => res.render("home",{pagetitle:"upload"});

export const getPharmacyLocation = async (req,res) =>{
	var position; // 사용자 latitude , longitude
	var count; //근처 병원 수
	var i;
	var hmin;
	var hcompare;
	var returnNum=0;
	
	try{
		position = await Position.find({});
		console.log(position[0]);
		console.log(position[0].longitude);
		console.log(position[0].latitude);
	}catch(error){
		console.log(error);
	}

	const data = await axios.get(`http://apis.data.go.kr/B551182/pharmacyInfoService/getParmacyBasisList?xPos=${position[0].longitude}&yPos=${position[0].latitude}&radius=5000&ServiceKey=ok5U7zvwJ2BXvndun5rYy%2BaKAKoWXLE0XXQAU5hAM7AWUimTgWQsEbsPf%2FOzPeegE3jn6iae6On07VQuTW8ZZA%3D%3D`);
	console.log(data.data.response.body);

	count = data.data.response.body.numOfRows;
	console.log(count);
	hmin = parseInt(data.data.response.body.items.item[0].distance);
	hcompare = parseInt(data.data.response.body.items.item[1].distance);
	for(i=1;i<count;i++){
		if(hmin>hcompare){
			hmin = hcompare;
			returnNum = i;
			console.log(returnNum);
			console.log(hmin);
		}
	        hcompare = parseInt(data.data.response.body.items.item[i].distance);
	}
	console.log(returnNum);
	console.log(data.data.response.body.items.item[returnNum-1]);

	res.send(data.data.response.body.items.item[returnNum-1]);
}

export const getPharmacyName = async (req,res) => {
	const {
		query:{
			name : searchingBy,
			addr : searchingBy1 
		}
	} = req;
//	query 만들어 주는 부분
	if(!searchingBy){
		res.json('error');
		return;
	}
 
	let pharmacys;
	const quer = new RegExp(searchingBy)
	const quer1 = new RegExp(searchingBy1)
	try{
		pharmacys = await Pharmacy.find({
			$and:[
			{
				dutyName :quer
			},
			{
				dutyAddr :quer1
			}

			
			]})
		console.log(pharmacys);
	}catch(error){
		console.log(error);
	}
	res.json(pharmacys);
};
