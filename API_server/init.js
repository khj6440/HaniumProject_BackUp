import "./db";			//db 접속
//import { connectDB } from "./db";
import dotenv from "dotenv";
import app from "./app";	//서버

dotenv.config();

import "./models/Drugstore";
import "./models/Hospital";


app.listen(80,function(){	//서버를 실행 시키는 메소드
        console.log('server 연결!');
	
//	connectDB();

});


