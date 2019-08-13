import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    addr : {
            _text : String
    },
    clCd : {
            _text : String
    },
    clCdNm : {
            _text : String
    },
    drTotCnt : {
            _text : String
    },
    estbDd : {
            _text : String
    },
    gdrCnt : {
            _text : String
    },
    hospUrl : {
            _text : String
    },
    intnCnt : {
            _text : String
    },
    postNo : {
            _text : String
    },
    resdntCnt : {
            _text : String
    },
    sdrCnt : {
            _text : String
    },
    sgguCd : {
            _text : String
    },
    sgguCdNm : {
            _text : String
    },
    sidoCd : {
            _text : String
    },
    sidoCdNm : {
            _text : String
    },
    telno : {
            _text : String
    },
    XPos : {
            _text : String
    },
    YPos : {
            _text : String
    },
    yadmNm : {
            _text : String
    },
    ykiho : {
            _text : String
    }
},{ strict: false });

const model = mongoose.model("hospitals",hospitalSchema);
// hospital 스키마 불러오는 구문 짜야함

// let a = [];
// a=model.find({});
// console.log(a);
export default model;
