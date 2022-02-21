let apiKey = 'aaf35f46c02471bc7941f4fcd7ffc174';
const searchBtn = document.getElementById(`search`);
const $weatherBtn = document.querySelector(`.weatherBtn`);
//sets elements to have date information printed to
const todayDate = document.querySelector(`.date`);
const futDate1 = document.getElementById(`date1`);
const futDate2 = document.getElementById(`date2`);
const futDate3 = document.getElementById(`date3`);
const futDate4 = document.getElementById(`date4`);
const futDate5 = document.getElementById(`date5`);
//uses moment js to create human readable dates for display on page
const date = moment().format(`M` + `/` + `D` + `/` + `YY`);
const date1 = moment().add(1, `d`).format(`M` + `/` + `D` + `/` + `YY`);
const date2 = moment().add(2, `d`).format(`M` + `/` + `D` + `/` + `YY`);
const date3 = moment().add(3, `d`).format(`M` + `/` + `D` + `/` + `YY`);
const date4 = moment().add(4, `d`).format(`M` + `/` + `D` + `/` + `YY`);
const date5 = moment().add(5, `d`).format(`M` + `/` + `D` + `/` + `YY`);
//sets the dates that appear on page
todayDate.textContent = date;
futDate1.textContent = date1;
futDate2.textContent = date2;
futDate3.textContent = date3;
futDate4.textContent = date4;
futDate5.textContent = date5;
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


