document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '0d1e13ec03b2dcf8d76536ab6725107a'; // Replace with your API key
    const city = 'Oklahoma City';
    const state = 'Oklahoma';

    async function getWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=${apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            const data = await response.json();
            document.getElementById('weather-description').textContent = `Weather: ${data.weather[0].description}`;
            document.getElementById('weather-temperature').textContent = `${data.main.temp}°F`;
            document.getElementById('weather-humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('weather-wind').textContent = `Wind Speed: ${data.wind.speed} mph`;
        } catch (error) {
            console.error('Error fetching the weather data:', error);
            document.getElementById('weather-description').textContent = 'Unable to fetch weather data';
        }
    }

    getWeather();
});
