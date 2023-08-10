document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var city = document.getElementById('city-input').value;
    fetchWeather(city);
  });
  
  function fetchWeather(city) {
    var apiKey = '72d6556907d201fb53a587afef13a775'; // Replace with your own API key
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
  
    fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Weather data not available');
        }
        return response.json();
      })
      .then(function(data) {
        displayWeather(data);
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  }
  
  function displayWeather(data) {
    var weatherDisplay = document.getElementById('weather-display');
    weatherDisplay.innerHTML = '';
  
    var cityName = document.createElement('h3');
    cityName.textContent = data.name;
    weatherDisplay.appendChild(cityName);
  
    var temperature = document.createElement('p');
    temperature.textContent = 'Temperature: ' + (data.main.temp - 273.15).toFixed(2) + '°C';
    weatherDisplay.appendChild(temperature);
  
    var humidity = document.createElement('p');
    humidity.textContent = 'Humidity: ' + data.main.humidity + '%';
    weatherDisplay.appendChild(humidity);
  }
  