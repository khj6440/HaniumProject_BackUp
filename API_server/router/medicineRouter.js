import express from "express";
import routes from "../routes";
import request from "request";
import {
	getMedicineName
} from "../controllers/medicineController";

const medicineRouter = express.Router();

medicineRouter.get(routes.medicineName,getMedicineName);

module.exports = medicineRouter;
