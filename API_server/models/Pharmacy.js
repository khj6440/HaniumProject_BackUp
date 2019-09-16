import mongoose from "mongoose";

const PharmacySchema = new mongoose.Schema({
    dutyAddr : {
            _text : String
    },
    dutyInf : {
            _text : String
    },
    dutyMapimg : {
            _text : String
    },
    dutyName : {
            _text : String
    },
    dutyTel1: {
            _text : String
    },
    dutyTime1c: {
            _text : String
    },
    dutyTime1s : {
            _text : String
    },
    dutyTime2c: {
            _text : String
    },
    dutyTime2s : {
            _text : String
    },
    dutyTime3c: {
            _text : String
    },
    dutyTime3s : {
            _text : String
    },
    dutyTime4c: {
            _text : String
    },
    dutyTime4s : {
            _text : String
    },
    dutyTime5c: {
            _text : String
    },
    dutyTime5s : {
            _text : String
    },
    dutyTime6c: {
            _text : String
    },
    dutyTime6s : {
            _text : String
    },
    hpid: {
            _text : String
    },
    postCdn1: {
            _text : String
    },
    postCdn2: {
            _text : String
    },
    rnum: {
            _text : String
    },
    wgs84Lat: {
            _text : String
    },
    wgs84Lon: {
            _text : String
    }
},{strict: false });

const model = mongoose.model("pharmacys",PharmacySchema);
// hospital 스키마 불러오는 구문 짜야함

export default model;
