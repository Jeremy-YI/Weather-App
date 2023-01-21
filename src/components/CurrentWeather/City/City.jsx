import React from "react"
import styled from "styled-components"
import { FiThermometer } from "react-icons/fi"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Box = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`

const City = () => {
  return (
    <Container>
      <Box>
        <div>Sydney</div>
        <div>Date</div>
        <div>
          <FiThermometer size={35} />
          25&#176;
        </div>
      </Box>
    </Container>
  )
}

export default City
