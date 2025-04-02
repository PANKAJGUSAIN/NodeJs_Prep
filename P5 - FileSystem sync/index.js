const fs = require('fs');
const path = require("path");

const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const timestamp =  Date.now();
console.log(timestamp);

const filename = `${currentDate}-${currentMonth}-${currentYear}.txt`;
const filepath = path.join(__dirname ,filename);
console.log(filepath);

const writeFile = fs.writeFileSync(filepath , "helloworld",'utf8');

const readFile = fs.readFileSync(filepath , 'utf8');

const updateFile = fs.appendFileSync(filepath , `\nupdate content` , 'utf8');

const fileSize = fs.statSync(filepath);

const deleteFile = fs.unlinkSync(filepath);


console.log(writeFile , " " ,readFile , " " , updateFile," " , fileSize);

