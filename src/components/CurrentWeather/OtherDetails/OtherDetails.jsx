import React from "react"
import styled from "styled-components"
import {
  BsSunrise,
  BsSunset,
  BsMoisture,
  BsWind,
  BsCompass,
} from "react-icons/bs"

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
const OtherDetails = () => {
  return (
    <Container>
      <Box>
        <div>
          <BsSunrise />
          <span>Sunrise: 7.00</span>
        </div>
        <div>
          <BsSunset />
          <span>Sunset: 7.00</span>
        </div>
        <div>
          <BsMoisture />
          <span>Humidity: 60%</span>
        </div>
        <div>
          <BsWind />
          <span>Wind Speed: 10km/h</span>
        </div>
        <div>
          <BsCompass />
          <span>Direction: North-East</span>
        </div>
      </Box>
    </Container>
  )
}

export default OtherDetails
