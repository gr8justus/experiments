'use strict';

// Modules
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'
const __dirname = dirname(fileURLToPath(import.meta.url));
import express from 'express';

const app = express();
const publicDirPath = express.static(path.join(__dirname, '../public'))
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');
app.use(publicDirPath);

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Oluwatobi Oladoye'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        Location: {
            city: 'Meiran',
            region: 'Lagos',
            country: 'Nigeria'
        },
        Forecast: {
            temperature: 27
        },
        unit: ['C', 'F']
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000.')
})