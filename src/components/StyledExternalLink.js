import styled from "@emotion/styled"

export default styled("a")`
  text-transform: uppercase;
  background: black;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border: 2px solid black;
  &:hover {
    background: white;
    color: black;
  }
`
