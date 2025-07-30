const apiKey="84b79da5e5d7c92085660485702f4ce8";
const city=document.getElementById("cityInput").value;
async function getWeather() {

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const response=await fetch(url);
        if(!response.ok)throw new Error("City not found");
        const data=await response.json();

        const weatherHTML=`
        <p>Temperature: ${data.main.temp}*C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.main.wind} m/s </p>
        `;

        document.getElementById("weatherCard").innerHTML=weatherHTML;
    }
    catch(error)
    {
        document.getElementById("weatherCard").innerHTML=`<p>${error.message}</p>`
    }
}