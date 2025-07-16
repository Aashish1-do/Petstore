const button = document.getElementById("search-button")
const input = document.getElementById("city-input")

const button1 = document.getElementById("search-button1")
const input1 = document.getElementById("city-input1")

const cityname = document.getElementById('city-name')
const citytime = document.getElementById('city-time')
const citytemp = document.getElementById('city-temp')


async function getData(cityName) {
    const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=ff63b8dc75884df3bfd94459252406&q=${cityName}&aqi=yes`
    );
    return await promise.json();
    }
    

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityname.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    citytime.innerText = result.location.localtime;
    citytemp.innerText = result.current.temp_c;
});

// http://api.weatherapi.com/v1/current.json?key=ff63b8dc75884df3bfd94459252406&q=London&aqi=yes

