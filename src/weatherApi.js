const API_KEY = `6096dcd8a1b4b21aff4f8b250e23de45`

const getWeatherData = async (city, units = 'metric') => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
  const data = await fetch(API_URL)
    .then((res) => res.json())
    .then((data) => data)

  const IconURL = (iconId) =>
    `https://openweathermap.org/img/wn/${iconId}@2x.png`

  const {
    weather,
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country, sunrise, sunset },
    dt,
    name,
    timezone,
  } = data

  const { description, icon } = weather[0]

  return {
    description,
    iconURL: IconURL(icon),
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    sunrise,
    sunset,
    name,
    dt,
    timezone,
  }
}
export default getWeatherData
