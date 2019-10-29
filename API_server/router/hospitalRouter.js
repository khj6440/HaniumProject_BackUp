import express from "express";
import routes from "../routes";
import request from "request";
import {
	getHospitalName,
	getHospitalLocation
} from "../controllers/hospitalController";

const hospitalRouter = express.Router();

hospitalRouter.get(routes.hospitalName,getHospitalName);
hospitalRouter.get(routes.hospitalLocation, getHospitalLocation);

module.exports = hospitalRouter;
