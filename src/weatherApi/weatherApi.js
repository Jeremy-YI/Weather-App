const API_KEY = 'ed8fb3ba9de0436aa6974341231902'
const FETCH_CITY_WEATHER_URL = 'http://api.weatherapi.com/v1/forecast.json'

export const fetchWeatherByCity = async (city) => {
  const url = new URL(FETCH_CITY_WEATHER_URL)

  url.searchParams.append('key', API_KEY)
  url.searchParams.append('q', city)
  url.searchParams.append('days', 7)
  url.searchParams.append('aqi', 'no')
  url.searchParams.append('alerts', 'no')

  const response = await fetch(url)
  const data = await response.json()
  return data

  // const data = await fetch(URL)
  //   .then((res) => res.json())
  //   .then((data) => data)
  // console.log(data)
  // return data
  // const {
  //   weather,
  //   main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
  //   wind: { speed },
  //   sys: { country },
  //   name,
  // } = data

  // const { description } = weather[0]

  // return {
  //   description,
  //   temp,
  //   feels_like,
  //   temp_min,
  //   temp_max,
  //   pressure,
  //   humidity,
  //   speed,
  //   country,
  //   name,
  // }
}
