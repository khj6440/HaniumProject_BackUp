import mongoose from "mongoose";

const PharmacySchema = new mongoose.Schema({
    dutyAddr : String,
    dutyInf : String,
    dutyMapimg : String,
    dutyName : String,
    dutyTel1: String,
    dutyTime1c: String,
    dutyTime1s : String,
    dutyTime2c: String,
    dutyTime2s : String,
    dutyTime3c: String,
    dutyTime3s : String,
    dutyTime4c: String,
    dutyTime4s : String,
    dutyTime5c: String,
    dutyTime5s : String,
    dutyTime6c: String,
    dutyTime6s : String,
    hpid: String,
    postCdn1: String,
    postCdn2: String,
    rnum: String,
    wgs84Lat: String,
    wgs84Lon: String
},{strict: false });

const model = mongoose.model("pharmacys",PharmacySchema);
// hospital 스키마 불러오는 구문 짜야함

export default model;
