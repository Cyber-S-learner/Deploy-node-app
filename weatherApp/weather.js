import readline from 'readline/promises';
// import fetch from 'node-fetch'; // add this if Node < 18

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const api = '27cfc8d0c4b8df5f08069ec450b5cff7';

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    try {
        const response = await fetch(url);
        console.log(response);

        if (!response.ok) throw new Error('City not found');
        const weatherData = await response.json();
        console.log('Weather Information:');
        console.log(`City       : ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp} °C`);
        console.log(`Description: ${weatherData.weather[0].description}`);
        console.log(`Humidity   : ${weatherData.main.humidity}%`);
        console.log(`Wind Speed : ${weatherData.wind.speed}`);
    } catch (error) {
        console.log(error.message);
    }
};

const main = async () => {
    const city = await rl.question('Enter the city name: ');
    await getWeather(city);
    rl.close();
};

main();
