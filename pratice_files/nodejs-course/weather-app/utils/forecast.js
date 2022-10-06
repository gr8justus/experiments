'use strict';

// Modules
import fetch from 'node-fetch';
import key from '../api-key.json' assert {type: 'json'};

const forecast = async (address, callback) => {
    try {
        const response = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${address}&format=json&u=c&rapidapi-key=${key.key}`);
        
        const { location: { city, region, country }, current_observation: { condition } } = await response.json();
        callback(city + ', ' + region + ', ' + country);
        callback(`Today will be ${condition.text.toLowerCase()}. It is currently ${condition.temperature} degrees celcius out.`);
    } catch (e) {
        callback(e.message)
    }
}

export { forecast };