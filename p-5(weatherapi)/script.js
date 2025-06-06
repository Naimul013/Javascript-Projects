const apiKey = 'dc10323c03459d6d714033d057401782';

const btn = document.querySelector('#getWeather');
const result = document.querySelector('#result');
const city = document.querySelector('#city');

btn.style.display = 'none';

city.addEventListener('click' ,() =>{
  btn.style.display = 'inline-block';
} );

btn.addEventListener('click', async ()=>{
  const city = document.querySelector('#city').value.trim();
  if (!city) {
    result.innerHTML = `<p>Please enter a city name .</p>`;
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    result.innerHTML = `<p>Loading ...</p>`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');

    const data = await response.json();
    showWeather(data);

  } catch (error){
    result.innerHTML = `<p> ${error.message}</p>`;
  }
});

function showWeather(data) {
  const { name, sys, main, weather } = data;
  result.innerHTML = `
  <h2>${name}, ${sys.country}</h2>
  <p>Temperature: ${main.temp}°C</p>
  <p>Condition: ${weather[0].description}</p>
  <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="Weather icon">
`;
}