const fs = require("fs");

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    console.log(`File content of ${filePath}:\n${data}`);
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
  }
}

function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Successfully wrote to ${filePath}`);
  } catch (err) {
    console.error(`Error writing file: ${err.message}`);
  }
}

module.exports = {
  readFile,
  writeFile
};