function displayWeather() {
    //grabs text input into search field for first fetch request
    let locationInput = document.getElementById(`location`).value;
    //sets local storage item for future functionality 
    localStorage.setItem(locationInput, locationInput);
    //does an api call to get coordinates for second api call
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + locationInput + "&appid=" + apiKey)
    .then(function(coordinateRepsonse) {
        console.log(coordinateRepsonse)
        //makes the promise more readable and accessible
        return coordinateRepsonse.json();
    })
    .then(function(data){
        //sets variable for latitude equal to the searched city from the first fetch request
        var latitude = data.coord.lat;
        //sets variable for longitude equal to the searched city from the first fetch request
        var longitude = data.coord.lon;
        //fetches the weather data after grabbing the coordinates from the first fetch request
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=" + apiKey)
    .then(function(repsonse) {
        console.log(repsonse)
        //makes the promise more readable and accessible
        return repsonse.json();
    })
    .then(function(data){
        console.log(data);
        //sets a variable for a the city name header element 
        let city = document.querySelector(`.city`);
        //grabs the weather icon from the data for the current date
        var weatherIcon = data.current.weather[0].icon;
        //the following five lines grabs the daily weather icons for the first through fifth day of the 5-day forecast
        var dailyWeatherIcon1 = data.daily[0].weather[0].icon;
        var dailyWeatherIcon2 = data.daily[1].weather[0].icon;
        var dailyWeatherIcon3 = data.daily[2].weather[0].icon;
        var dailyWeatherIcon4 = data.daily[3].weather[0].icon;
        var dailyWeatherIcon5 = data.daily[4].weather[0].icon;
        console.log(weatherIcon);
         //adds weather icon to main content on page
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ weatherIcon +"@2x.png";
         //adds temperature to main content on page
        document.querySelector(".temp").textContent = "Temp: " + data.current.temp + "°F";
         //adds wind speed to main content on page
        document.querySelector(".wind").textContent = "Wind: " + data.current.wind_speed + " MPH";
         //adds humidity to main content on page
        document.querySelector(".humidity").textContent = "Humidity: " + data.current.humidity + " %";
        //adds uv index to main content on page
        document.querySelector(".uv").textContent = "UV Index: " + data.current.uvi;
        //adds weather icon for first day of five day forecast
        document.getElementById("dailyIcon1").src = "http://openweathermap.org/img/wn/"+ dailyWeatherIcon1 +"@2x.png";
        //adds weather icon for second day of five day forecast
        document.getElementById("dailyIcon2").src = "http://openweathermap.org/img/wn/"+ dailyWeatherIcon2 +"@2x.png";
        //adds weather icon for third day of five day forecast
        document.getElementById("dailyIcon3").src = "http://openweathermap.org/img/wn/"+ dailyWeatherIcon3 +"@2x.png";
        //adds weather icon for fourth day of five day forecast
        document.getElementById("dailyIcon4").src = "http://openweathermap.org/img/wn/"+ dailyWeatherIcon4 +"@2x.png";
        //adds weather icon for fifth day of five day forecast
        document.getElementById("dailyIcon5").src = "http://openweathermap.org/img/wn/"+ dailyWeatherIcon5 +"@2x.png";
        //adds temperature for first day of five day forecast
        document.getElementById("dailyTemp1").textContent = "Temp: " + data.daily[0].temp.max + "°F";
        //adds temperature for second day of five day forecast
        document.getElementById("dailyTemp2").textContent = "Temp: " + data.daily[1].temp.max + "°F";
        //adds temperature for third day of five day forecast
        document.getElementById("dailyTemp3").textContent = "Temp: " + data.daily[2].temp.max + "°F";
        //adds temperature for fourth day of five day forecast
        document.getElementById("dailyTemp4").textContent = "Temp: " + data.daily[3].temp.max + "°F";
        //adds temperature for fifth day of five day forecast
        document.getElementById("dailyTemp5").textContent = "Temp: " + data.daily[4].temp.max + "°F";
        //adds wind speed for first day of five day forecast
        document.getElementById("dailyWind1").textContent = "Wind: " + data.daily[0].wind_speed + " MPH";
        //adds wind speed for second day of five day forecast
        document.getElementById("dailyWind2").textContent = "Wind: " + data.daily[1].wind_speed + " MPH";
        //adds wind speed for third day of five day forecast
        document.getElementById("dailyWind3").textContent = "Wind: " + data.daily[2].wind_speed + " MPH";
        //adds wind speed for fourth day of five day forecast
        document.getElementById("dailyWind4").textContent = "Wind: " + data.daily[3].wind_speed + " MPH";
        //adds wind speed for fifth day of five day forecast
        document.getElementById("dailyWind5").textContent = "Wind: " + data.daily[4].wind_speed + " MPH";
        ////adds humidity for first day of five day forecast
        document.getElementById("dailyHumidity1").textContent = "Humidity: " + data.daily[0].humidity + " %";
        //adds humidity for second day of five day forecast
        document.getElementById("dailyHumidity2").textContent = "Humidity: " + data.daily[1].humidity + " %";
        //adds humidity for third day of five day forecast
        document.getElementById("dailyHumidity3").textContent = "Humidity: " + data.daily[2].humidity + " %";
        //adds humidity for fourth day of five day forecast
        document.getElementById("dailyHumidity4").textContent = "Humidity: " + data.daily[3].humidity + " %";
        //adds humidity for fifth day of five day forecast
        document.getElementById("dailyHumidity5").textContent = "Humidity: " + data.daily[4].humidity + " %";
        locationInput.textContent = "";
        //Displays the searched city name on screen above todays date
        city.textContent = locationInput;
    })
    //creates a variable that grabs the unordered list from the index file
    var ul = document.getElementById(`searched-list`);
    //creates a variable equal to a dynamically generated list item
    var li = document.createElement(`li`);
    //creates a variable equal to a dynamically generated button
    var btn = document.createElement(`button`);
    //adds classes to the created list item
    li.setAttribute(`class`, `my-2`);
    //adds classes to the created button
    btn.setAttribute(`class`, `btn btn-primary weatherBtn`);
    //changes the text content of the button to the searched city
    btn.textContent = locationInput;
    //adds the list item to the unordered list and adds the button to that
    ul.appendChild(li).appendChild(btn);
    })
};

//calls displayWeather function when search button is clicked
searchBtn.addEventListener(`click`, function(event){
    event.preventDefault();
    const element = event.target;
    
    if (element.matches(`button`)) {
        
        displayWeather();
       
    }
});


   