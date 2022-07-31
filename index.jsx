let button = document.querySelector(".button");
let inputvalue = document.querySelector(".search-box");
let temp = document.querySelector(".current .temp");
let description = document.querySelector(".current .weather");
let city = document.querySelector(".location .city");
let date = document.querySelector(".location .date");

button.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=21c30eeb5c96ef4679ad7476fe545a8a`
  )
    .then((response) => response.json())
    .then(displayData)
    .catch((err) => document.querySelector(".error").innerText = "Please Enter a Valid City Name");
});

const displayData = (weather) => {
  temp.innerHTML = `${Math.round(weather.main.temp)}°C`;
  description.innerText = `${weather.weather[0].description}`;
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  let today = new Date();
  date.innerText = dateBuilder(today);
};

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${month}${date} ${year}`;
}