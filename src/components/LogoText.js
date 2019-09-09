import React from "react"
import styled from "@emotion/styled"

const HighlightedText = styled("p")`
  background: white;
  color: black;
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
`

const Background = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: end;
`

const LogoText = () => {
  return (
    <Background>
      <HighlightedText>coders</HighlightedText>
      <HighlightedText>for causes projects</HighlightedText>
    </Background>
  )
}

export default LogoText
