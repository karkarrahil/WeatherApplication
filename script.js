// console.log("Hello world!");
let weather = {
    apikey: "dadc135cbcdb1c9a3dc040b0971f53cc",
    FetchingWeather: (city) => {
        city = document.getElementById("search").value

        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=dadc135cbcdb1c9a3dc040b0971f53cc").then((response) => {
            if (!response.ok) {
                alert("city is not found")
                return false;
            }
            return response.json()
        }).then((data) => {
            document.getElementById("city").innerHTML = "Weather in " + city;
            document.getElementById("Temp").innerHTML = data.main.temp + "°C"
            document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
            document.getElementById("description").innerHTML = data.weather[0].main
            document.getElementById("Humadity").innerHTML = "Humadity: " + data.main.humidity + "%";
            document.getElementById("wind-speed").innerHTML = "Wind speed: " + data.wind.speed + " km/h"
            console.log(data);
            document.body.style.backgroundImage = `url("https://source.unsplash.com/random/? +${data.weather[0].main}")`
        }).catch((error) => {
            document.getElementById('city').innerHTML = "🙄😴"
            console.log(error);
        });

    },

}

document.getElementById("search").addEventListener("keyup", (event) => {

    if (event.key == "Enter") {
        if (document.getElementById("search").value == "") {
            alert("please Eneter a city name")
            return false;
        }
        weather.FetchingWeather()
        console.log("Fetching weather...")
    }
})












// https://openweathermap.org/img/wn/03d.png