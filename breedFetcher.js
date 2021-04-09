const request = require('request');

const fs = require('fs');
const { REPLServer } = require('repl');
const args = process.argv;


const fetchBreedDescription = function (breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=` + breedName, (error, response, body) => {
    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log('404 page not found');
      return;
    }
    const desc = data[0].description;
    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };






