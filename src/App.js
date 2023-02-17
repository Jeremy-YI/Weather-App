import React from 'react'
import Weather from './components/CurrentWeather/Weather'
import WeeklyWeather from './components/WeeklyWeather'
import GlobalStyle from './theme/GlobalStyle'
import styled from 'styled-components'
import theme from './theme/index'

const GlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
`
const Container = styled.div`
  background-color: ${theme.palette.background_light_cyan};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100rem;
  border-radius: 2.5rem;
`
const App = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalContainer>
        <Container>
          <Weather />
          <WeeklyWeather />
        </Container>
      </GlobalContainer>
    </>
  )
}

export default App
