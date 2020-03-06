// OPEN WEATHER API
// **********************************************

//API CALLS TO GET CURRENT WEATHER & FIVE DAY FORECAST
async function getCurrentWeather() {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=Portland&units=imperial&appid=a0c908be7bf2e72f9b00b4f7f2d3a43f";
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

async function getFiveDayForecast() {
  let url =
    "https://api.openweathermap.org/data/2.5/forecast?q=Portland&units=imperial&appid=a0c908be7bf2e72f9b00b4f7f2d3a43f";
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  return data;
}

//**********************************************************
//FUNCTIONS TO DISPLAY CURRENT WEATHER AND FIVE DAY FORECAST

//Display Current Weather
function displayCurrentWeather(data) {
  //Current Weather
  const currentWeather = Math.round(data.main.temp).toString() + " \xB0 F";
  $(".current-weather").prepend(currentWeather);

  //Weather Icon
  let iconCode = data.weather[0].icon;
  let iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
  $(".wicon").attr("src", iconURL);

  //feels like
  let feelsLike = Math.round(data.main.feels_like).toString() + " \xB0 F";
  $(".feels-like").append(" " + feelsLike);

  //Weather Description
  let weatherDescription = data.weather[0].description;
  $(".weather-description").text(weatherDescription);

  //Humidity
  let humidity = data.main.humidity;
  $(".humidity").append(" " + humidity + "%");

  //Sunrise/Sunset
  let timeZone;
  timeZone = data.timezone;

  let sunrise = data.sys.sunrise + timeZone;
  sunrise = convertTimestamptoTime(sunrise);
  sunrise = sunrise.split(":").slice(0, 2);
  sunrise = formatTime(sunrise[0], parseInt(sunrise[1]));
  $(".sunrise").append(" " + sunrise);

  let sunset = data.sys.sunset + timeZone;
  sunset = convertTimestamptoTime(sunset);
  console.log(sunset);
  sunset = sunset.split(":").slice(0, 2);
  sunset = formatTime(sunset[0], parseInt(sunset[1]));
  $(".sunset").append(" " + sunset);
}

//DISPLAY 3 HOUR FORECAST FOR NEXT FIVE DAYS
function displayFiveDayForecast(fullData) {
  data = fullData.list;
  let timeZone = fullData.city.timezone;
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  console.log(timeZone);

  console.log(data);
  data.forEach(function(forecast) {
    let date = new Date(forecast.dt * 1000);
    let day = weekDays[date.getDate()];
    let hours = date.getHours();
    let time = formatTime(hours, 00);

    console.log(time);

    day = $("<div></div>").text(day);
    time = $("<div></div>").text(time);
    let temp = $("<div></div>").text(forecast.main.temp);
    let description = $("<div></div>").text(forecast.weather[0].description);
    let parent = $("<div class='weather-item'></div>").append(
      day,
      time,
      temp,
      description
    );
    $(".fiveDayForecast").append(parent);

  });
}

//***************************************
//CALL DISPLAY FUNCTIONS
async function displayWeather() {
  //Get Current Weather
  currentWeatherData = await getCurrentWeather();
  displayCurrentWeather(currentWeatherData);
  //Get Five Day Forecast
  fiveDayForecast = await getFiveDayForecast();
  displayFiveDayForecast(fiveDayForecast);
}

displayWeather();

// const map_url =
//   "https://tile.openweathermap.org/map/clouds/3/2/3.png?appid=a0c908be7bf2e72f9b00b4f7f2d3a43f";

// fetch(map_url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
