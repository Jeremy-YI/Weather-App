import React, { useState, useEffect } from 'react'
import City from './City'
import Types from './Types'
import OtherDetails from './OtherDetails'
import styled from 'styled-components'
import { fetchWeatherByCity } from '../../weatherApi/weatherApi'
import WeeklyWeather from './WeeklyWeather/WeeklyWeather'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const SearchSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3rem;
  justify-content: center;
  align-items: center;
`
const SearchBar = styled.input`
  width: 50rem;
  height: 4rem;
  border-radius: 1.5rem;
  text-transform: capitalize;
  margin-right: 1rem;
  :focus {
    outline: none;
  }
`
const Box = styled.div`
  display: grid;
  border: solid 1px rgba(0, 0, 0, 0.3);
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 3px 8px 0px rgb(0, 0, 0, 0.4);
  transition-property: transform, box-shadow;
  transition-duration: 0.3s;
  opacity: 1;
`
const CurrentWeather = ({ prop }) => {
  const [city, setCity] = useState('Sydney')
  const [weather, setWeather] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await fetchWeatherByCity(city)
      setWeather(data)
      setLoading(false)
    }
    fetchWeatherData()
  }, [city])

  function handleSubmit(event) {
    event.preventDefault()
  }

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value)
      e.currentTarget.blur()
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <Container>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <form onSubmit={handleSubmit}>
            <SearchSection>
              <SearchBar
                type="text"
                id="city"
                placeholder="Search for citys...."
                onKeyDown={enterKeyPressed}
              />
            </SearchSection>
            <Box>
              <City city={weather} />
              <Types weather={weather} />
              <OtherDetails weather={weather} />
            </Box>
            <WeeklyWeather weather={weather} />
          </form>
        )}
      </Container>
    </div>
  )
}

export default CurrentWeather
