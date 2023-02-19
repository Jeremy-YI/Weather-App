import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Box = styled.div`
  display: grid;
  border: solid 1px rgba(0, 0, 0, 0.3);
  grid-template-columns: repeat(7, 1rem);
  margin: 0.5rem;
  gap: 0.5rem;
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WeeklyWeather = () => {
  const [city, setCity] = useState('Sydney')
  const [units, setUnits] = useState('metric')
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    const API_KEY = '2994db22be2c06543bfc02266890b2d4'
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}&cnt=${7}`
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data.list)
      })
  }, [])

  return (
    <div>
      <Container>
        <h2>DAILY FORCAST</h2>
        <ul style={{ display: 'flex', flexDirection: 'row' }}>
          {weatherData &&
            weatherData.map((item, index) => (
              <Box key={item.dt}>
                {item.weather[0].icon}
                <br />
                {item.main.temp.toFixed()}&deg;C
                <br />
                {(item.date = moment().add(index, 'days').format('dddd'))}
              </Box>
            ))}
        </ul>
      </Container>
    </div>
  )
}

export default WeeklyWeather
