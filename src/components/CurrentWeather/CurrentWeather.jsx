import React, { useState, useEffect } from "react"
import City from "./City"
import Types from "./Types"
import OtherDetails from "./OtherDetails"
import styled from "styled-components"
import getWeatherData from "../../weatherService"
import { BsSearch } from "react-icons/bs"

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
  const [city, setCity] = useState("Sydney")
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData(city)
      console.log(data)
      // setWeather(data)
    }
    fetchWeatherData()
  }, [city])
  return (
    <div style={{ display: "flex" }}>
      <Container>
        <SearchSection>
          <SearchBar type="text" placeholder="Search for citys...." />
          <button
            style={{
              backgroundColor: "#63C3D3",
              border: "none",
            }}
          >
            <BsSearch size={25} />
          </button>
        </SearchSection>
        <Box>
          <City />
          <Types />
          <OtherDetails />
        </Box>
      </Container>
    </div>
  )
}

export default CurrentWeather
