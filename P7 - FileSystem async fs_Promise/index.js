const fs = require('fs/promises');
const path = require('path');


fs.readdir(__dirname)
    .then((data) => {
        console.log("Directory contents:", data);
    })
    .catch((err) => { 
        console.error("Error reading directory:", err);
    });


    // Read a file
    fs.readFile(path.join(__dirname, 'example.txt'), 'utf8')
        .then((content) => {
            console.log("File content:", content);
        })
        .catch((err) => {
            console.error("Error reading file:", err);
        });

    // Update (write to) a file
    fs.writeFile(path.join(__dirname, 'example.txt'), 'Updated content')
        .then(() => {
            console.log("File updated successfully.");
        })
        .catch((err) => {
            console.error("Error updating file:", err);
        });

    // Delete (unlink) a file
    fs.unlink(path.join(__dirname, 'example.txt'))
        .then(() => {
            console.log("File deleted successfully.");
        })
        .catch((err) => {
            console.error("Error deleting file:", err);
        });