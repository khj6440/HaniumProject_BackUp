// Global
const HOME = "/";

//약국
const PHARMACY = "/pharmacy";
const PHARMACY_NAME = "/pharmacyName";
const PHARMACY_LOCATION = "/pharmacyLocation";
//병원
const HOSPITAL = "/hospital";
const HOSPITAL_NAME = "/hospitalName";
const HOSPITAL_LOCATION = "/hospitalLocation";


const MEDICINE = "/medicine";
const MEDICINE_NAME = "/medicineName";

//API

// lat, long
const POSITION = "/position";
const POSITION_SAVE = "/positionSave";

// MQTT data
const MQTT = "/mqtt";
const MQTT_SAVE_HEIGHT = "/mqttSaveHeight";
const MQTT_SAVE_WEIGHT = "/mqttSaveWeight";
const MQTT_SAVE_HEARTRATE = "/mqttSaveHeartrate";
const MQTT_SAVE_TEMPERATE = "/mqttSaveTemperate";
const MQTT_SAVE_BMI = "/mqttSaveBmi";

const MQTT_SEND = "/mqttSend";

const routes = {
	home : HOME,
	pharmacy : PHARMACY,
	pharmacyName : PHARMACY_NAME,
	pharmacyLocation : PHARMACY_LOCATION,
	hospital : HOSPITAL,
	hospitalName : HOSPITAL_NAME,
	hospitalLocation : HOSPITAL_LOCATION,
	medicine : MEDICINE,
	medicineName : MEDICINE_NAME,
	position : POSITION,
	positionSave : POSITION_SAVE,
	mqtt : MQTT,
	mqttSaveHeight : MQTT_SAVE_HEIGHT,
	mqttSaveWeight : MQTT_SAVE_WEIGHT,
	mqttSaveHeartrate : MQTT_SAVE_HEARTRATE,
	mqttSaveTemperate : MQTT_SAVE_TEMPERATE,
	mqttSaveBmi : MQTT_SAVE_BMI,
	mqttSend : MQTT_SEND
};

export default routes;
