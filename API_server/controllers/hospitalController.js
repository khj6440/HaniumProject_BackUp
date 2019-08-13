import routes from "../routes";

import Hospital from "../models/Hospital";
//import { database } from "../db";

export const video = (req,res) => res.render("home",{pagetitle:"upload"});


export const getHospitalName = async (req,res) => {
	console.log(1);
//	let db;
/*	const {
		query:{
			name : searchingBy
		}
	} = req;
	query 만들어 주는 부분
*/ 
	var hospitals;
	console.log(hospitals);
	console.log(Hospital);
//	console.dir(Hospital);
	try{
		hospitals = await Hospital.find({
		yadmNm: {
				_text:{
					$regex:"/고려대학교/"
				}
			}
		});
		console.log(hospitals);
	}catch(error){
		console.log(error);
	}
	res.render("home");
};
