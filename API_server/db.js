
//mongoose 안되서 mongodb-nataive 사용
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/sick",{
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true
	}
);

const db = mongoose.connection;
const handleOpen = () => console.log("connection to DB");
const handleError = (error) => console.log("Error on DB");
	db.once("open",handleOpen);
	db.on("error",handleError);

//몽고db모듈 사용
var MongoClient = require('mongodb').MongoClient;

var database;

var connectDB = function() {
	var databaseUrI = 'mongodb://localhost:27017/sick';

	//데이터 베이스 연결
	MongoClient.connect(databaseUrI,function(err, db){
		if(err) throw err;
	
		console.log('db 연결 : ',databaseUrI);
		
		//db 변수에 할당
		database = db;
	});
}
module.exports.database = database;
module.exports.connectDB = connectDB;

