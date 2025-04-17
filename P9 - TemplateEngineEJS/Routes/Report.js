const express = require('express');
const router = express.Router();


router.get('/report' , (req , res)=>{
    console.log('report route');
    const student = [
        { name: "Pankaj", grade: "10th", favouriteSubject: "Maths" },
        { name: "Riya", grade: "9th", favouriteSubject: "Science" },
        { name: "Amit", grade: "11th", favouriteSubject: "History" },
        { name: "Sneha", grade: "12th", favouriteSubject: "Physics" },
        { name: "Rahul", grade: "8th", favouriteSubject: "English" }
    ];
    res.render('report' , { title:"Report" , student} );
})

module.exports = router;