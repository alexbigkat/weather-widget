document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'e11152814f203b00432e530cfddebd54'; // Replace with your API key
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
            document.getElementById('description-text').textContent = data.weather[0].description;
            document.getElementById('temperature-text').textContent = `${data.main.temp}°F`;
            document.getElementById('humidity-text').textContent = `${data.main.humidity}%`;
            document.getElementById('wind-text').textContent = `${data.wind.speed} mph`;
        } catch (error) {
            console.error('Error fetching the weather data:', error);
            document.getElementById('description-text').textContent = 'Unable to fetch weather data';
        }
    }

    getWeather();
});
