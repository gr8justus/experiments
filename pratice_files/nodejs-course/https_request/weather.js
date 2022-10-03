const Condition = require('./temperature');

const todaysWeather = new Condition('lagos');

todaysWeather.on('end', console.dir);

todaysWeather.on('error', console.error);