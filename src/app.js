const exp = require('constants');
const express = require('express');
const path = require('path');
const {Router} = require('./routes/index');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'../','public')));
app.use(express.json())
app.use(express.urlencoded({extended:false}));




app.use(Router)


module.exports = {app}
