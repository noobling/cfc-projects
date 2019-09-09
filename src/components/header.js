import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GatsbyImage from "gatsby-image"
import css from "@emotion/css"
import styled from "@emotion/styled"

const NavContainer = styled("div")`
  margin: 0 auto;
  maxwidth: 960;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
`

const linkStyles = css`
  color: black;
  margin-right: 2rem;
  font-size: 1.5rem;
  // Stops it from jumping around when we add a border to it
  height: 1.7rem;
  text-decoration: none;
  &:hover {
    border-bottom: 6px solid black;
  }
`

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cfc_logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header
      style={{
        background: ``,
      }}
    >
      <NavContainer>
        <Link
          to="/"
          css={css`
            margin-right: auto;
          `}
        >
          <GatsbyImage
            fluid={data.file.childImageSharp.fluid}
            alt="cfc logo"
            css={css`
              width: 50px;
              height: 50px;
              border-radius: 50%;
            `}
          />
        </Link>
        <Link css={linkStyles} to="/students">
          Students
        </Link>
        <Link css={linkStyles} to="/clients">
          Clients
        </Link>
      </NavContainer>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
