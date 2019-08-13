import express from "express";
import routes from "../routes";
import request from "request";
import {
	getHospitalName,
	video
} from "../controllers/hospitalController";

const hospitalRouter = express.Router();

hospitalRouter.get(routes.hospitalName,getHospitalName);

module.exports = hospitalRouter;
