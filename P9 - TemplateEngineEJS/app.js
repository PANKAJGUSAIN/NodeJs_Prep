const express = require('express');
const Reportrouter = require('./Routes/Report');
const app = express();
const path = require('path');
app.set('view engine' , 'ejs');

app.set('views' , path.join(__dirname, "views")); // default 

app.use('/reportRoute' , Reportrouter);

app.listen(3000 , ()=>{
    console.log("listening to port 3000")
})