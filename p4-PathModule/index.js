const path = require("node:path");

console.log(__dirname);  //op = C:\NodeJs_Prep\p4-PathModule
console.log(__filename); //op = C:\NodeJs_Prep\p4-PathModule\index.js 

// folder

const filePath = path.join("folder" , "students" , "data.txt");
console.log(filePath);

// path module methods
const parseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extname = path.extname(filePath);
const baseName  = path.basename(filePath);
const dirname = path.dirname(filePath);

console.log({parseData , resolvedPath , extname , baseName , dirname })