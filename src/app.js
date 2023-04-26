const exp = require('constants');
const express = require('express');
const path = require('path');
const {Router} = require('./routes/index');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { error } = require('console');
const  CreateError = require("http-errors")

morgan()
const app = express();
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'../','public')));
app.use(express.json())
app.use(express.urlencoded({extended:false}));



app.use(Router)
app.use((req,res,next)=>{
    const error =  new Error('Not Found')
    error.status = 404
    next(error)
}) 

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error:{
            status: err.status || 500,
            message: err.message || 'Internal Server Error',
        }
    })
})



module.exports = {app}
