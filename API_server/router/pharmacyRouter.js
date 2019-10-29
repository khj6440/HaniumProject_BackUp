import express from "express";

import routes from "../routes";
import request from "request";
import {
	getPharmacyName,
	getPharmacyLocation
} from "../controllers/pharmacyController";

const pharmacyRouter = express.Router();

pharmacyRouter.get(routes.pharmacyName,getPharmacyName);
pharmacyRouter.get(routes.pharmacyLocation,getPharmacyLocation);

module.exports = pharmacyRouter;
