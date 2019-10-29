import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    addr : String,
    clCd : String,
    clCdNm : String,
    drTotCnt : String,
    estbDd : String,
    gdrCnt : String,
    hospUrl : String,
    intnCnt : String,
    postNo : String,
    resdntCnt : String,
    sdrCnt : String,
    sgguCd : String,
    sgguCdNm : String,
    sidoCd : String,
    sidoCdNm : String,
    telno : String,
    XPos : String,
    YPos : String,
    yadmNm : String,
    ykiho : String
},{ strict: false });

const model = mongoose.model("hospitals",hospitalSchema);
// hospital 스키마 불러오는 구문 짜야함

// let a = [];
// a=model.find({});
// console.log(a);
export default model;
