'use strict';

// Require https module
const https = require('https');

// Require API key
const api = require('./api');

// Require http module for statuscode
const http = require('http');

// Print error message
function printError(error) {
    console.log(error.message);
}

// Function to print the temperature of a location
function printTemperature (location, temperature) {
    const message = `Current temperature in ${location} is ${temperature}F`
    console.log(message);
}

function get(location) {
    const readAbleLocation = location.replace('_', ' ');
    try {
        // Request made to the server
        const request = https.get(`https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=f&rapidapi-key=${api.key}`, response => {
            if (response.statusCode === 200) {
                let body = '';
                // Read the data
                response.on('data', data => {
                    body += data.toString();
                });

                response.on('end', () => {
                    try {
                        // Parse the data
                        const weather = JSON.parse(body);
                        // Print the data
                        if (weather.location) {
                            printTemperature (readAbleLocation, weather.current_observation.condition.temperature);
                        } else {
                            const locationError = `The location ${readAbleLocation} was not found!`
                            printError(locationError);
                        }
                    } catch (error) {
                        printError(error);
                    }
                });
            } else {
                const statusErrror = `An error (${http.STATUS_CODES[response.statusCode]}) occured while retrieving the required information.`;
                printError(statusErrror);
            }
        });
    request.on('error', printError)

    } catch (error) {
        printError(error);
    }
}

module.exports.get = get;  