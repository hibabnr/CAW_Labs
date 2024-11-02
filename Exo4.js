const fs = require('fs');
const fileName = process.argv[2]; 
const text = process.argv[3]; 

// ****FOR Q1*** fs.writeFile(file.txt, text, 'utf8', (err) => {
fs.writeFile(fileName, text, 'utf8', (err) => {
    if (err) {
        console.error("Error writing to file:", err.message);
        return;
    }
    console.log("The file has been saved!");
});

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log(data); 
});