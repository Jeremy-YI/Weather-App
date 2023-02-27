import React from 'react'
import styled from 'styled-components'
import theme from '../../../theme'
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
const CityStyle = styled.text`
  font-size: 3rem;
  font-weight: bold;
  padding: 2rem;
`
const DateStyle = styled.text`
  font-size: 2rem;
  margin-left: 2rem;
`
const WeekdayStyle = styled.text`
  font-size: 1.5rem;
  margin-left: 2rem;
`
const TempratureStyle = styled.text`
  font-size: 5rem;
  font-weight: bold;
  padding: 0 2rem;
`
const getLocalTime = (lat, lon) => {
  const currentTime = new Date().getTime() / 1000
  const timezoneOffset = Math.round(lon / 15) * 60 * 60
  const localTime = currentTime + timezoneOffset
  const date = new Date(localTime * 1000)
  const options = {
    timeZone: 'UTC',
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }
  const formatter = new Intl.DateTimeFormat([], options)
  const localTimeString = formatter.format(date)
  return localTimeString
}

const City = ({ city }) => {
  return (
    <Container>
      <Box>
        <CityStyle>{city.location.name}</CityStyle>
        <div>
          <DateStyle>
            {getLocalTime(city.location.lat, city.location.lon).split(',')[1]}
          </DateStyle>
          <br />
          <WeekdayStyle>
            {getLocalTime(city.location.lat, city.location.lon).split(',')[0]}
          </WeekdayStyle>
        </div>
        <TempratureStyle>
          <FiThermometer size={45} color={'red'} />
          {city.current.temp_c}&#176;
        </TempratureStyle>
      </Box>
    </Container>
  )
}

export default City
