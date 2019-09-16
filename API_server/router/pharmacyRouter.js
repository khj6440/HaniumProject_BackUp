import express from "express";

import routes from "../routes";
import request from "request";
import {
	getPharmacyName,
	video
} from "../controllers/pharmacyController";

const pharmacyRouter = express.Router();

pharmacyRouter.get(routes.pharmacyName,getPharmacyName);

module.exports = pharmacyRouter;
