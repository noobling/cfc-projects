import React from "react"
import ResumeImage from "../../images/resume.svg"
import GeneralSection from "../GeneralSection"

const Application = () => {
  return (
    <GeneralSection
      image={ResumeImage}
      imageName="Resume"
      link="https://google.com"
      linkText="Apply Now"
      heading="Application"
      description="Apply for one or more of our projects"
    />
  )
}

export default Application
