import express from "express";
import routes from "../routes";
import request from "request";
import urlencode from "urlencode";
import convert from"xml-js";
const fs = require('fs');
const cheerio = require('cheerio');
const globalRouter = express.Router();

globalRouter.get("/",function(req,res,next){

	//병원정보  api 
	var url = 'http://apis.data.go.kr/B551182/hospInfoService/getHospBasisList?serviceKey=ok5U7zvwJ2BXvndun5rYy%2BaKAKoWXLE0XXQAU5hAM7AWUimTgWQsEbsPf%2FOzPeegE3jn6iae6On07VQuTW8ZZA%3D%3D';
	var query = '&' + encodeURIComponent('pageNo') + '=' +encodeURIComponent('4');

	 query += '&' + encodeURIComponent('numOfRows') + '=' +encodeURIComponent('20000');

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
/*
	fs.appendFile('hospital.json',xmlToJson,'utf8',(err)=> {
		if(err) throw err;
		console.log('appendFile');
		});

	});
  */  

	res.render("../views/home"); 
});

module.exports = globalRouter;

