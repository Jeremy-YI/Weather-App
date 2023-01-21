import React, { useEffect } from "react"
// const API_KEY = `${process.env.REACT_APP_API_KEY}`
// console.log(API_KEY)
// // const API_KEY = "6096dcd8a1b4b21aff4f8b250e23de45"
// ;`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
// const makeIconURL = (iconId) =>
//   `https://openweathermap.org/img/wn/${iconId}@2x.png`

// const getWeatherData = async (city) => {
// const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
// const data = await fetch(API_URL)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
function WeatherData() {
  useEffect(() => {
    const fetchWeatherData = async (city) => {
      const API_KEY = process.env.REACT_APP_API_KEY
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      const data = await fetch(API_URL)
        .then((res) => res.json())
        .then((data) => console.log(data))
    }
    fetchWeatherData()
  }, [])

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data

  //   const { description, icon } = weather[0]
  //   return {
  //     description,
  //     iconURL: makeIconURL(icon),
  //     temp,
  //     feels_like,
  //     temp_min,
  //     temp_max,
  //     pressure,
  //     humidity,
  //     speed,
  //     country,
  //     name,
  //   }
}

export default WeatherData
