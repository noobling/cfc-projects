import React from "react"
import GeneralSection from "../GeneralSection"
import BuildImage from "../../images/build.svg"

const Build = () => {
  return (
    <GeneralSection
      image={BuildImage}
      imageName="Build"
      heading="Build"
      description="Code the project using the knowledge you have learnt"
      link="https://blog.codersforcauses.org"
      linkText="Learn More"
    />
  )
}

export default Build
