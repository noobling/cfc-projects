import React from "react"
import GeneralSection from "../GeneralSection"
import InterviewImage from "../../images/interview.svg"

const Description = () => {
  return (
    <span>
      A casual conversation with one of our experienced committee members
    </span>
  )
}

const Interview = () => {
  return (
    <GeneralSection
      heading="Interview"
      description={<Description />}
      link="https://blog.codersforcauses.org"
      linkText="Learn about what we look for"
      image={InterviewImage}
      imageName="Interview"
    />
  )
}

export default Interview
