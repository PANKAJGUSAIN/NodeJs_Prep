const express = require('express');
const app = express();

app.set('view engine' , 'ejs');

app.set('views' , '/views'); // default 

app.listen(3000 , ()=>{
    console.log("listening to port 3000")
})