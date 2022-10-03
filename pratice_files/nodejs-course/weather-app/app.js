'use strict';

// Modules 
import fetch from 'node-fetch';
import api from './api-key.json' assert {type: 'json'};

const location = process.argv.slice(2);
const makeRequest = async (location) => {
    try {
        const response = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=c&rapidapi-key=${api.key}`);
        const data = await response.json();
        const weather = data.current_observation.condition
        console.log('Today\'s temperature: ', weather.temperature + 'celcius');
    } catch (e) {
        console.log('unable to connect to the server')
    }
}

makeRequest(location);