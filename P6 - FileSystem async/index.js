const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname , "test.txt");
console.log(filePath);

const createFile = fs.writeFile(filePath , "THIS IS AN AYSNC TASK" , 'utf8' , (err)=>{
    if(err) console.error(err) ; 
    else console.log("file has been saved")
});

const readFile = fs.readFile(filePath , 'utf8' , (err , data)=>{
    console.log(data)
})

const updateFile = fs.appendFile(filePath , `\nUpdatedFile` , 'utf8' ,  (err)=>{
    if (err) console.error(err);
    else console.log("file has been updated")
})

const deleteFile = fs.unlink(filePath , (err)=>{
    if (err) console.error(err);
    else console.log("file has been deleted")
})
