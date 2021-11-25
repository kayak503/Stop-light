const express = require('express');
const router = express.Router();
const Gpio = require('onoff').Gpio;
const RED = new Gpio(21, 'out');
const YELLOW = new Gpio(20, 'out');
const GREEN = new Gpio(26, 'out');

module.exports = function (Gpio){

    router.route("/")
        .get((req, res, next ) =>{
            res.render('web_index', {red: false ,yellow: false ,green: false});
            (req, res, next);
        });
    router.route("/update/get")
    .get((req, res, next ) =>{
        //res.send("1,0,1")

        RYG = [
        RED.readSync(),
        YELLOW.readSync(),
        GREEN.readSync()
        ]   

        res.send(RYG.toString())
        (req, res, next);
    });
    router.route("/update/override:lightState")
    .get((req, res, next ) =>{
        lightState = req.params.lightState.split(":")[1].split("_")
        res.send("Data received")

        if (lightState[0] == "RED") { RED.writeSync(parseInt(lightState[1]))} 
        if (lightState[0] == "YELLOW") { YELLOW.writeSync(parseInt(lightState[1]))} 
        if (lightState[0] == "GREEN") { GREEN.writeSync(parseInt(lightState[1]))} 

        (req, res, next);
    });

return router;
}
