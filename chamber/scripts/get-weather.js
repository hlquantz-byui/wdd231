const apiKey = '0915e090c3fb8a595c8c891dbbae5145'; // Replace with your OpenWeatherMap API key
const lat = 16.7665; // Latitude for Timbuktu
const lon = -3.0026; // Longitude for Timbuktu
const weatherSection = document.getElementById('weather-info');

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        // Display current weather
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        weatherSection.innerHTML = `
            <div class="weather-card">
                <h2>Current Weather</h2>
                <p class="temperature">${temperature}°F</p>
                <p class="description">${description.charAt(0).toUpperCase() + description.slice(1)}</p>
                <p class="humidity">Humidity: ${humidity}%</p>
                <p class="wind-speed">Wind Speed: ${windSpeed} mph</p>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherSection.innerHTML = 'Failed to load weather data.';
    }
}

// Call the function to fetch weather data
fetchWeather();
