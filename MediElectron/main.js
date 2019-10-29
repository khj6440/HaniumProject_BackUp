const {app, BrowserWindow } = require('electron');
//const ChatBot = require('./chatBot');

let win;

function createWindow () {

    let win = new BrowserWindow({
        width : 1249,
        height : 610,
        webPreferences : {
            nodeIntegration : true
        }
    })

    win.webContents.openDevTools();
    
    win.$ = win.jQuery = require('jquery');
	
    win.loadFile('index.html')

    win.on('closed', () =>{
        win = null
    })
}


app.on('ready',createWindow)

app.on('window-all-closed', () => {    
    if(process.platform !=='darwin') {
        app.quit()
    }
})

app.on('activate', () => {
        if ( win == null){
            createWindow()
        }
})

//GOOGLE_APPLICATION_CREDENTIALS = "/home/pi/Medical-Application/TEST-b41fa0c48ee2.json"
// ---------------module-------------------
const fs = require('fs');
const util = require('util');

// mic
const record = require('node-record-lpcm16');
// keyword 감지
const Detector = require('snowboy').Detector;
// keyword 설정
const Models = require('snowboy').Models;

//StringToText
const SpeechToText = require('@google-cloud/speech');

//TextToString
const TextToSpeech = require('@google-cloud/text-to-speech');

//sound
//const Omx = require('node-omxplayer');

//process module
const playProcess = require('child_process');

//Danbee api호출
//import { DanbeeApi } from "api";
const DanbeeApi = require('./api.js');

//난수 생성
//import uuidv1 from "uuid/v1";
const uuidv1 = require('uuid/v1');

// 명령어 실행 프로세스
const spawn = require('child_process').spawn;

const express = require('express');
const mqtt = require('mqtt');

// request 모듈 (음성인식 string 전송)

//----------------전역변수----------------------
//
// 마이크 모드 설정
// 0 : hotwordDetection, 1 : StringToText
let micMode=0; 


// DanbeeMsg 변수 // 나중에 danbee분리하면 이것도 분리
let chatState = {
	input_sentence : "",
	user_id : uuidv1(),
	session_id : "",
	ins_id : "",
	intent_id : "",
	node_id : "",
	param_id : "",
	chatflow_id : "",
	parameters : "",
	error : null,
	date : new Date()
};

//-----------------함수---------------------

// mic녹음
const startMic = () => {
	return record.record({
		sampleRateHertz:16000,
		threshold:0,
		verbose:false,
		recordProgram:'arecord',
		silence:'10.0'
	})
};

// hotwordDetection

//snowboy model 생성
const models = new Models();

models.add({
	file : './node_modules/snowboy/resources/snowboy.pmdl',
	sensitivity : '0.4',
	hotwords : 'snowboy'
});


const detector = new Detector({
	resource : "./node_modules/snowboy/resources/common.res",
	models : models,
	audioGain : 2.0,
	applyFrontend : true
});

detector.on('silence',function() {console.log('silence');});
detector.on('sound',function() {console.log('sound');});
detector.on('error',function() {
	console.log('error');
});

detector.on('hotword',function (index,hotword,buffer){
	console.log('hotword detected. start stt', index, hotword);
	micMode=1;
});


// StringToText

const sttClient = new SpeechToText.SpeechClient();

const sttRequest = {
	config : {
		encoding : 'LINEAR16',
		sampleRateHertz : 16000,
		languageCode : 'ko-KR'
	},
	interimResults:false
};

// 입력받은 stream저장
let recognizeStream = null;

const startStt = (data) => {
	console.log("startStttt");
	recognizeStream = sttClient.streamingRecognize(sttRequest);
	recognizeStream.on('error', (error) => {
		console.log('recognizeStream Error : '+error);
		recognizeStream.end();
		micMode = 0;
	});
	recognizeStream.on('data', (data) => {
		//console.log('data received : ' +JSON.stringify(data));
		if(data.results[0] && data.results[0].alternatives[0]){
			let sayData = data.results[0].alternatives[0].transcript
			console.log(sayData);
			// 이부분 다른거 나중에 확인하자
			//queryDialog(sayData); 
			///나는 이거 string 판단해서 페이지를 바꿔야겠지?
			//playTTS(sayData);
			sendMsg(sayData);	
			client.publish("sensor/data", sayData);


			recognizeStream.end();
			recognizeStream = null;
			micMode=0;
		}
	}
	);
};


// TextToStream

const ttsClient = new TextToSpeech.TextToSpeechClient();

const playTTS = (ttsText) => {
	const ttsRequest = {
		input : {text:ttsText},
		voice : {languageCode:'ko-KR',ssmlGender:'REMALE'},
		audioConfig:{audioEncoding:'LINEAR16'}
	};
	ttsClient.synthesizeSpeech(ttsRequest, (err,response)=>{
		if(err){
			console.log('TTS ERROR : '+ err);
			return;
		};
		const playTime = (response.audioContent.length-40)/(16000*2);

		console.log('playTIme:'+playTime);
		fs.writeFileSync('./Sound/tts.wav',response.audioContent,'binary');
		//음성 출력 함수
		//var player = Omx('tts.wav');
		//player.play();
		ttsPlay();
	});
};

// tts음성 출력
const ttsPlay = () => {
	let play = spawn('omxplayer',['./Sound/tts.wav']);
}

// greeting 
const welcomeMsg = async () => {
		
	let sendResult = await DanbeeApi.getWelcome(
		chatState.intent_id,
		chatState.param_id,
		chatState.session_id,
		chatState.node_id,
		chatState.ins_id,
		chatState.chatflow_id,
		chatState.input_sentence
	)

	chatState.input_sentence = sendResult.data.responseSet.result.input_sentence;
	chatState.session_id = sendResult.data.responseSet.result.session_id;
	chatState.ins_id = sendResult.data.responseSet.result.ins_id;
	chatState.intent_id = sendResult.data.responseSet.result.intent_id;
	chatState.node_id = sendResult.data.responseSet.result.node_id;
	chatState.param_id = sendResult.data.responseSet.result.param_id;
	chatState.chatflow_id = sendResult.data.responseSet.result.chatflow_id;

//	playTTS(sendResult.data.responseSet.result.result[0].message);
}


// sendMsg 

const sendMsg = async (sayData) => {
		
	chatState.input_sentence = sayData;

	let sendResult = await DanbeeApi.getAnswer(
		chatState.intent_id,
		chatState.param_id,
		chatState.session_id,
		chatState.node_id,
		chatState.ins_id,
		chatState.chatflow_id,
		chatState.input_sentence
	)

	chatState.input_sentence = sendResult.data.responseSet.result.input_sentence;
	chatState.session_id = sendResult.data.responseSet.result.session_id;
	chatState.ins_id = sendResult.data.responseSet.result.ins_id;
	chatState.intent_id = sendResult.data.responseSet.result.intent_id;
	chatState.node_id = sendResult.data.responseSet.result.node_id;
	chatState.param_id = sendResult.data.responseSet.result.param_id;
	chatState.chatflow_id = sendResult.data.responseSet.result.chatflow_id;
	
	console.log(sendResult.data.responseSet.result.result[0].message);
	playTTS(sendResult.data.responseSet.result.result[0].message);
	client.publish("sensor/chatbot",sendResult.data.responseSet.result.result[0].message);
}


const client = mqtt.connect("ws://"+ "192.168.1.21" + ":" + 9001);

const connectMqtt = () =>{
	client.on("connect", () =>{
		console.log("connected to the Mqtt server");
	
	});
}

//---------------------------실행구문----------------------------
//start
let mic = startMic();
const startVoice = spawn('omxplayer',['./Sound/start.wav']);
welcomeMsg();
connectMqtt();
 
//loop
mic.stream().on('data',(data)=>{
	if(micMode===0){ //hot-word 감지
		detector.write(data);
	}else{
		//console.log('hotword 감지!');
		if(recognizeStream===null){
			console.log('stt실행');
			startStt();
		}
		if(recognizeStream!==null){
				recognizeStream.write(data);
		}
	}
});
