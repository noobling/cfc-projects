import css from "@emotion/css"
import styled from "@emotion/styled-base"
import React from "react"
import StyledExternalLink from "../StyledExternalLink"

const List = styled("ul")``

const Container = styled("div")`
  padding: 2rem 1rem;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Services = () => {
  return (
    <Container>
      <h1>
        Software help starts here{" "}
        <span role="img" aria-label="rocket">
          🤝
        </span>
      </h1>
      <p>
        We bring together talented University students to build great software
        for your charity so you use your limited funds on other critical
        projects.
      </p>
      <h2>Services</h2>
      <div
        css={css`
          display: flex;
        `}
      >
        <List
          css={css`
            margin-right: 2rem;
          `}
        >
          <li>Fast, modern, professional websites</li>
          <li>Mobile apps</li>
          <li>Desktop apps</li>
          <li>Software Consulting</li>
        </List>
      </div>
      <h2>Requirements</h2>
      <div
        css={css`
          display: flex;
        `}
      >
        <List
          css={css`
            margin-right: 2rem;
          `}
        >
          <li>You are a Charity/Not-for-profit</li>
          <li>You are committed</li>
          <li>Willing to give back a little to our Charity</li>
        </List>
      </div>
      <StyledExternalLink
        href="https://blog.codersforcauses.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more
      </StyledExternalLink>
    </Container>
  )
}

export default Services
