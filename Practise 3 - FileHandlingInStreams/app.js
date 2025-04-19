const express = require('express');
const app = express();
const path = require('node:path');

app.use(express.static(path.join(__dirname, 'public')));



app.listen(3000 , ()=>{
    console.log(`Listening to Por ${3000}`)
})