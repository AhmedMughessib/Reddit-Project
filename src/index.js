const {app} = require('./app');

const PORT = 3500;



app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})