//import axios from "axios";
const axios = require('axios');

const api = axios.create({
	baseURL : "https://danbee.ai/chatflow/",
	headers : { "Content-Type" : "application/json;charset=UTF-8" },
});

const DanbeeApi = {

	getWelcome : () =>
		api.post("/welcome.do",{
			chatbot_id: "eb75e679-21a7-4c67-ac48-f7ee22bcb9fc",
		}),
	
	getAnswer : (intent_id, param_id,  session_id, node_id, ins_id, chatflow_id, req) =>
		api.post("/engine.do", {
			chatbot_id : "eb75e679-21a7-4c67-ac48-f7ee22bcb9fc",
			intent_id,
			param_id,
			session_id,
			node_id,
			ins_id,
			chatflow_id,
			input_sentence : req,
		})
	
	
};

module.exports = DanbeeApi;
