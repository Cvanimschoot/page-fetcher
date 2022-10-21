const url = process.argv[2];
const locationToWriteTo = process.argv[3];
const request = require('request');
const fs = require('fs');

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const content = body;
  fs.writeFile(locationToWriteTo, content, err => {
    if (err) {
      console.error(err);
    }
  })
  console.log(`Downloaded and saved ${body.length} bytes to ${locationToWriteTo}`)
});