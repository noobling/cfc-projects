import React from "react"
import styled from "@emotion/styled-base"
import LearningImage from "../../images/learning.svg"
import css from "@emotion/css"
import FeatureImage from "../FeatureImage"

const List = styled("ul")``

const Container = styled("div")`
  padding: 2rem 1rem;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Features = () => {
  return (
    <Container>
      <h1>
        Start your journey here{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>
      <p>
        We encourage <b>everyone</b> who are passionate about our work to apply
      </p>
      <h2
        css={css`
          margin: 0;
        `}
      >
        Benefits
      </h2>
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
          <li>Working in teams</li>
          <li>Professional software development</li>
          <li>Helping out a good cause</li>
          <li>A network of talented programmers</li>
        </List>

        <FeatureImage src={LearningImage} alt="Teaching" />
      </div>
    </Container>
  )
}

export default Features
