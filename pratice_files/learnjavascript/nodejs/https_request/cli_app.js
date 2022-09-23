'use strict';

// Create a weather CLI application
// Get temperature of location with postal code, city, and state.

const weather = require('./temperature')

const location = process.argv.slice(2).join('_');       //process is a global variable. Here, it checks to 'GET' the parameter inputed into the console. 

// loop through the locations
//location.forEach(weather.get)     //since get takes just a parameter, the loop is refactored.

weather.get(location);