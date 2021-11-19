const express = require('express');
const Gpio = require('onoff').Gpio
const app = express();

const RED = new Gpio(21, 'out');
const YELLOW = new Gpio(20, 'out');
const GREEN = new Gpio(26, 'out');


app.use(express.urlencoded({extended : false}));


app.get('/', function (req, res) {
    res.sendFile( __dirname + "/html/" + "index.html" );
 })
 app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/html/" + "style.css");
  });
  app.get('/main.js', function(req, res) {
    res.sendFile(__dirname + "/html/" + "main.js");
  });

  app.get('/override:lightState', function(req,res){
    lightState = req.params.lightState.split(":")[1].split("_")
    res.send("Data received")

    if (lightState[0] == "RED") { RED.writeSync(parseInt(lightState[1]))} 
    if (lightState[0] == "YELLOW") { YELLOW.writeSync(parseInt(lightState[1]))} 
    if (lightState[0] == "GREEN") { GREEN.writeSync(parseInt(lightState[1]))} 

  });
 
  
 
 app.listen(3000);
