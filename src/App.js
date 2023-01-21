import React from "react"
import CurrentWeather from "./components/CurrentWeather"
import UncomingWeather from "./components/UncomingWeather"
import GlobalStyle from "./theme/GlobalStyle"
import styled from "styled-components"
import theme from "./theme/index"

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
  width: 1000px;
  border-radius: 25px;
`
const App = () => {
  const API_KEY = process.env.REACT_APP_API_KEY
  console.log(API_KEY)
  return (
    <>
      <GlobalStyle />
      <GlobalContainer>
        <Container>
          <CurrentWeather />
          <UncomingWeather />
        </Container>
      </GlobalContainer>
    </>
  )
}

export default App
