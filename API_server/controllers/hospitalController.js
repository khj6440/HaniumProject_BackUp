import routes from "../routes";

import Hospital from "../models/Hospital";
//import { database } from "../db";

export const video = (req,res) => res.render("home",{pagetitle:"upload"});


export const getHospitalName = async (req,res) => {
//	let db;
	const {
		query:{
			name : searchingBy
		}
	} = req;
//	query 만들어 주는 부분
 
	var hospitals;
	console.log(hospitals);
	console.log(Hospital);
//	console.dir(Hospital);
/*
	try{
		hospitals = await Hospital.find({
			yadmNm:{
				_text: searchingBy
			}
		})
		console.log(hospitals);
	}catch(error){
		console.log(error);
	}
	res.json(hospitals);
};
*/
	const quer = new RegExp(searchingBy);
	try{
		hospitals = await Hospital.find({
			"yadmNm._text":{
				$regex: quer
			}
		})
		console.log(hospitals);
	}catch(error){
		console.log(error);
	}
	res.json(hospitals);
};

