const city = document.querySelector('#city');
const feelsLike = document.querySelector('#feels-like');
const skyDescription = document.querySelector('#sky-description');
const list = document.querySelector('#list');
const temp = document.querySelector('#temp');
const icon = document.querySelector('#icon');

(async function () {
  try {
    const response = await fetch('https://openweathermap.org/data/2.5/weather?id=687700&appid=439d4b804bc8187953eb36d2a8c26a02');
    const data = await response.json();
    const visibility = (data.visibility / 1000).toFixed(1);
    const tempValue = Math.floor(data.main.temp);
    const feelsLikeValue = Math.floor(data.main.feels_like);
    
    icon.setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);

    temp.textContent = `${tempValue}°C`;
    city.textContent = data.name
    feelsLike.textContent = `${feelsLikeValue}°C`;
    skyDescription.textContent = `${data.weather[0].description}`;

    list.innerHTML = `
      <li>Wind speed: ${data.wind.speed}m/s</li>
      <li>Humidity: ${data.main.humidity}%</li>
      <li>Dew point: ${data.wind.speed}</li>
      <li>Visibility: ${visibility}</li>
    `

  } catch(err) {
    console.log('err', err);    
  }

})();