import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
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
  return (
    <Container>
      <Box>
        <div>
          <BsSunrise />
          <span>&nbsp;{moment.unix(weather.sunrise).format('LT')}</span>
        </div>
        <div>
          <BsSunset />
          <span>&nbsp;{moment.unix(weather.sunset).format('LT')}</span>
        </div>
        <div>
          <BsMoisture />
          <span>&nbsp;{weather.humidity}%</span>
        </div>
        <div>
          <BsWind />
          <span>&nbsp;{weather.speed}km/h</span>
        </div>
        <div>
          <BsCompass />
          <span>&nbsp;{weather.pressure}Pa</span>
        </div>
      </Box>
    </Container>
  )
}

export default OtherDetails
