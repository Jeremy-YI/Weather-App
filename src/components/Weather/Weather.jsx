import React, { useState, useEffect } from 'react'
import City from './City'
import Types from './Types'
import OtherDetails from './OtherDetails'
import styled from 'styled-components'
// import TextField from '@mui/material/TextField'
import { fetchWeatherByCity } from '../../weatherApi/weatherApi'
import WeeklyWeather from './WeeklyWeather/WeeklyWeather'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const SearchSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
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
`
const CurrentWeather = () => {
  const [city, setCity] = useState('Sydney')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await fetchWeatherByCity(city)
      setWeather(data)
    }
    fetchWeatherData()
  }, [city])

  const handleButtonClick = (e) => {
    e.preventDefault()
    const value = e.target.value
    setCity(value)
  }

  return (
    <div style={{ display: 'flex' }}>
      <Container>
        {weather && (
          <form>
            <SearchSection>
              <SearchBar
                type="text"
                name="city"
                placeholder="Search for citys...."
                onChange={handleButtonClick}
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
