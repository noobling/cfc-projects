import React from "react"
import styled from "@emotion/styled"

const Container = styled("div")`
  display: flex;
  justify-content: center;
`

const StyledSVG = styled("svg")`
  height: 5rem;
  width: 1rem;
`

const StyledLine = styled("line")`
  @keyframes animateline {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -5rem;
    }
  }
  stroke: black;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-dasharray: 2px 20px;
  animation: animateline 5s linear both infinite;
`

const DankLine = () => {
  return (
    <Container>
      <StyledSVG viewbox="0 0 10 100">
        <StyledLine x1="5" x2="5" y1="0" y2="150" />
      </StyledSVG>
    </Container>
  )
}

export default DankLine
