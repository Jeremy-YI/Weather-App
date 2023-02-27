import React, { useEffect, useState } from 'react'
import moment from 'moment'
import styled from 'styled-components'

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

const WeeklyWeather = ({ weather }) => {
  console.log(weather)
  return (
    <div>
      <h2>DAILY FORCAST</h2>
      <hr style={{ backgroundColor: 'black', color: 'black' }} />
      <Container>
        <ul style={{ display: 'flex', flexDirection: 'row' }}>
          {weather &&
            weather.forecast.forecastday.map((item, index) => (
              <Box key={index}>
                {item.day.condition.icon}
                <br />
                Avg&nbsp;
                {((item.day.maxtemp_c + item.day.mintemp_c) / 2).toFixed()}
                &deg;C
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
