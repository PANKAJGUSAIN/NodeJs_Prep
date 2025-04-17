const express = require('express');
const router = express.Router();


router.get('/report' , (req , res)=>{
    console.log('report route');
    res.render('report');
})

module.exports = router;