const API_key = `c3e03667ca4dc054ddfd39bb4d272165`



let content =document.getElementById("text")
let formEl = document.querySelector("form")
let search = document.getElementById("search")
let container = document.querySelector(".container")


const getWeather =async (city_name)=>{
    try {
     const api = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`
     const response = await fetch(api)
     const data = await response.json()
     //console.log(data)
      return display(data)
     
    } catch (error) {
        console.log(error)
    }
    }
    formEl.addEventListener("submit",(e)=>{
        e.preventDefault()
        getWeather(search.value)
        content.innerText= "Today's weather in "+search.value
        
    })

function display(data){
    console.log(data)
 container.innerHTML=   `
    
    <div class="card">
    <img src="https://img.icons8.com/stickers/2x/thermometer-three-quarters.png" alt>
    <h2>Temperature: ${data.main.temp} °C</h2>
    <h2>Feels Like: ${data.main.feels_like} °C</h2>
    </div>
            <div class="card">
            <img src="https://img.icons8.com/color/2x/weather-forecast.png" alt>
            <h2>Weather: ${data.weather[0].main}</h2>
            </div>
            <div class="card">
            <img src="https://img.icons8.com/office/2x/longitude.png" alt>
            <h2>Latitude: ${data.coord.lat}</h2>
                <h2>Longitude: ${data.coord.lon}</h2>
            
            </div>
            <div class="card">
            <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/2x/external-visibility-content-creator-xnimrodx-lineal-color-xnimrodx.png" alt>
            <h2>Visibility: ${data.visibility/1000} km</h2>
            <img src="https://img.icons8.com/cute-clipart/2x/water.png" alt>
            <h2>Humidity: ${data.main.humidity} % </h2>
            </div>
    
    `
}