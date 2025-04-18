const path = require('path');
const fs = require('fs');

const inputFilePath = path.join(__dirname , "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

const readableStream = fs.createReadStream(inputFilePath , {encoding:"utf8" , highWaterMark:16});
const writeableStream = fs.createWriteStream(outputFilePath);

//connect readableStream and writeableStream

//way1 
// readableStream.pipe(writeableStream); 

//way2 
readableStream.on("data" , (chunk)=>{
    console.log("Buffer(Chunk)" , Buffer.from(chunk)); // convert the chunk to a buffer
    console.log("Recieved Chunk" , chunk);  // Logs each 16-byte chunk
    writeableStream.write(chunk);          // write each chunk to output file
})

readableStream.on("error" , (err)=> console.log(err));
writeableStream.on("error" , (err)=> console.log(err));
