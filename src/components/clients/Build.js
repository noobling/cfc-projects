import React from "react"
import GeneralSection from "../GeneralSection"
import BuildImage from "../../images/build.svg"

const Build = () => {
  return (
    <GeneralSection
      image={BuildImage}
      imageName="Build"
      heading="Execution of Service"
      description="Students will begin work under guidance of an experienced mentor"
      link="https://blog.codersforcauses.org"
      linkText="Learn More"
    />
  )
}

export default Build
