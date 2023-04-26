const exp = require('constants');
const express = require('express');
const path = require('path');
const {Router} = require('./routes/index');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { error } = require('console');
const  CreateError = require("http-errors")

require('dotenv').config();

morgan()
const app = express();
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'../','public')));
app.use(express.json())
app.use(express.urlencoded({extended:false}));



app.use(Router)
app.use((req,res,next)=>{
 res.status(404).send("bad request")
}) 

app.use((error, req, res, next) => {
    if(error.status){
        res.status(error.status).send(error)
    }else{  
        res.status(500).send("interval server error")
    }
    
})



module.exports = {app}
