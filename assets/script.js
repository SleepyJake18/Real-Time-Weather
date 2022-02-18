let apiKey = 'aaf35f46c02471bc7941f4fcd7ffc174';
const searchBtn = document.getElementById(`search`);

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


function displayWeather() {
    let locationInput = document.getElementById(`location`).value;
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + locationInput + "&appid=" + apiKey)
    .then(function(coordinateRepsonse) {
        console.log(coordinateRepsonse)
        return coordinateRepsonse.json();
    })
    .then(function(data){
        console.log(data)
        localStorage.setItem(`latitude`, data.coord.lat);
        localStorage.setItem(`longitude`, data.coord.lon);
    
        var latitude = localStorage.getItem(`latitude`);
        var longitude = localStorage.getItem(`longitude`);
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=" + apiKey)
    .then(function(repsonse) {
        console.log(repsonse)
        return repsonse.json();
    })
    .then(function(data){
        console.log(data);
        var weatherIcon = data.current.weather[0].icon;
        var dailyWeatherIcon1 = data.daily[0].weather[0].icon;
        var dailyWeatherIcon2 = data.daily[1].weather[0].icon;
        var dailyWeatherIcon3 = data.daily[2].weather[0].icon;
        var dailyWeatherIcon4 = data.daily[3].weather[0].icon;
        var dailyWeatherIcon5 = data.daily[4].weather[0].icon;
        console.log(weatherIcon);
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ weatherIcon +"@2x.png";
        document.querySelector(".temp").textContent = "Temp: " + data.current.temp + "°F";
        document.querySelector(".wind").textContent = "Wind: " + data.current.wind_speed + " MPH";
        document.querySelector(".humidity").textContent = "Humidity: " + data.current.humidity + " %";
        document.querySelector(".uv").textContent = "UV Index: " + data.current.uvi;
        document.getElementById("dailyIcon1").src = "http://openweathermap.org/img/wn/"+ dailyWeatherIcon1 +"@2x.png";
        document.getElementById("dailyIcon2").src = "http://openweathermap.org/img/wn/"+ dailyWeatherIcon2 +"@2x.png";
        document.getElementById("dailyIcon3").src = "http://openweathermap.org/img/wn/"+ dailyWeatherIcon3 +"@2x.png";
        document.getElementById("dailyIcon4").src = "http://openweathermap.org/img/wn/"+ dailyWeatherIcon4 +"@2x.png";
        document.getElementById("dailyIcon5").src = "http://openweathermap.org/img/wn/"+ dailyWeatherIcon5 +"@2x.png";
        document.getElementById("dailyTemp1").textContent = "Temp: " + data.daily[0].temp.max + "°F";
        document.getElementById("dailyTemp2").textContent = "Temp: " + data.daily[1].temp.max + "°F";
        document.getElementById("dailyTemp3").textContent = "Temp: " + data.daily[2].temp.max + "°F";
        document.getElementById("dailyTemp4").textContent = "Temp: " + data.daily[3].temp.max + "°F";
        document.getElementById("dailyTemp5").textContent = "Temp: " + data.daily[4].temp.max + "°F";
        document.getElementById("dailyWind1").textContent = "Wind: " + data.daily[0].wind_speed + " MPH";
        document.getElementById("dailyWind2").textContent = "Wind: " + data.daily[1].wind_speed + " MPH";
        document.getElementById("dailyWind3").textContent = "Wind: " + data.daily[2].wind_speed + " MPH";
        document.getElementById("dailyWind4").textContent = "Wind: " + data.daily[3].wind_speed + " MPH";
        document.getElementById("dailyWind5").textContent = "Wind: " + data.daily[4].wind_speed + " MPH";
        document.getElementById("dailyHumidity1").textContent = "Humidity: " + data.daily[0].humidity + " %";
        document.getElementById("dailyHumidity2").textContent = "Humidity: " + data.daily[1].humidity + " %";
        document.getElementById("dailyHumidity3").textContent = "Humidity: " + data.daily[2].humidity + " %";
        document.getElementById("dailyHumidity4").textContent = "Humidity: " + data.daily[3].humidity + " %";
        document.getElementById("dailyHumidity5").textContent = "Humidity: " + data.daily[4].humidity + " %";
    })
    })
};

searchBtn.addEventListener(`click`, function(event){
    event.preventDefault();
    const element = event.target;
    
    if (element.matches(`button`)) {
        let locationInput = document.getElementById(`location`).value;
        displayWeather();

        locationInput.textContent = "";
        
    }
});