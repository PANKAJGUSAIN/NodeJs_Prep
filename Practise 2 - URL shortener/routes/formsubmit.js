const express = require('express');
const UrlMapping = require('../service/addUrlmapping');
const router = express.Router();


router.post('/shorten', async (req, res) => {
    try {
        const data = req.body; // Access the body data
        console.log(data); // Log the data for debugging

        // Validate input data
        if (!data.url || !data.shortcode) {
            return res.status(400).json({ error: 'Missing required fields: url or shortcode' });
        }

        // Call UrlMapping and handle the result
        const result = await UrlMapping(data);
        if(result.status== 'error'){
            res.status(400).json({message:result.message})
        }
        const url = `http://localhost:4747/${result.message}`
        // Send a success response
        res.status(200).json({ message: 'URL shortened successfully', result : url});
    } catch (err) {

    }
})


module.exports = router; 