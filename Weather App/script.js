console.log("Jai Shree Radhey")

const apiKey = "cc440c7894d896fdb334bb871c7fbce3"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await response.json();
    console.log(data)
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        document.querySelector(".city").innerHTML = data.name
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`
    document.querySelector(".humidity").innerHTML = data.main.humidity
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "" + "°C"
    if(data.weather[0].main == "Cloud"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }

document.querySelector(".weather").style.display = "block"
 document.querySelector(".error").style.display = "none"

    
    }

    
    
}

searchBtn.addEventListener("click" , () =>{
    
    checkWeather(searchBox.value)
})