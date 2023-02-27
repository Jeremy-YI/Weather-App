import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const PicStyle = styled.img`
  width: 20rem;
  height: 20rem;
`
const WeatherType = styled.text`
  font-size: 2rem;
  padding: 0 3rem;
`
const Types = ({ weather }) => {
  return (
    <Container>
      <div>
        <PicStyle src={weather.current.condition.icon} alt="weatherIcon" />
      </div>
      <WeatherType>{weather.current.condition.text}</WeatherType>
    </Container>
  )
}

export default Types
