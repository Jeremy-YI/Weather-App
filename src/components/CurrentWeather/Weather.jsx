import React, { useState, useEffect } from 'react'
import City from './City'
import Types from './Types'
import OtherDetails from './OtherDetails'
import styled from 'styled-components'
import getWeatherData from '../../weatherApi/currentWeatherApi'

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
const Weather = () => {
  const [city, setCity] = useState('Sydney')
  const [weather, setWeather] = useState(null)
  const [units, setUnits] = useState('metric')

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData(city, units)
      setWeather(data)
    }
    fetchWeatherData()
  }, [city, units])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setCity(event.target.value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setCity(event.target.value)
  }

  return (
    <div style={{ display: 'flex' }}>
      <Container>
        {weather && (
          <section>
            <SearchSection>
              <SearchBar
                type="name"
                name="city"
                placeholder="Search for citys...."
                onChange={handleSubmit}
                onKeyDown={handleKeyDown}
              />
            </SearchSection>
            <Box>
              <City city={weather} />
              <Types weather={weather} />
              <OtherDetails weather={weather} />
            </Box>
          </section>
        )}
      </Container>
    </div>
  )
}

export default Weather
