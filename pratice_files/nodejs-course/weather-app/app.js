'use strict';

// Module
import { forecast } from './utils/forecast.js';

const address = process.argv[2];

if (!address) {
    console.log('Please, enter an address')
} else {
    forecast(address, (data) => {
        console.log(data)
    })
}