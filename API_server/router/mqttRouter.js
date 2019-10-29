import express from "express";
import routes from "../routes";
import request from "request";
import {
	getMqttHeightSave,
	getMqttWeightSave,
	getMqttHeartrateSave,
	getMqttTemperateSave,
	getMqttBmiSave,
	getMqttSend
} from "../controllers/mqttController";

const mqttRouter = express.Router();

mqttRouter.get(routes.mqttSaveHeight,getMqttHeightSave);
mqttRouter.get(routes.mqttSaveWeight,getMqttWeightSave);
mqttRouter.get(routes.mqttSaveHeartrate,getMqttHeartrateSave);
mqttRouter.get(routes.mqttSaveTemperate,getMqttTemperateSave);
mqttRouter.get(routes.mqttSaveBmi,getMqttBmiSave);
mqttRouter.get(routes.mqttSend,getMqttSend);

module.exports = mqttRouter;
