const express = require('express');
const expressEjsLayout = require('express-ejs-layouts');

const app = express();

app.set('view engine','ejs');
app.use(expressEjsLayout);
app.use(express.urlencoded({extended : false}));

// routes

app.use('/', express.static(__dirname+ '/')); // any file called from "/" in ejs file will start in main folder

let webApp = require('./routes/webApp');
app.use('/',webApp);

dev
// port
app.listen(3000);
