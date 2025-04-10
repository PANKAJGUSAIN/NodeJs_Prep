const express = require('express');
const router = express.Router();


router.post('/shorten' , async (req,res) => {
            try{
                const data = req.body; // Access the body data
                console.log(data); // Log the data for debugging
            }catch(err){

            }
})


module.exports = router ; 