const apikey= "b1c961c7bfaaa424bfe951dc585d334c";
const api ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector('.searchbar');
const searchbtn = document.querySelector('.searchbutton');


async function checkweather(city){
    const response = await fetch(api + city + `&appid=${apikey}`);
    var data = await response.json();
    document.querySelector('.cityname').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity +"%";
    document.querySelector('.speed').innerHTML = data.wind.speed +"km/h" + "Wind Speed" ;
    console.log(data);
}

searchbtn.addEventListener('click',()=>{
    checkweather(search.value);
})



