import routes from "../routes";

import Medicine from "../models/Medicine";
//import { database } from "../db";

export const video = (req,res) => res.render("home",{pagetitle:"upload"});


export const getMedicineName = async (req,res) => {
//	let db;
	const {
		query:{
			name : searchingBy
		}
	} = req;
//	query 만들어 주는 부분
 
	var medicines;
	console.log(medicines);
	console.log(Medicine);
	
	try{
		medicines = await Medicine.find({
			name: {
				$regex : searchingBy
			}
		})
		console.log(medicines);
	}catch(error){
		console.log(error);
	}
	res.json(medicines);
};

