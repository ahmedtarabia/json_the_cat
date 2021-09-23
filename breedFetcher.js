//require request
const request = require('request');
let breedName = process.argv[2];


const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

request(url, (error, response, body) => {
  
  if (error) { //request failure
    return console.log('error:', error);
  }
  const data = JSON.parse(body);
  if (data[0]) { //breed there
    console.log(data[0].description);
  } else { // name not found
    console.log("breed not found!");
  }
});




