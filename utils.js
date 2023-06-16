//In this function, i add new product to .json file
const fs = require('fs');

const writeDataToFile = (dest_filePath, content) => {
  fs.writeFile(dest_filePath, JSON.stringify(content), 'utf-8', (error) => {
    if (error) {
      console.log(error);
    }
  });
};

module.exports = { writeDataToFile };
