const request=require('request');
const argv = require('yargs').argv;

let city=argv.c||'Boston';
let apiKey='949a6b162493003fdae32de83cc33b4b';
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
<!--sending cityname and apikey and format in which we need data to weather site -->


request(url, function (error, response, body) {

    let weather= JSON.parse(body);
    let message=`It's ${weather.main.temp}degrees in ${weather.name}!`;
    console.log(message);

});
