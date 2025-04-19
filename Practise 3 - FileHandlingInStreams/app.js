const express = require('express');
const fs = require('node:fs');
const app = express();
const path = require('node:path');

app.use(express.static(path.join(__dirname, 'public')));


app.use('/upload', async(req, res)=>{
    const headers = req.headers;
    let chunkIndex = headers["x-chunk-index"];
    let fileName = headers["x-file-name"];
    let fileType = headers["x-file-type"];
    let lastchunkIndex = headers['x-last-chunk-size'];

    if (!fileName) {
        return res.status(400).send('Missing file name');
    }

    const tempfilePath = path.join(__dirname , 'temp' ,  fileName);
    const OrigfilePath = path.join(__dirname , 'files' ,  fileName);

    const writeStream = fs.createWriteStream(tempfilePath ,  { flags: 'a' });

    req.on('data' , (chunk)=>{
        writeStream.write(chunk);
    })

    req.on('end', () => {
        writeStream.end();
        console.log(`✅ Received chunk ${chunkIndex} of ${lastchunkIndex} for file: ${fileName}`);
        // Check if this is the last chunk
        if (chunkIndex === lastchunkIndex) {

            // Move file
            fs.rename(tempfilePath, OrigfilePath , (err) => {
                if (err) {
                    console.error("Error moving the file:", err);
                    return res.status(500).send('Error moving file.');
                }
                console.log(`File moved to ${OrigfilePath}`);
                return res.status(200).send('File uploaded and moved successfully.');
            });

        } 
        
        else {

            return res.status(200).send('Chunk received successfully.');
        }

    });

    req.on('error', err => {
        console.error('❌ Error while receiving chunk:', err);
        res.status(500).send('Error receiving chunk');
    });

})



app.listen(3000 , ()=>{
    console.log(`Listening to Por ${3000}`)
})