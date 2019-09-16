import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
	NO : String,
	name : String,
	companyName : String,
	classification : String,
	tendency : String,
	standardCode : String,
	effect : String,
	dosage : String,
	precautions : String,
	ingredients : String,
	Storage : String,
	Validity : String,
	itemNum : String,
	proGeneral : String

},{ strict: false });

const model = mongoose.model("medicines",medicineSchema);
// hospital 스키마 불러오는 구문 짜야함

// let a = [];
// a=model.find({});
// console.log(a);
export default model;
