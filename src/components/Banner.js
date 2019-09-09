import css from "@emotion/css"
import styled from "@emotion/styled"
import React from "react"
import LogoText from "./LogoText"

const Background = styled("div")`
  height: 50vh;
  background: black;
  padding: 1rem;
`
const TextBox = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 2rem calc((100vw - 800px) / 2) 2rem;
  width: 100%;
  margin: 0;

  h2 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
    color: white;
    font-weight: 300;
  }
`

export default ({ title = " ./Innovation with a mission" }) => {
  return (
    <Background>
      <TextBox>
        <LogoText />
        <h2
          css={css`
            margin-top: 2rem;
          `}
        >
          {title}
        </h2>
      </TextBox>
    </Background>
  )
}
