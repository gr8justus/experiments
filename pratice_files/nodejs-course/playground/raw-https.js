'use strict';

// Module
import https from 'https';

const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=lagos&format=json&u=c&rapidapi-key=44ecf4522emsh48f75419e76afd8p193823jsn951ccde94696`;

const request = https.request(url, (res) => {
    
    let data = ''

    res.on('data', (chunk) => {
        data += chunk.toString()
    })
    
    res.on('end', () => {
        const { location: { city, region, country }, current_observation: { condition } } = JSON.parse(data);
        console.log(city, region, country)
    })
})

request.on('error', (e) => {
    console.log(e.message)
})

request.end()