import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
	user : String,
	latitude : String,
	longitude : String
},{strict : false});

const model = mongoose.model("locations",locationSchema);

export default model;
