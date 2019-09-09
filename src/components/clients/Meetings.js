import React from "react"
import GeneralSection from "../GeneralSection"
import InterviewImage from "../../images/interview.svg"

const Meetings = () => {
  return (
    <GeneralSection
      heading="Meetings"
      description="Meet with us to figure out what will be done"
      link="https://blog.codersforcauses.org"
      linkText="Learn More"
      image={InterviewImage}
      imageName="Interview"
    />
  )
}

export default Meetings
