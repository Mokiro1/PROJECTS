function getWeather() {
  const locationInput = document.getElementById('location');
  const location = locationInput.value;

  // Make sure the location is not empty
  if (location.trim() === '') {
    alert('Please enter a location');
    return;
  }

  const url = `http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civil&output=json`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Process the data and display weather information
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = `<h2>Weather in ${location}</h2>
                              <p>Temperature: ${data.dataseries[0].temp2m}°C</p>
                              <p>Description: ${data.dataseries[0].weather}</p>`;
    })
    .catch(error => {
      console.error('There was a problem fetching the weather data:', error);
    });
}
