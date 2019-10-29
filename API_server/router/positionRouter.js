import express from "express";
import routes from "../routes";
import request from "request";
import {
	getSavePosition,
	video
} from "../controllers/positionController";

const positionRouter = express.Router();

positionRouter.get(routes.positionSave,getSavePosition);

module.exports = positionRouter;
