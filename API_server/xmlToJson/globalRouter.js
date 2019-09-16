import express from "express";
import routes from "../routes";
import request from "request";
import urlencode from "urlencode";
import convert from"xml-js";
const fs = require('fs');
//const cheerio = require('cheerio');
const globalRouter = express.Router();

globalRouter.get("/",function(req,res,next){

	//약국정보 api 
	var url = 'http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyFullDown?serviceKey=zWGx%2BJgoczhSNpBq1kmcRJwv1coxyImhdsRxiuxaX5ebifpCdU9m%2FBZJmbvqnx3VkCqoYH%2F6vMS22PRlAEtiYQ%3D%3D';
	var query = '&' + encodeURIComponent('pageNo') + '=' +encodeURIComponent('1');
	 query += '&' + encodeURIComponent('numOfRows') + '=' +encodeURIComponent('22586');

	//정보를 파일에 저장하는부분
    request({
        url :url + query,
        method: 'GET'
    	}, function (err, res, body){
	if(err){
		console.log(err);
		return;
	}
	var xmlToJson = convert.xml2json(body,{compact : true,spaces:4});
	//ﬁle에 저장하기 

	fs.appendFile('pharmacy22.json',xmlToJson,'utf8',(err)=> {
		if(err) throw err;
		console.log('appendFile');
		});

	});
    

	res.render("../views/home"); 
});

module.exports = globalRouter;

