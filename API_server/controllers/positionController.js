import routes from "../routes";

import Position from "../models/Position";
//import { database } from "../db";



export const getSavePosition = async (req,res) => {
	const {
		query:{
			latitude : searchingBy,
			longitude : searchingBy1
		}
	} = req;
//	query 만들어 주는 부분
	if(!searchingBy){
		res.json('error');
		return;
	}
 	var query = { user : '1'};
	
	var position;
	
	try{
		position = await Position.update(query,
			{
				$set : {
					latitude : searchingBy,
					longitude : searchingBy1
				}
			}
		)
		console.log(position);
	}catch(error){
		console.log(error);
	}
	res.json(position);
};

/*
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
*/

