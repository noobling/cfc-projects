import React from "react"
import styled from "@emotion/styled-base"
import StyledExternalLink from "./StyledExternalLink"

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`

const Image = styled("img")`
  width: 100px;
`

const GeneralSection = ({
  image,
  imageName,
  heading,
  description,
  link,
  linkText,
}) => {
  return (
    <Container>
      <Image src={image} alt={imageName} />
      <h3>{heading}</h3>
      <p>{description}</p>
      <StyledExternalLink href={link} target="_blank" rel="noopener noreferrer">
        {linkText}
      </StyledExternalLink>
    </Container>
  )
}

export default GeneralSection
