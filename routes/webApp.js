const express = require('express');
const router = express.Router();

module.exports = function (RED,YELLOW,GREEN){
    router.route("/")
        .get((req, res, next ) =>{
            res.render('web_index', {red: false ,yellow: false ,green: false});
            (req, res, next);
        });
    router.route("/update/get")
    .get((req, res, next ) =>{
        //res.send("1,0,1")

        let RYG = [
        RED.readSync().toString(),
        YELLOW.readSync().toString(),
        GREEN.readSync().toString()
        ];
	let msg = RYG.toString();

        //res.send( (RYG.toString()) )
        res.send(msg);
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
