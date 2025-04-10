const http = require('http');
const fs = require('fs/promises');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


const formSubmitrouter = require('./routes/formsubmit');


app.use('/user', formSubmitrouter)


app.listen(4747, () => {
    console.log('server is listening');
});
