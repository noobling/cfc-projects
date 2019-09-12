import React from "react"
import FacebookLogo from "../images/facebook.svg"
import LinkedInLogo from "../images/linkedin.svg"
import GithubLogo from "../images/github-sign.svg"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Logos = styled("div")`
  display: flex;
  justify-content: flex-end;
`

const StyledFooter = styled("footer")`
  background: #eee;
  padding: 1rem;
  margin: 0;
  margin-top: 4rem;
`

const Logo = styled("a")`
  width: 30px;
  height: 30px;
  margin: 0;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`

const LogoImage = styled("img")`
  margin: 0;
`

const Text = styled("p")`
  margin: 0;
`

export default () => {
  return (
    <StyledFooter>
      <Text>
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        by David
      </Text>
      <Link to="/">&larr;Back Home</Link>
      <Logos>
        <Logo
          href="https://facebook.com/codersforcauses"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoImage src={FacebookLogo} alt="Facebook" />
        </Logo>
        <Logo
          href="https://github.com/codersforcauses"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoImage src={GithubLogo} alt="Github" />
        </Logo>
        <Logo
          href="https://au.linkedin.com/company/coders-for-causes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoImage src={LinkedInLogo} alt="LinkedIn" />
        </Logo>
      </Logos>
    </StyledFooter>
  )
}
