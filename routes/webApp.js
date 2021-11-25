const express = require('express');
const router = express.Router();

const Gpio = require('onoff').Gpio;

const RED = new Gpio(21, 'out');
const YELLOW = new Gpio(20, 'out');
const GREEN = new Gpio(26, 'out');

router.route("/")
    .get((req, res) =>{
        res.render('web_index', {red: RED.readSync() ,yellow: YELLOW.readSync() ,green:  GREEN.readSync()});

    });
router.route("/update/get")
.get((req, res) =>{
    let RYG = [
    RED.readSync().toString(),
    YELLOW.readSync().toString(),
    GREEN.readSync().toString()
    ];
    res.send(RYG.toString());
});
router.route("/update/override:lightState")
.get((req, res) =>{
    lightState = req.params.lightState.split(":")[1].split("_")
    res.send("Data received")
    if (lightState[0] == "RED") { RED.writeSync(parseInt(lightState[1]))} 
    if (lightState[0] == "YELLOW") { YELLOW.writeSync(parseInt(lightState[1]))} 
    if (lightState[0] == "GREEN") { GREEN.writeSync(parseInt(lightState[1]))} 
});

module.exports = router;
