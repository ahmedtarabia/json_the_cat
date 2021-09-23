//require request
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error, response, body) => {
    if (error) { //request failure
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (data[0]) { //breed there
      callback(null, data[0].description);
    } else { // name not found
      callback("breed not found!", null);
    }
  });
};

module.exports = { fetchBreedDescription };