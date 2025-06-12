const fs = require('fs');

const sourceFile = 'source.txt';
const destinationFile = 'destination.txt';

try {
  const data = fs.readFileSync(sourceFile, 'utf8');
  fs.writeFileSync(destinationFile, data);
  console.log(`Content copied from "${sourceFile}" to "${destinationFile}"`);
} catch (err) {
  console.error('Error:', err.message);
}