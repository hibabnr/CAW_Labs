const fs = require('fs');
const filePath = process.argv[2];




fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log(data); 
});