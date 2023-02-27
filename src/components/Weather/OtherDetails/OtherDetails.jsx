import React from 'react'
import styled from 'styled-components'
// import moment from 'moment'
import {
  BsSunrise,
  BsSunset,
  BsMoisture,
  BsWind,
  BsCompass,
} from 'react-icons/bs'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Box = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  gap: 1rem;
`
const OtherDetails = ({ weather }) => {
  let sunrise = weather.forecast.forecastday[0].astro.sunrise
  let sunset = weather.forecast.forecastday[0].astro.sunset
  let humidity = weather.forecast.forecastday[0].day.avghumidity
  let wind = weather.forecast.forecastday[0].day.avgvis_km
  let pressure = weather.current.pressure_mb
  return (
    <Container>
      <Box>
        <div>
          <BsSunrise />
          <span>&nbsp;{sunrise}</span>
        </div>
        <div>
          <BsSunset />
          <span>&nbsp;{sunset}</span>
        </div>
        <div>
          <BsMoisture />
          <span>
            &nbsp;
            {humidity}
            &nbsp;%
          </span>
        </div>
        <div>
          <BsWind />
          <span>
            &nbsp;{wind}
            &nbsp;km/h
          </span>
        </div>
        <div>
          <BsCompass />
          <span>
            &nbsp;{pressure}
            &nbsp;hPa
          </span>
        </div>
      </Box>
    </Container>
  )
}

export default OtherDetails
