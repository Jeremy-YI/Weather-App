import React from "react"
import styled from "styled-components"
import Image from "../../Asserts/type1.png"

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

const Types = () => {
  return (
    <Container>
      <Box>
        <div>
          <img src={Image} alt="img" />
        </div>
        <div>types</div>
      </Box>
    </Container>
  )
}

export default Types
