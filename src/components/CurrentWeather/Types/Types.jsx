import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Box = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`

const Types = ({ weather }) => {
  return (
    <Container>
      <Box>
        <div>
          <img src={weather.iconURL} alt="weatherIcon" />
        </div>
        <div>{weather.description}</div>
      </Box>
    </Container>
  )
}

export default Types
