import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import css from "@emotion/css"

const Container = styled("div")`
  height: 70vh;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const StudentsHalf = css`
  background: #2d3142;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    background: black;
  }
`

const ClientsHalf = css`
  background: #ef8354;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  text-decoration: none;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    background: black;
  }
`

const Text = styled("p")`
  color: white;
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
`

export default () => {
  return (
    <Container>
      <Link css={StudentsHalf} to="/students">
        <Text
          css={css`
            margin-top: 2rem;
          `}
        >
          I'm thinking of working on a project
        </Text>
      </Link>

      <Link css={ClientsHalf} to="/clients">
        <Text
          css={css`
            margin-top: 2rem;
          `}
        >
          I need some help with software
        </Text>
      </Link>
    </Container>
  )
}
