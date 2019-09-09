import React from "react"
import GeneralSection from "../GeneralSection"
import LearnImage from "../../images/learn.svg"

const Learn = () => {
  return (
    <GeneralSection
      heading="Learn"
      description="Learn the necessary skills through workshops and videos"
      link="https://blog.codersforcauses.org"
      linkText="Learn More"
      image={LearnImage}
      imageName="Learn"
    />
  )
}

export default Learn
