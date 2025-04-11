const http = require('http');
const fs = require('fs/promises');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


const formSubmitrouter = require('./routes/formsubmit');
app.use('/:shortcode', async (req, res) => {
    const { shortcode } = req.params; // Extract the shortcode
    const filename = 'urlmap.json'; // Path to your JSON file

    try {
        // Check if the file exists
        await fs.access(filename);

        // Read the file content
        const fileContent = await fs.readFile(filename, 'utf8');
        const jsonData = JSON.parse(fileContent);

        // Check if the shortcode exists in the JSON data
        if (jsonData[shortcode]) {
            const originalUrl = jsonData[shortcode];
            console.log(`Redirecting to: ${originalUrl}`);
            return res.redirect(originalUrl); // Redirect to the original URL
        } else {
            return res.status(404).send('Shortcode not found'); // Handle invalid shortcode
        }
    } catch (error) {
        console.error(`Error handling shortcode: ${error.message}`);
        return res.status(500).send('Internal Server Error'); // Handle server errors
    }
});
app.use('/user', formSubmitrouter)


app.listen(4747, () => {
    console.log('server is listening');
});
