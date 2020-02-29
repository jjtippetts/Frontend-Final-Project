// OPEN WEATHER API
// **********************************************

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Portland&units=imperial&appid=a0c908be7bf2e72f9b00b4f7f2d3a43f";
let weatherData = {};
let CurrentWeather = 0;
let weatherDescription;
let Humidity;
let Pressure;
let WindSpeed;
let Sunrise;
let Sunset;

//Source: www.geeksforgeeks.org
function convertTimestamptoTime(unixTimestamp) {
  unixTimestamp;

  // convert to milliseconds and
  // then create a new Date object
  dateObj = new Date(unixTimestamp * 1000);
  utcString = dateObj.toUTCString();

  time = utcString.slice(-11, -4);
  console.log(time);
  return time;

  // document.querySelector(
  // '.output').textContent = time;
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    weatherData = data;
    console.log(weatherData);

    //Current Weather
    currentWeather = data.main.temp;
    document.getElementsByClassName("current-weather")[0].innerHTML =
      Math.round(currentWeather).toString() + " \xB0 F";

    //Weather Description
    weatherDescription = weatherData.weather[0].description;
    document.getElementsByClassName(
      "weather-description"
    )[0].innerHTML = weatherDescription;

    //Sunrise/Sunset
    let timeZone;
    timeZone = weatherData.timezone;

    sunrise = weatherData.sys.sunrise + timeZone;
    sunrise = convertTimestamptoTime(sunrise);
    document.getElementsByClassName("sunrise")[0].innerHTML = sunrise;

    sunset = weatherData.sys.sunset + timeZone;
    sunset = convertTimestamptoTime(sunset);
    document.getElementsByClassName("sunset")[0].innerHTML = sunset;

    return data.results;
  })
  .catch(error => {
    console.log(error);
  });
