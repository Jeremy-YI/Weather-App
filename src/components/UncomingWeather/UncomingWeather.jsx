import React from "react"
import styled from "styled-components"
import Img from "../Asserts/type1.png"
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Box = styled.div`
  display: grid;
  border: solid 1px rgba(0, 0, 0, 0.3);
  grid-template-columns: repeat(7, 1fr);
  margin: 1rem;
  gap: 1rem;
`

const ImageStyle = styled.img.attrs({
  src: Img,
})`
  width: 10rem;
  cursor: pointer;
`
const TemperatureStyle = styled.div`
  font-size: 3rem;
`

const DaysStyle = styled.div`
  font-size: 2rem;
`
const UncomingWeather = ({ title }) => {
  return (
    <>
      <div>DAILY FORCAST</div>
      <Container>
        <Box>
          <div>
            <ImageStyle />
            <TemperatureStyle>25&#176;</TemperatureStyle>
            <DaysStyle>Days1</DaysStyle>
          </div>
          <div>
            <ImageStyle />
            <TemperatureStyle>25&#176;</TemperatureStyle>
            <DaysStyle>Days1</DaysStyle>
          </div>
          <div>
            <ImageStyle />
            <TemperatureStyle>25&#176;</TemperatureStyle>
            <DaysStyle>Days1</DaysStyle>
          </div>
          <div>
            <ImageStyle />
            <TemperatureStyle>25&#176;</TemperatureStyle>
            <DaysStyle>Days1</DaysStyle>
          </div>
          <div>
            <ImageStyle />
            <TemperatureStyle>25&#176;</TemperatureStyle>
            <DaysStyle>Days1</DaysStyle>
          </div>
          <div>
            <ImageStyle />
            <TemperatureStyle>25&#176;</TemperatureStyle>
            <DaysStyle>Days1</DaysStyle>
          </div>
          <div>
            <ImageStyle />
            <TemperatureStyle>25&#176;</TemperatureStyle>
            <DaysStyle>Days1</DaysStyle>
          </div>
        </Box>
      </Container>
    </>
  )
}

export default UncomingWeather
