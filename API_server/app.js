import express from "express"; //node js 에서 웹서버를 개발할때 가장 많이 사용하는 모듈
import mongoose from"mongoose"; //node js 와 mongoDB를 연결해 주는 모듈 
import cookieParser from "cookie-parser"; //cookie에 유저정보를 저장
import bodyParser from "body-parser";	
import morgan from "morgan"; // middleware 로그 기록
import helmet from "helmet"; //middlewware node js 앱의 보안에 도움
import routes from "./routes";
import globalRouter from "./router/globalRouter";
import drugstoreRouter from "./router/drugstoreRouter";
import hospitalRouter from "./router/hospitalRouter";


const app = express();

app.use(helmet());
app.set("view engine", "pug");
//app.set('views','/views');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan("dev"));
//app.use(routes.home,globalRouter);
//잘못 api 검색하거나 오류있는 구문은 globalRouter에서 처리하도록

//app.use(routes.drugstore,drugstoreRouter);
// 약국 관련

app.use(routes.home,globalRouter);
app.use(routes.hospital,hospitalRouter);
//병원 관련

export default app;
