'use strict';

// Modules 
import fetch from 'node-fetch';
// import api from './api-key.json' assert {type: 'json'};

const location = process.argv.slice(2);
const makeRequest = async (location) => {
    try {
        const response = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=c&rapidapi-key=44ecf4522emsh48f75419e76afd8p193823jsn951ccde94696`);
        const data = await response.json();
        const weather = data.current_observation.condition;
        console.log(`It is currently ${weather.temperature} degrees celcius out. Today will be ${weather.text}. `);
    } catch (e) {
        console.log('unable to connect to the server')
    }
}

makeRequest(location);