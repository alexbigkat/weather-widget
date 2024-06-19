document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'e11152814f203b00432e530cfddebd54'; // Replace with your API key
    const city = 'Oklahoma City'; // Update city to Oklahoma City

    async function getWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},US&units=imperial&appid=${apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            const data = await response.json();
            document.getElementById('weather-description').querySelector('span').textContent = `${data.weather[0].description}`;
            document.getElementById('weather-temperature').querySelector('span').textContent = `${data.main.temp}°F`;
            document.getElementById('weather-humidity').querySelector('span').textContent = `${data.main.humidity}%`;
            document.getElementById('weather-wind').querySelector('span').textContent = `${data.wind.speed} mph`;
        } catch (error) {
            console.error('Error fetching the weather data:', error);
            document.getElementById('weather-description').querySelector('span').textContent = 'Unable to fetch data';
        }
    }

    getWeather();
});
