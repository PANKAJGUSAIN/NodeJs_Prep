const path = require('path');
const fs = require('fs');

const inputFilePath = path.join(__dirname , "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

const readableStream = fs.createReadStream(inputFilePath , {encoding:"utf8" , highWaterMark:16});
const writeableStream = fs.createWriteStream(outputFilePath);

//connect readableStream and writeableStream
readableStream.pipe(writeableStream);

readableStream.on("error" , (err)=> console.log(err));
writeableStream.on("error" , (err)=> console.log(err));
