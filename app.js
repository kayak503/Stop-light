const express = require('express');
const app = express();


app.get('/', function (req, res) {
    res.send('Hello World');
    // res.sendFile( __dirname + "/" + "index.htm" );
 })



 app.listen(3000);
