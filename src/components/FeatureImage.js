import styled from "@emotion/styled"

export default styled("img")`
  @keyframes floating {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  animation: floating 3s ease infinite;
  will-change: transform;

  width: 200px;

  @media (max-width: 400px) {
    display: none;
  }
`
