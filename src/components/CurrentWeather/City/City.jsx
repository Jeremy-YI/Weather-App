import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { FiThermometer } from 'react-icons/fi'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Box = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`
const getLocalTime = (lat, lon) => {
  const currentTime = new Date().getTime() / 1000
  const timezoneOffset = Math.round(lon / 15) * 60 * 60
  const localTime = currentTime + timezoneOffset
  const date = new Date(localTime * 1000)
  const options = {
    timeZone: 'UTC',
    month: 'long',
    day: 'numeric',
  }
  const formatter = new Intl.DateTimeFormat([], options)
  const localTimeString = formatter.format(date)
  return localTimeString
}

const City = ({ city }) => {
  const currentDay = moment().format('dddd')
  return (
    <Container>
      <Box>
        <div>{city.name}</div>
        <div>{getLocalTime(city.lat, city.lon)}</div>
        <div>{currentDay}</div>
        <div>
          <FiThermometer size={35} />
          {city.temp.toFixed()}&#176;
        </div>
      </Box>
    </Container>
  )
}

export default City
